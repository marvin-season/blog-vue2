import router from '../router'

import {getToken} from "./auth";
import {Message} from "element-ui";

// 加载进度条
import NProgress from 'nprogress' // progress Bar
import 'nprogress/nprogress.css' // progress Bar style

router.beforeEach((to, from, next) => {

    NProgress.start()

    if (to.path === '/login' || to.path === '/register') {
        next()
    } else {
        const hasToken = getToken();
        if (hasToken) {
            next()
        } else {
            Message.warning('请先登录')
            next(false)
        }
    }

    NProgress.done()

})
