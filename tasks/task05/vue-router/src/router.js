import { createWebHistory, createRouter } from "vue-router";

import page1 from './components/page1.vue'
// import page2 from './components/page2.vue'

const routes = [
    {
        path: '/',
        component: page1
    },
    {
        path: '/2',
        component: () => import('./components/page2.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})



