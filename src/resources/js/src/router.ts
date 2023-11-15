import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/', redirect: '/spanel' },
    { path: '/spanel', component: () => import("./pages/dashboard/Dashboard.vue"), name: 'dashboard' },
    { path: '/spanel/components', component: () => import("./pages/components/Index.vue"), name: 'components.index' },
    { path: '/spanel/components/create', component: () => import("./pages/components/Create.vue"), name: 'components.create' },
    { path: '/spanel/components/:component', component: () => import("./pages/components/Edit.vue"), name: 'components.edit' },
    { path: '/spanel/pages', component: () => import("./pages/pages/Index.vue"), name: 'pages.index' },
    { path: '/spanel/pages/create', component: () => import("./pages/pages/Create.vue"), name: 'pages.create' },
    { path: '/spanel/pages/:page', component: () => import("./pages/pages/Edit.vue"), name: 'pages.edit' },
    { path: '/spanel/styles', component: () => import("./pages/styles/Index.vue"), name: 'styles.index' },
    { path: '/spanel/styles/create', component: () => import("./pages/styles/Create.vue"), name: 'styles.create' },
    { path: '/spanel/styles/edit/:style', component: () => import("./pages/styles/Edit.vue"), name: 'styles.edit' },
    { path: '/spanel/scripts', component: () => import("./pages/scripts/Index.vue"), name: 'scripts.index' },
    { path: '/spanel/scripts/create', component: () => import("./pages/scripts/Create.vue"), name: 'scripts.create' },
    { path: '/spanel/scripts/edit/:script', component: () => import("./pages/scripts/Edit.vue"), name: 'scripts.edit' },
    { path: '/spanel/resources', component: () => import("./pages/resources/Index.vue"), name: 'resources.index' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
