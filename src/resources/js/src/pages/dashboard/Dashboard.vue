<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getComponents } from '../../services/ComponentService';
import { getPages } from '../../services/PageService';
import { useI18n } from 'vue-i18n';
import { getStyles } from '../../services/StyleService';
import { getScripts } from '../../services/ScriptService';
import { getResources } from '../../services/ResourceService';
import { clearAll } from '../../services/CacheService';
import { showToast } from '../../services/ToastService';

const { t } = useI18n();
const componentsCount = ref(0);
const pagesCount = ref(0);
const stylesCount = ref(0);
const scriptsCount = ref(0);
const resourcesCount = ref(0);
const clearingCache = ref(false);
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
];

const toolStatus = computed(() => [
    {
        counter: componentsCount.value,
        message: t('status.components', componentsCount.value),
    },
    {
        counter: pagesCount.value,
        message: t('status.pages', pagesCount.value),
    },
    {
        counter: stylesCount.value,
        message: t('status.styles', stylesCount.value),
    },
    {
        counter: scriptsCount.value,
        message: t('status.scripts', scriptsCount.value),
    },
    {
        counter: resourcesCount.value,
        message: t('status.resources', resourcesCount.value),
    },
]);

const clearCache = () => {
    clearingCache.value = true;
    clearAll()
    .then(() => {
        showToast({
            title: t('toasts.success'),
            message: t('cache.toasts.success'),
            type: 'success',
        });
    })
    .catch(() => {
        showToast({
            title: t('toasts.error'),
            message: t('cache.toasts.error'),
            type: 'error',
        });
    })
    .finally(() => {
        clearingCache.value = false;
    })
};

onMounted(() => {
    getComponents()
    .then((response) => {
        componentsCount.value = response.data.data.length;
    });
    getPages()
    .then((response) => {
        pagesCount.value = response.data.data.length;
    });
    getStyles()
    .then((response) => {
        stylesCount.value = response.data.data.length;
    });
    getScripts()
    .then((response) => {
        scriptsCount.value = response.data.data.length;
    });
    getResources()
    .then((response) => {
        resourcesCount.value = response.data.data.length;
    });
});
</script>

<template>
    <div class="grid md:place-items-center h-full">
        <div class="dashboard w-full bg-white">
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-lg gap-8">
                <div>
                    <h2 class="title">{{ $t('titles.dashboard') }}</h2>
                    <ul class="grid grid-cols-3 gap-4">
                        <li v-for="{ name, title, icon } of toolLinks" :key="name">
                            <router-link class="tool-link flex flex-col gap-4 items-center justify-center" :to="{ name  }">
                                <fa-icon class="text-5xl" :icon="icon"/>
                                {{ $t(title) }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="title">{{ $t('titles.status') }}</h2>
                    <ul class="">
                        <li class="tool-status" v-for="status of toolStatus">
                            <fa-icon v-if="!status.counter" class="text-yellow-500" icon="triangle-exclamation"/>
                            <fa-icon v-if="status.counter" class="text-green-500" icon="check"/>
                            {{ status.message }}
                        </li>
                    </ul>
                    <hr class="my-4"/>
                    <ul class="">
                        <li class="tool-status hover:underline">
                            <button @click="clearCache" v-if="!clearingCache">
                                <fa-icon class="text-blue-500 mr-2" icon="brush"/>
                                {{ $t('status.cacheClear') }}
                            </button>
                            <p v-else>
                                <fa-icon class="text-blue-500 mr-2 animate-spin" icon="arrows-rotate"/>
                                {{ $t('status.cacheClearing') }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dashboard {
    max-width: 1000px;
}

li {
    @apply flex;
    .tool-link {
        @apply px-4 py-2 w-full transition border border-gray-100 rounded-2xl aspect-square shadow-lg;
        &:hover {
            @apply bg-gray-100;
            text-decoration: underline;
        }
    }

    &.tool-status {
        @apply flex items-center gap-2;
    }
}

.title {
    @apply text-lg font-bold mb-4;
}
</style>
