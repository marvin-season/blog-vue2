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
                    name: 'dashboard-index',
                    component: () => import('../view/dashboard/blog/index')
                },
                {
                    path: 'message',
                    name: 'message',
                    component: () => import('../view/dashboard/message/index')
                },
                {
                    path: 'announcement',
                    name: 'announcement',
                    component: () => import('../view/dashboard/announcement/index')
                },
                {
                    path: 'view-blog',
                    name: 'view-blog',
                    component: ()=> import('../view/dashboard/blog/ViewBlog')
                }
            ]
        },
        {
            path: '/dashboard-manager',
            name: 'dashboard-manager',
            component: () => import('../view/dashboard-manager/index'),
            children: [
                {
                    path: 'index',
                    name: 'dashboard-manager-index',
                    component: () => import('../view/dashboard-manager/index/')
                }
            ]
        }
    ]
});

export default vueRouter
