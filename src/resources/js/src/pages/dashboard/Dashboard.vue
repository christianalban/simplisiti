<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { getComponents } from '../../services/ComponentService';
import { getPages } from '../../services/PageService';
import { useI18n } from 'vue-i18n';
import { getStyles } from '../../services/StyleService';
import { getScripts } from '../../services/ScriptService';
import { getResources } from '../../services/ResourceService';

const { t } = useI18n();
const componentsCount = ref(0);
const pagesCount = ref(0);
const stylesCount = ref(0);
const scriptsCount = ref(0);
const resourcesCount = ref(0);
const toolLinks = [
    {
        name: 'components.index',
        title: 'titles.components',
    },
    {
        name: 'pages.index',
        title: 'titles.pages',
    },
    {
        name: 'styles.index',
        title: 'titles.styles',
    },
    {
        name: 'scripts.index',
        title: 'titles.scripts',
    },
    {
        name: 'resources.index',
        title: 'titles.resources',
    },
    {
        name: 'settings.index',
        title: 'titles.settings',
    },
    {
        name: 'plugins.index',
        title: 'titles.plugins',
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
    <div class="grid place-items-center h-full">
        <div class="dashboard w-full bg-white">
            <div class="grid grid-cols-2 rounded-lg gap-4">
                <div>
                    <h2 class="title">{{ $t('titles.dashboard') }}</h2>
                    <ul class="border border-gray-200 rounded-lg">
                        <li v-for="{ name, title } of toolLinks" :key="name">
                            <router-link class="tool-link" :to="{ name  }">{{ $t(title) }}</router-link>
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
        @apply px-4 py-2 w-full transition;
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
