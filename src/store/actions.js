import UserApi from '../api/user'
import * as TYPES from './types'
import * as LocalStore from '../utils/localStore'
import {resetRouter} from '../router'
import router from "../router";
import {Message} from "element-ui";


const actions = {
    login({commit}, options) {
        return new Promise((resolve, reject) => {
            UserApi.login(options.data).then(res => {
                // res: {header: '', token: ''}
                const {token} = res
                // vuex 令牌存储 本地存储令牌
                commit(TYPES.SET_TOKEN, token)

                // 获取登录用户主体， 做一些权限检验
                UserApi.getPrincipal().then(res => {
                    // res: {accountNonExpired: true, enabled: true, roles: [{roleName: ''}]}

                    // vuex 用户主体存储, 本地用户信息存储
                    commit(TYPES.SET_USER, res)

                    //  如果用户选择了管理员登录， 并且拥有管理员的权限
                    options.isAdmin && res && res.roles && res.roles.some(role => {
                        if (role) {
                            return role.roleName === 'ADMIN'
                        } else {
                            Message({
                                message: '当前用户没有管理员权限,已经跳转至该用户界面',
                                duration: 5000,
                                type: 'error'
                            })
                        }
                    }) && router.push('/dashboard-manager/home')
                })

                router.push("/dashboard/blog-recommend").then(() => {
                    Message({
                        message: '登录成功',
                        duration: 2000,
                        type: 'success'
                    })
                })
                resolve()
            }).catch(resolve => {
                reject(resolve)
            })
        })
    },
    resetToken({commit}) {
        return new Promise(resolve => {
            LocalStore.removeToken() // must remove  token  first
            commit(TYPES.RESET_STATE)
            resolve()
        })
    },
    logout() {
        return new Promise((resolve, reject) => {
            try {
                LocalStore.removeToken() // must remove  token  first
                LocalStore.removeUser()
                resetRouter()
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    },
    updateUser({commit}, user) {
        commit(TYPES.SET_USER, user)
    }

}
export default actions
