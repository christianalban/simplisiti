<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { cloneComponent, getComponents} from '../../services/ComponentService';
import { Component } from '../../types/Component';
import Group from '../../components/Group.vue';
import { groupItems, labelName, loadPluginResourcesPreview, loadResourcesPreview } from '../../utils/helpers';
import ComponentFloatingPreview from '../../components/preview/ComponentFloatingPreview.vue';
import HeaderComponent from '../../components/layout/Header.vue';
import DialogComponent from "../../components/Dialog.vue";
import { showToast } from '../../services/ToastService';
import { useI18n } from 'vue-i18n';

const components = ref<Component[]>([]);
const toCloneComponent = ref<Component | null>(null);
const { t } = useI18n();

const isCloning = ref<boolean>(false);

const filter = ref<string>('');
const isLoaded = ref<boolean>(false);

const showClone = ref<boolean>(false);

const showConfirmClone = (component: Component) => {
    showClone.value = true;
    toCloneComponent.value = component;
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
                        <div>
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
</template>

<style scoped lang="scss">
</style>
