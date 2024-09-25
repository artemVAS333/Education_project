import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const name = "Education"

const link = {
    home: `/${name}/`,
    about: `/${name}/about`,
    contacts: `/${name}/contacts`,
    schedule: `/${name}/schedule`,

    notFound: `/:pathMatch(.*)*`
}

export const routes = [
    {
        name: 'home',
        path: link.home,
        component: Home,
        alias: `/`,
        meta: {
            toTop: true,
            behavior: true
        }
    },
    {
        name: 'about',
        path: link.about,
        component: () => import('../views/About.vue'),
        meta: {
            toTop: true,
            behavior: false
        }
    },
    {
        name: 'contacts',
        path: link.contacts,
        component: () => import('../views/Contacts.vue'),
        meta: {
            toTop: true,
            behavior: true
        }
    },
    {
        name: 'schedule',
        path: link.schedule,
        component: () => import('../schedule/Schedule.vue'),
        meta: {
            toTop: false,
            behavior: false
        }
    },

    {
        name: 'notFound',
        path: link.notFound,
        component: () => import('../views/NotFoundPage.vue'),
    }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.meta.toTop) {
            if (to.meta.behavior) {
                return { top: 0, behavior: "smooth" }
            }
            return { top: 0 }
        }
    }
})
