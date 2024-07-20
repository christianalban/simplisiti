import App from "./App.vue"
import icons from './icons'

export default {
    install: (app: any) => {
        app.component('simplisiti-component-editor', App);
        app.component('fa-icon', icons)
    }
}
