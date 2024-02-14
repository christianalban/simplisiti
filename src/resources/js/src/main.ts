import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import icons from './icons'
import './userWorker'
import './axios'
import { AutoSizeToChild } from './directives/auto-size-to-child'

createApp(App)
    .use(i18n)
    .use(router)
    .component('fa-icon', icons)
    .directive('autosize', AutoSizeToChild)
    .mount('#app')
