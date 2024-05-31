import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'patients',
            component: () => import('../views/PatientsView.vue')
        },
        {
            path: '/overview',
            name: 'overview',
            component: () => import('../views/ExtraView.vue')
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: () => import('../views/ExtraView.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('../views/ExtraView.vue')
        },
        {
            path: '/transactions',
            name: 'transactions',
            component: () => import('../views/ExtraView.vue')
        }
    ]
})

export default router
