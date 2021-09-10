import UserApi from '../api/user'
import * as TYPES from './types'
import * as Auth from '../utils/auth'
import {resetRouter} from '../router'


const actions = {
    login({commit}, data) {
        return new Promise((resolve, reject) => {
            UserApi.login(data).then(res => {
                const {token} = res
                const {userSession} = res
                // 存储令牌
                commit(TYPES.SET_TOKEN, token)
                Auth.setToken(token)

                // 存储用户基本信息
                commit(TYPES.SET_USER, userSession)
                Auth.setUser(userSession)
                resolve()
            }).catch(resolve => {
                reject(resolve)
            })
        })
    },
    resetToken({commit}) {
        return new Promise(resolve => {
            Auth.removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        })
    },
    logout({commit}) {
        return new Promise((resolve, reject) => {
            try {
                Auth.removeToken() // must remove  token  first
                Auth.removeUser() // 擦除用户信息

                resetRouter()
                commit(TYPES.RESET_STATE)
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    },

}
export default actions
