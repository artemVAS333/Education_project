import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/style.scss'

import router from './components/router/router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
