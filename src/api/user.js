import request from '../utils/request'
import REQUEST_METHOD from '../utils/request-methods'

export default {
    login(params) {
        return request({
            method: REQUEST_METHOD.POST,
            url: '/user/login',
            data: params
        })
    }
}
5
