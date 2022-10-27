import { createRouter, createWebHistory } from "vue-router";

import Home from './views/Home.vue'
import MyLikes from './views/MyLikes.vue'
import TopList from './views/TopList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/top',
                name: 'TopList',
                component: TopList
            }, {
                path: '/love',
                name: 'Likes',
                component: MyLikes
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router