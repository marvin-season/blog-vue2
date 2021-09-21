import request from "../utils/request";
import REQUEST_METHOD from "../utils/request-methods";

export default {
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
