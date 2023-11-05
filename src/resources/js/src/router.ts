import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "./pages/Dashboard.vue"
import ComponentsIndex from "./pages/components/Index.vue"
import ComponentsCreate from "./pages/components/Create.vue"
import ComponentsEdit from "./pages/components/Edit.vue"

const routes = [
  { path: '/', redirect: '/spanel' },
  { path: '/spanel', component: Dashboard, name: 'dashboard' },
  { path: '/spanel/components', component: ComponentsIndex, name: 'components.index' },
  { path: '/spanel/components/create', component: ComponentsCreate, name: 'components.create' },
  { path: '/spanel/components/:component', component: ComponentsEdit, name: 'components.edit' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
