import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Pages/Home.vue'
import About from './components/Pages/About.vue'
import Contacts from './components/Pages/Contacts.vue'
import Schedule from './components/Pages/Schedule/Schedule.vue'

import NotFoundPage from './components/Pages/NotFoundPage.vue'

const routes = [
    { path: '/Education/', component: Home, alias: '/Education/' },
    { path: '/Education/about', component: About },
    { path: '/Education/contacts', component: Contacts },
    { path: '/Education/schedule', component: Schedule },

    { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})