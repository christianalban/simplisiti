import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "./pages/Dashboard.vue"
import ComponentsIndex from "./pages/components/Index.vue"
import ComponentsCreate from "./pages/components/Create.vue"
import ComponentsEdit from "./pages/components/Edit.vue"
import PagesIndex from "./pages/pages/Index.vue"
import PageCreate from "./pages/pages/Create.vue"
import PageEdit from "./pages/pages/Edit.vue"

const routes = [
  { path: '/', redirect: '/spanel' },
  { path: '/spanel', component: Dashboard, name: 'dashboard' },
  { path: '/spanel/components', component: ComponentsIndex, name: 'components.index' },
  { path: '/spanel/components/create', component: ComponentsCreate, name: 'components.create' },
  { path: '/spanel/components/:component', component: ComponentsEdit, name: 'components.edit' },
  { path: '/spanel/pages', component: PagesIndex, name: 'pages.index' },
  { path: '/spanel/pages/create', component: PageCreate, name: 'pages.create' },
  { path: '/spanel/pages/:page', component: PageEdit, name: 'pages.edit' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
