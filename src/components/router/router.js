import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Schedule from '../Pages/Schedule/Schedule.vue'

import NotFoundPage from '../views/NotFoundPage.vue'

const name = "Education"

const link = {
    home: `/${name}/`,
    about: `/${name}/about`,
    contacts: `/${name}/contacts`,
    schedule: `/${name}/schedule`,

    notFound: `/:pathMatch(.*)*`
}

const routes = [
    {
        name: 'home',
        path: link.home,
        component: Home,
        alias: `/`,
        meta: { toTop: true, behavior: true }
    },
    {
        name: 'about',
        path: link.about,
        component: About,
        meta: { toTop: true, behavior: true }
    },
    {
        name: 'contacts',
        path: link.contacts,
        component: Contacts,
        meta: { toTop: true, behavior: true }
    },
    {
        name: 'schedule',
        path: link.schedule,
        component: Schedule,
        meta: { toTop: false, behavior: false }
    },

    { path: link.notFound, component: NotFoundPage }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.meta.toTop) {
            if (to.meta.behavior) {
                return { top: 0, behavior: 'smooth' }
            }
            return { top: 0 }
        }
    }
})
