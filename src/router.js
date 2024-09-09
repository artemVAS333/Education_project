import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Pages/Home.vue'
import About from './components/Pages/About.vue'
import Contacts from './components/Pages/Contacts.vue'
import Schedule from './components/Pages/Schedule/Schedule.vue'

import NotFoundPage from './components/Pages/NotFoundPage.vue'

const name = "Education"

const routes = [
    { path: `/${name}/`, component: Home, alias: `/` },
    { path: `/${name}/about`, component: About },
    { path: `/${name}/contacts`, component: Contacts },
    { path: `/${name}/schedule`, component: Schedule },

    { path: `/:pathMatch(.*)*`, component: NotFoundPage }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})