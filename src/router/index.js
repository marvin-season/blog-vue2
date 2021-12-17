import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../view/index'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../layout/Dashboard'),
        children: [
            {
                path: '/',
                redirect: 'blog-recommend'
            },
            {
                path: 'blog-recommend',
                name: 'blog-recommend',
                component: () => import('../view/dashboard/BlogRecommend')
            },
            {
                path: 'blog-detail/:id/:authorId',
                name: 'blog-detail',
                component: () => import('../view/dashboard/BlogDetail')
            },
            {
                path: 'blog-collect',
                name: 'blog-collect',
                component: () => import('../view/dashboard/BlogCollect')
            },
            {
                path: 'blog-me',
                name: 'blog-me',
                component: () => import('../view/dashboard/BlogMe')
            },
            {
                path: 'blog-draft',
                name: 'blog-draft',
                component: () => import('../view/dashboard/BlogDraft')
            },
            {
                path: 'blog-create',
                name: 'blog-create',
                component: () => import('../view/dashboard/BlogCreate')
            }
        ]
    },
    {
        path: '/dashboard-manager',
        name: 'dashboard-manager',
        component: () => import('../layout/DashboardManager'),
        children: [
            {
                path: '/',
                redirect: 'home'
            },
            {
                path: 'home',
                name: 'home',
                component: () => import('../view/dashboard-manager/Home')
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('../view/dashboard-manager/User')
            },
        ]
    },
    {
        path: '*',
        redirect: '/error'
    },
    {
        path: '/error',
        component: () => import('../view/404'),
        name: 'error',
        meta: {
            title: '页面没找到'
        }
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
