import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/spanel',
        component: () => import("./components/layout/AsideBarLayout.vue"),
        children: [
            { path: '', component: () => import("./pages/dashboard/Dashboard.vue"), name: 'dashboard' },
            { path: 'components', component: () => import("./pages/components/Index.vue"), name: 'components.index' },
            { path: 'pages', component: () => import("./pages/pages/Index.vue"), name: 'pages.index' },
            { path: 'styles', component: () => import("./pages/styles/Index.vue"), name: 'styles.index' },
            { path: 'scripts', component: () => import("./pages/scripts/Index.vue"), name: 'scripts.index' },
            { path: 'resources', component: () => import("./pages/resources/Index.vue"), name: 'resources.index' },
            { path: 'settings', component: () => import("./pages/settings/Index.vue"), name: 'settings.index' },
            { path: 'plugins', component: () => import("./pages/plugins/Index.vue"), name: 'plugins.index' },
        ]
    },
    {
        path: '/spanel',
        component: () => import("./components/layout/NormalScreen.vue"),
        children: [
            { path: 'components/create', component: () => import("./pages/components/Create.vue"), name: 'components.create' },
            { path: 'components/:component', component: () => import("./pages/components/Edit.vue"), name: 'components.edit' },
            { path: 'styles/create', component: () => import("./pages/styles/Create.vue"), name: 'styles.create' },
            { path: 'styles/edit/:style', component: () => import("./pages/styles/Edit.vue"), name: 'styles.edit' },
            { path: 'scripts/create', component: () => import("./pages/scripts/Create.vue"), name: 'scripts.create' },
            { path: 'scripts/edit/:script', component: () => import("./pages/scripts/Edit.vue"), name: 'scripts.edit' },
            // {
            //     path: 'flows',
            //     children: [
            //         { path: '', component: () => import("./pages/flows/Index.vue"), name: 'flows.index' },
            //         { path: 'create', component: () => import("./pages/flows/Create.vue"), name: 'flows.create' },
            //     ]
            // }
        ]
    },
    {
        path: '/spanel',
        component: () => import("./components/layout/FullScreen.vue"),
        children: [
            { path: 'pages/create', component: () => import("./pages/pages/Create.vue"), name: 'pages.create' },
            { path: 'pages/:page', component: () => import("./pages/pages/Edit.vue"), name: 'pages.edit' },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
