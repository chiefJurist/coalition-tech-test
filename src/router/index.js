import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/patients',
            name: 'Patients',
            component: () => import('../views/PatientsView.vue')
        }
    ]
})

export default router
