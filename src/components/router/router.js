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

const routes = [
    {
        name: 'home',
        label: 'Головна',
        path: link.home,
        component: Home,
        alias: `/`,
        meta: {
            toTop: true,
            behavior: true
        },
        showInMenu: true
    },
    {
        name: 'about',
        label: 'Про нас',
        path: link.about,
        component: () => import('../views/About.vue'),
        meta: {
            toTop: true,
            behavior: false
        },
        showInMenu: true
    },
    {
        name: 'contacts',
        label: 'Контакти',
        path: link.contacts,
        component: () => import('../views/Contacts.vue'),
        meta: {
            toTop: true,
            behavior: true
        },
        showInMenu: true
    },
    {
        name: 'schedule',
        label: 'Розклад',
        path: link.schedule,
        component: () => import('../schedule/Schedule.vue'),
        meta: {
            toTop: false,
            behavior: false
        },
        showInMenu: true
    },

    {
        name: 'notFound',
        label: '404',
        path: link.notFound,
        component: () => import('../views/NotFoundPage.vue'),
        meta: {
            toTop: false,
            behavior: false
        },
        showInMenu: false
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
