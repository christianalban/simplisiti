<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { cloneComponent, getComponents } from '../../services/ComponentService';
import { getPages } from '../../services/PageService';
import { Component } from '../../types/Component';
import { Page } from '../../types/Page';
import Group from '../../components/Group.vue';
import { groupItems, labelName, loadPluginResourcesPreview, loadResourcesPreview } from '../../utils/helpers';
import ComponentFloatingPreview from '../../components/preview/ComponentFloatingPreview.vue';
import HeaderComponent from '../../components/layout/Header.vue';
import DialogComponent from "../../components/Dialog.vue";
import Modal from '../../components/Modal.vue';
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';

const components = ref<Component[]>([]);
const toCloneComponent = ref<Component | null>(null);
const componentForUsage = ref<Component | null>(null);
const pages = ref<Page[]>([]);
const { t } = useI18n();

const isCloning = ref<boolean>(false);
const isPagesLoading = ref<boolean>(false);
const pagesLoadError = ref<boolean>(false);

const filter = ref<string>('');
const isLoaded = ref<boolean>(false);

const showClone = ref<boolean>(false);
const showUsage = ref<boolean>(false);

const showConfirmClone = (component: Component) => {
    showClone.value = true;
    toCloneComponent.value = component;
}

const loadPagesForUsage = () => {
    isPagesLoading.value = true;
    pagesLoadError.value = false;

    return getPages()
        .then((response) => {
            pages.value = response.data.data;
        })
        .catch(() => {
            pagesLoadError.value = true;
        })
        .finally(() => {
            isPagesLoading.value = false;
        });
}

const showComponentUsage = (component: Component) => {
    componentForUsage.value = component;
    showUsage.value = true;

    if (pagesLoadError.value) {
        loadPagesForUsage();
    }
}

const pagesUsingComponent = computed(() => {
    const componentId = componentForUsage.value?.id;

    if (!componentId) {
        return [];
    }

    return pages.value.filter((page) => page.sections.some((section) => (
        section.components.some((component) => component.id === componentId)
    )));
});

const closeComponentUsage = () => {
    showUsage.value = false;
    componentForUsage.value = null;
}

const loadResources = () => {
    const resources = Promise.all([
        loadPluginResourcesPreview(),
        loadResourcesPreview(),
    ])

    resources.then(() => {
        getComponents()
        .then((response) => {
            isLoaded.value = true;
            components.value = response.data.data;
        });
    });
}

const componentsGroup = computed(() => {
    return groupItems(components.value);
});

const confirmCloneComponent = () => {
    if (toCloneComponent.value?.id) {
        isCloning.value = true;
        cloneComponent(toCloneComponent.value.id)
        .then(() => {
            loadResources();
            showToast({
                title: t('toasts.success'),
                message: t('components.toasts.cloned'),
                type: 'success',
            });
        })
        .catch(() => {
            showToast({
                title: t('toasts.error'),
                message: t('components.toasts.errorCloned'),
                type: 'error',
            });
        })
        .finally(() => {
            showClone.value = false;
            toCloneComponent.value = null;
            isCloning.value = false;
        });
    }
}

onMounted(() => {
    loadResources();
    loadPagesForUsage();
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full py-2">
        <header-component
            :title="$t('components.titles.componentsList')"
            backName="dashboard"
            :backTitle="$t('buttons.back')"
            createName="components.create"
            :createTitle="$t('components.buttons.create')"
            :searchTitle="$t('placeholders.search')"
            v-model="filter"
        />
        <group v-if="isLoaded" class="h-full overflow-y-auto" :items="componentsGroup" v-slot="slotProps" :filter="filter">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                <router-link v-for="item in slotProps.item" :key="item.id" :to="{ name: 'components.edit', params: { component: item.id } }" class="shadow-lg rounded-lg overflow-hidden border-4 hover:border-blue-200">
                    <div class="flex items-center justify-between gap-2 bg-blue-200 px-2 py-1">
                        <div class="flex flex-col">
                            <span class="font-semibold">{{ labelName(item.name) }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button
                                type="button"
                                :title="$t('components.titles.usage')"
                                :aria-label="$t('components.titles.usage')"
                                @click.prevent.stop="showComponentUsage(item)"
                            >
                                <fa-icon icon="link" />
                            </button>
                            <fa-icon v-if="isCloning && toCloneComponent?.id === item.id" icon="spinner" class="animate-spin" />
                            <button v-else type="button" :title="$t('components.titles.clone')" @click.prevent="showConfirmClone(item)" :disabled="isCloning">
                                <fa-icon icon="clone" />
                            </button>
                        </div>
                    </div>
                    <component-floating-preview
                        :component="item" class="flex-1 overflow-hidden"
                    />
                </router-link>
            </div>
        </group>
    </div>
    <dialog-component
        v-model:showDialog="showClone"
        :title="$t('components.dialogs.clone.title')"
        :message="$t('components.dialogs.clone.message', { name: toCloneComponent?.name })"
        @confirm="confirmCloneComponent"
    />
    <modal
        v-model:showModal="showUsage"
        :title="$t('components.dialogs.usage.title')"
        :showConfirm="false"
        @close="closeComponentUsage"
    >
        <div class="w-[32rem] max-w-full">
            <p v-if="isPagesLoading" class="flex items-center gap-2">
                <fa-icon icon="spinner" class="animate-spin" />
                <span>{{ $t('components.dialogs.usage.loading') }}</span>
            </p>
            <p v-else-if="pagesLoadError" class="text-red-600">
                {{ $t('components.dialogs.usage.error') }}
            </p>
            <p v-else-if="pagesUsingComponent.length === 0" class="text-gray-600">
                {{ $t('components.dialogs.usage.empty') }}
            </p>
            <ul v-else class="flex max-h-96 flex-col divide-y overflow-y-auto">
                <li v-for="page in pagesUsingComponent" :key="page.id || page.url" class="py-2">
                    <a
                        v-if="page.id"
                        :href="`/spanel/pages/${page.id}`"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-between gap-4 rounded px-2 py-1 hover:bg-blue-50"
                        :title="$t('components.dialogs.usage.openPage')"
                    >
                        <span class="flex min-w-0 flex-col">
                            <span class="truncate font-semibold">{{ labelName(page.name) }}</span>
                            <span class="truncate text-sm text-gray-500">{{ page.url }}</span>
                        </span>
                        <fa-icon icon="up-right-from-square" class="shrink-0" />
                    </a>
                </li>
            </ul>
        </div>
    </modal>
</template>

<style scoped lang="scss">
</style>
