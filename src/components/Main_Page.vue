<script>
import Home from './Pages/Home.vue'
import About from './Pages/About.vue'
import NotFound from './Pages/NotFound.vue'
import NotFound from './Pages/NotFound.vue'

const routes = {
    '/': Home,
    '/about': About,
    '/schedule': NotFound
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>

<template>
    <div class="main">
        <component :is="currentView" />
    </div>
</template>

<style>
@import url('./Main_Page.scss');
</style>