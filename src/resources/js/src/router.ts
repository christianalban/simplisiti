import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "./pages/dashboard/Dashboard.vue"
import ComponentsIndex from "./pages/components/Index.vue"
import ComponentsCreate from "./pages/components/Create.vue"
import ComponentsEdit from "./pages/components/Edit.vue"
import PagesIndex from "./pages/pages/Index.vue"
import PageCreate from "./pages/pages/Create.vue"
import PageEdit from "./pages/pages/Edit.vue"
import StylesIndex from "./pages/styles/Index.vue"
import StylesCreate from "./pages/styles/Create.vue"
import StylesEdit from "./pages/styles/Edit.vue"
import ScriptsIndex from "./pages/scripts/Index.vue"
import ScriptsCreate from "./pages/scripts/Create.vue"
import ScriptsEdit from "./pages/scripts/Edit.vue"

const routes = [
    { path: '/', redirect: '/spanel' },
    { path: '/spanel', component: Dashboard, name: 'dashboard' },
    { path: '/spanel/components', component: ComponentsIndex, name: 'components.index' },
    { path: '/spanel/components/create', component: ComponentsCreate, name: 'components.create' },
    { path: '/spanel/components/:component', component: ComponentsEdit, name: 'components.edit' },
    { path: '/spanel/pages', component: PagesIndex, name: 'pages.index' },
    { path: '/spanel/pages/create', component: PageCreate, name: 'pages.create' },
    { path: '/spanel/pages/:page', component: PageEdit, name: 'pages.edit' },
    { path: '/spanel/styles', component: StylesIndex, name: 'styles.index' },
    { path: '/spanel/styles/create', component: StylesCreate, name: 'styles.create' },
    { path: '/spanel/styles/edit/:style', component: StylesEdit, name: 'styles.edit' },
    { path: '/spanel/scripts', component: ScriptsIndex, name: 'scripts.index' },
    { path: '/spanel/scripts/create', component: ScriptsCreate, name: 'scripts.create' },
    { path: '/spanel/scripts/edit/:script', component: ScriptsEdit, name: 'scripts.edit' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
