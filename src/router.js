import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './components/Pages/Home.vue'
import About from './components/Pages/About.vue'
import Contacts from './components/Pages/Contacts.vue'
import Schedule from './components/Pages/Schedule/Schedule.vue'

import NotFoundPage from './components/Pages/NotFoundPage.vue'

const routes = [
    { path: '/', component: Home, alias: '/' },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/schedule', component: Schedule },

    { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})