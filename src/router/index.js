import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const vueRouter = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../view/login/index'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../view/dashboard/index'),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('../components/index/')
                },
                {
                    path: 'message',
                    name: 'message',
                    component: () => import('../components/message/index')
                },
                {
                    path: 'announcement',
                    name: 'announcement',
                    component: () => import('../components/announcement/index')
                }
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('../view/admin/index'),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('../components/index/')
                }
            ]
        }
    ]
});

export default vueRouter
