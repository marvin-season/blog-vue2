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
        component: () => import('../layout/Dashboard'),
        children: [
            {
                path: 'blog-recommend',
                name: 'blog-recommend',
                component: () => import('../view/dashboard/BlogRecommend')
            },
            {
                path: 'blog-detail/:id',
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
                path: 'blog-edit',
                name: 'blog-edit',
                component: () => import('../view/dashboard/BlogEdit')
            }
        ]
    },
    {
        path: '/dashboard-manager',
        name: 'dashboard-manager',
        component: () => import('../layout/DashboardManager')
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
