import request from '../utils/request'
import REQUEST_METHOD from '../utils/request-methods'

export default {
    registry(data) {
        return request({
            method: REQUEST_METHOD.POST,
            url: '/user/registry',
            data
        })
    },
    login(data) {
        return request({
            method: REQUEST_METHOD.POST,
            url: '/login',
            data: data
        })
    },
    // 获得登录用户主体信息
    getPrincipal() {
        return request({
            method: REQUEST_METHOD.GET,
            url: '/user/principal'
        })
    },
    // 查询用户个人信息
    getUserInfo(id) {
        return request({
            method: REQUEST_METHOD.GET,
            url: `/user/${id}`
        })
    },
    updateUserInfo(data) {
        return request({
            method: REQUEST_METHOD.POST,
            url: '/user/update',
            data: data
        })
    },
    updateAvatar(data) {
        return request({
            method: REQUEST_METHOD.POST,
            url: "/user/avatar",
            data
        })
    },
    getFans(id) {
        return request({
            method: REQUEST_METHOD.GET,
            url: `/user/fans/${id}`
        })
    },
    getLove(id) {
        return request({
            method: REQUEST_METHOD.GET,
            url: `/user/love/${id}`
        })
    },
    addLove(whoId, fansId) {
        return request({
            method: REQUEST_METHOD.POST,
            url: `/user/addLove/${whoId}/${fansId}`,
        })
    },
    deleteLove(whoId, fansId) {
        return request({
            method: REQUEST_METHOD.POST,
            url: `/user/deleteLove/${whoId}/${fansId}`,
        })
    },
    findAll(params) {
        return request({
            method: REQUEST_METHOD.GET,
            url: '/user/findAll',
            params
        })
    }
}

