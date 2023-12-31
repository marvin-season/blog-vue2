import axios from 'axios'
import {Message} from 'element-ui'
import store from '../store'
import router from "../router";
import {getToken} from './localStore'

// create an axios instance
const request = axios.create({
    // baseURL: 'http://marvin.ink:12346/',
    baseURL: 'http://marvin.ink:20211/blog',
    timeout: 5000 // request timeout
})

// request interceptor
request.interceptors.request.use(
    config => {
        // do something before request is sent
        if (store.getters.token) {
            config.headers['Authorization'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
request.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        if (response.config.url.endsWith('.json')) {
            return response.data
        }
        const res = response.data
        if (res.code !== 0) {
            let message
            if (res.message) {
                if (res.hint && res.code !== 500) {
                    message = `${res.message}：${res.hint}`
                } else {
                    message = res.message
                }
            } else {
                message = '服务器错误'
                console.error(res)
            }
            Message({
                message: message,
                type: 'error',
                duration: 3 * 1000
            })
            console.table()
            console.warn(res.result)
            // 401: 认证失败
            if (res.code === 401) {
                // 重新登录
                store.dispatch('resetToken').then(() => {
                    router.push('/').then(() => {
                    })
                })
            }
            return Promise.reject(new Error(res.message || '错误'))
        } else {
            return res.result
        }
    },
    error => {
        console.log(error) // for debug
        Message({
            message: '网络错误',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default request
