<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { getPages } from '../../services/PageService';
import { Page } from '../../types/Page';
import { Component } from '../../types/Component';
import { groupItems, labelName, componentsOfPage } from '../../utils/helpers';
import Group from '../../components/Group.vue';
import ComponentFloatingPreview from '../../components/preview/ComponentFloatingPreview.vue';

const pages = ref<Page[]>([]);

const pagesGroup = computed(() => {
    return groupItems(pages.value);
});

const componentsOfPage = (page: Page): Component[] => {
    return page.sections.reduce((acc, section) => {
        return acc.concat(section.components);
    }, [] as Component[]);
}

onMounted(() => {
    getPages()
    .then((response) => {
        pages.value = response.data.data;
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-full py-2">
        <h1 class="title">{{ $t('pages.titles.pagesList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'pages.create' }">{{ $t('pages.buttons.create') }}</router-link>
        </div>
        <div class="overflow-y-auto">
            <group class="h-full overflow-y-auto" :items="pagesGroup" v-slot="page">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                    <a :href="`/spanel/pages/${page.id}`" v-for="page of page.item" class="flex flex-col border border-blue-200 shadow rounded overflow-hidden">
                        <div class="flex items-center justify-between gap-2 bg-blue-200 px-2 py-1">
                            <div class="flex flex-col">
                                <span class="font-semibold">{{ labelName(page.name) }}</span>
                                <span>{{ page.url }}</span>
                            </div>
                            <div>
                                <a :href="page.url" class="button small default" target="_blank">
                                    {{ $t('pages.buttons.show') }}
                                    <fa-icon icon="up-right-from-square" />
                                </a>
                            </div>
                        </div>
                        <div class="overflow-hidden w-full aspect-[3/4]">
                            <component-floating-preview
                                v-for="component of componentsOfPage(page)"
                                :component="component"
                            />
                        </div>
                    </a>
                </div>
            </group>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
