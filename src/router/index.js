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
                path: 'blog',
                name: 'blog',
                component: () => import('../view/dashboard/Blog')
            },
            {
                path: 'blog-show/:id',
                name: 'blog-show',
                component: () => import('../view/dashboard/BlogDetail')
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
