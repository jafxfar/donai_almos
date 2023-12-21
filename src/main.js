import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import '@/assets/style.css'

// Create a router instance
const app = createApp(App)
app.config.globalProperties.$axios = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})
app.use(router)

app.mount('#app')
