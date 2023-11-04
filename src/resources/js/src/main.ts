import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import icons from './icons'
import './userWorker'
import './axios'

createApp(App)
    .use(i18n)
    .use(router)
    .component('fa-icon', icons)
    .mount('#app')
