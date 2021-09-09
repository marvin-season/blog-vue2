import request from '../utils/request'
import REQUEST_METHOD from '../utils/request-methods'

export default {
    login(data) {
        return request({
            method: REQUEST_METHOD.POST,
            url: '/login',
            data: data
        })
    },
    getCaptcha() {
        return request({
            method: REQUEST_METHOD.GET,
            url: '/captcha/captcha'
        })
    },
    verify(data) {
        return request({
            method: REQUEST_METHOD.POST,
            url: '/captcha/verify',
            data: data
        })
    }
}

