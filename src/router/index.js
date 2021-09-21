import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/index'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../view/register/index'),
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
                path: 'view-blog/:id',
                name: 'view-blog',
                component: () => import('../components/dashboard/Blog/ViewBlog')
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

const createRouter = () => new VueRouter({
    // mode: 'history', // require service support
    routes: routes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
