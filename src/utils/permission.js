import router from '../router'

import {getToken} from "./localStore";
import {Message} from "element-ui";

// 浏览器上边的加载进度条
import NProgress from 'nprogress' // progress Bar
import 'nprogress/nprogress.css'
import store from "../store"; // progress Bar style

router.beforeEach((to, from, next) => {

    NProgress.start()
    if (to.path === '/' || to.path === '/index') {
        next()
    } else {

        const hasToken = getToken();

        if (to.fullPath.match('dashboard-manager')) {
            const loginUser = store.getters.user;
            if (loginUser && loginUser.roles && loginUser.roles.some(role => role && role.roleName === 'ADMIN')) {
                if (hasToken) {
                    // 实际上没有必要再次判断， 防止万一
                    next()
                } else {
                    Message.warning('请先登录')
                    next(false)
                }
            } else {
                console.log("不放行")
                next('/error')
            }
        } else {
            if (hasToken) {
                next()
            } else {
                Message.warning('请先登录')
                next(false)
            }
        }
    }

    NProgress.done()
})
