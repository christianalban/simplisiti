<script setup lang="ts">
import { useRoute } from 'vue-router';

const currentRoute = useRoute();

const isRouteActive = (name: string) => {
    return currentRoute.name === name;
};

const toolLinks = [
    {
        name: 'components.index',
        title: 'titles.components',
        icon: 'cubes',
    },
    {
        name: 'pages.index',
        title: 'titles.pages',
        icon: 'pager',
    },
    // {
    //     name: 'flows.index',
    //     title: 'titles.flows',
    // },
    {
        name: 'styles.index',
        title: 'titles.styles',
        icon: ['fab', 'css3'],
    },
    {
        name: 'scripts.index',
        title: 'titles.scripts',
        icon: ['fab', 'js'],
    },
    {
        name: 'resources.index',
        title: 'titles.resources',
        icon: 'photo-film',
    },
    {
        name: 'settings.index',
        title: 'titles.settings',
        icon: 'gears',
    },
    {
        name: 'plugins.index',
        title: 'titles.plugins',
        icon: 'toolbox',
    },
]
</script>

<template>
    <div class="bg-slate-200 flex h-screen">
        <aside class="fixed z-50 md:relative">
            <input type="checkbox" class="peer hidden" id="sidebar-open" />
            <label class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden" for="sidebar-open">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>
            <nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72">
                <router-link :to="{ name: 'dashboard' }" class="mt-5 py-4 pl-10 md:mt-10">
                    <img class="w-32" src="../../assets/simplisiti-logo.svg">
                </router-link>
                <ul class="">
                    <li class="relative" v-for="{ name, title, icon } of toolLinks" :key="name">
                        <router-link :to="{ name }" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                            <span>
                                <fa-icon class="text-5xl h-6 w-6" :icon="icon"/>
                            </span>
                            <span class="">
                                {{ $t(title) }}
                            </span>
                        </router-link>
                        <svg v-if="isRouteActive(name)" class="text-slate-200 absolute -right-1 -top-1/2 z-10 hidden h-32 w-8 md:block" xmlns="http://www.w3.org/2000/svg" viewBox="399.349 57.696 100.163 402.081" width="1em" height="4em">
                            <path fill="currentColor" d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </aside>
        <div class="flex h-full w-full flex-col">
            <div class="h-full overflow-hidden">
                <main id="dashboard-main" class="h-screen overflow-auto px-4 py-14 lg:py-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
</style>
