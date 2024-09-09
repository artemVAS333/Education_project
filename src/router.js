import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Pages/Home.vue'
import About from './components/Pages/About.vue'
import Contacts from './components/Pages/Contacts.vue'
import Schedule from './components/Pages/Schedule/Schedule.vue'

import NotFoundPage from './components/Pages/NotFoundPage.vue'

const name = "Education"

const link = {
    home: `/${name}/`,
    about: `/${name}/about`,
    contacts: `/${name}/contacts`,
    schedule: `/${name}/schedule`,

    notFound: `/:pathMatch(.*)*`
}

const routes = [
    { path: link.home, component: Home, alias: `/` },
    { path: link.about, component: About },
    { path: link.contacts, component: Contacts },
    { path: link.schedule, component: Schedule },

    { path: link.notFound, component: NotFoundPage }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})