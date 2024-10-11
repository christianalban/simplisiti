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
import { clearLoadedResources } from '../../utils/helpers';

const { t } = useI18n();
const componentsCount = ref(0);
const pagesCount = ref(0);
const stylesCount = ref(0);
const scriptsCount = ref(0);
const resourcesCount = ref(0);
const clearingCache = ref(false);

const toolStatus = computed(() => [
    {
        counter: componentsCount.value,
        label: 'components',
        icon: 'cubes',
    },
    {
        counter: pagesCount.value,
        label: 'pages',
        icon: 'pager',
    },
    {
        counter: stylesCount.value,
        label: 'styles',
        icon: ['fab', 'css3'],
    },
    {
        counter: scriptsCount.value,
        label: 'scripts',
        icon: ['fab', 'js'],
    },
    {
        counter: resourcesCount.value,
        label: 'resources',
        icon: 'photo-film',
    },
]);

const pendingTools = computed(() => toolStatus.value.filter((status) => status.counter));

const clearCache = () => {
    clearingCache.value = true;
    clearLoadedResources();
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

const greeting = computed(() => {
    const date = new Date();
    const hour = date.getHours();
    
    if (hour >= 6 && hour < 12) {
        return 'titles.greetings.morning';
    } else if (hour >= 12 && hour < 18) {
        return 'titles.greetings.afternoon';
    } else {
        return 'titles.greetings.night';
    }
});
</script>

<template>
    <h1 class="text-2xl font-black text-gray-800">
        {{ $t(greeting) }}
    </h1>
    <p class="mb-6 text-gray-600">
        {{ $t('titles.projectStatus') }}
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-8">
        <div class="rounded-xl bg-white p-10 shadow-md col-span-1 2xl:col-span-2">
            <h3 class="title mb-2">
                <fa-icon class="text-2xl mr-2" icon="list-check"/>
                {{ $t('titles.status') }}
            </h3>
            <ul>
                <li class="tool-status" v-for="status of toolStatus">
                    <fa-icon v-if="!status.counter" class="text-yellow-500" icon="triangle-exclamation"/>
                    <fa-icon v-if="status.counter" class="text-green-500" icon="check"/>
                    {{ t(`status.${status.label}`, status.counter) }}
                </li>
            </ul>
            <hr class="my-4"/>
            <ul>
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
        <div class="col-span-1 hidden lg:block"></div>
        <div class="rounded-xl bg-white p-10 shadow-md" v-for="status of pendingTools">
            <h3 class="title">
                <fa-icon class="text-2xl mr-2" :icon="status.icon"/>
                {{ $t(`titles.${status.label}`) }}
            </h3>
            <p class="text-gray-600">{{ $t(`status.helps.${status.label}`) }}</p>
            <div>
                <router-link class="underline text-blue-600" :to="{ name: `${status.label}.index` }">
                    {{ $t('status.helps.startHere') }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
