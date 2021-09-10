import router from '../router'

import {getToken} from "./auth";
import {Message} from "element-ui";

// 加载进度条
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

router.beforeEach((to, from, next) => {

    NProgress.start()

    if (to.path === '/' || to.path === '/login') {
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
