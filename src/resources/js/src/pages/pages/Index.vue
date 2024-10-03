<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { clonePage, getPages } from '../../services/PageService';
import { Page } from '../../types/Page';
import { Component } from '../../types/Component';
import { groupItems, labelName } from '../../utils/helpers';
import Group from '../../components/Group.vue';
import ComponentFloatingPreview from '../../components/preview/ComponentFloatingPreview.vue';
import HeaderComponent from '../../components/layout/Header.vue';
import DialogComponent from "../../components/Dialog.vue";
import { useI18n } from 'vue-i18n';
import { showToast } from '../../services/ToastService';

const pages = ref<Page[]>([]);
const toClonePage = ref<Page | null>(null);

const { t } = useI18n();

const isCloning = ref<boolean>(false);
const showClone = ref<boolean>(false);

const filter = ref<string>('');

const showConfirmClone = (page: Page) => {
    showClone.value = true;
    toClonePage.value = page;
}

const pagesGroup = computed(() => {
    return groupItems(pages.value);
});

const componentsOfPage = (page: Page): Component[] => {
    return page.sections.reduce((acc, section) => {
        return acc.concat(section.components);
    }, [] as Component[]);
}

const loadPages = () => {
    getPages()
    .then((response) => {
        pages.value = response.data.data;
    });
}

const confirmClonePage = () => {
    if (toClonePage.value?.id) {
        isCloning.value = true;
        clonePage(toClonePage.value.id)
        .then(() => {
            loadPages();
            showToast({
                title: t('toasts.success'),
                message: t('pages.toasts.cloned'),
                type: 'success',
            });
        })
        .catch(() => {
            showToast({
                title: t('toasts.error'),
                message: t('pages.toasts.errorCloned'),
                type: 'error',
            });
        })
        .finally(() => {
            showClone.value = false;
            toClonePage.value = null;
            isCloning.value = false;
        });
    }
}

onMounted(() => {
    loadPages();
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full py-2">
        <header-component
            :title="$t('pages.titles.pagesList')"
            backName="dashboard"
            :backTitle="$t('buttons.back')"
            createName="pages.create"
            :createTitle="$t('pages.buttons.create')"
            :searchTitle="$t('placeholders.search')"
            v-model="filter"
        />
        <div class="overflow-y-auto">
            <group class="h-full overflow-y-auto" :filter="filter" :items="pagesGroup" v-slot="page">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                    <a :href="`/spanel/pages/${pageItem.id}`" v-for="pageItem of page.item" class="flex flex-col border-blue-200 shadow-lg rounded-lg border-4 hover:border-blue-200 overflow-hidden">
                        <div class="flex items-center gap-2 bg-blue-200 px-2 py-1 w-full">
                            <div class="flex flex-col overflow-hidden whitespace-nowrap">
                                <span class="overflow-hidden text-ellipsis font-semibold" :title="labelName(pageItem.name)">{{ labelName(pageItem.name) }}</span>
                                <span class="overflow-hidden text-ellipsis" :title="pageItem.url">{{ pageItem.url }}</span>
                            </div>
                            <div class="ml-auto">
                                <button class="button small default" type="button" :title="$t('pages.titles.clone')" @click.prevent="showConfirmClone(pageItem)" :disabled="isCloning">
                                    <fa-icon v-if="isCloning && toClonePage?.id === pageItem.id" icon="spinner" class="animate-spin" />
                                    <fa-icon v-else icon="clone" />
                                </button>
                            </div>
                            <div>
                                <a :href="pageItem.url" class="button small default" target="_blank">
                                    <fa-icon icon="up-right-from-square" />
                                </a>
                            </div>
                        </div>
                        <div class="overflow-hidden w-full aspect-[3/4]">
                            <component-floating-preview
                                v-for="component of componentsOfPage(pageItem)"
                                :component="component"
                            />
                        </div>
                    </a>
                </div>
            </group>
        </div>
    </div>
    <dialog-component
        v-model:showDialog="showClone"
        :title="$t('pages.dialogs.clone.title')"
        :message="$t('pages.dialogs.clone.message', { name: toClonePage?.name })"
        @confirm="confirmClonePage"
    />
</template>

<style scoped lang="scss">
</style>
