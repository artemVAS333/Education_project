import { createApp } from 'vue'

import App from './App.vue'

import './assets/css/main.css'
import './assets/js/script.js'

import router from './router.js'

const app = createApp(App)

app.use(router)
app.mount('#app')