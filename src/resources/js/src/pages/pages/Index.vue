<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { getPages } from '../../services/PageService';
import { Page } from '../../types/Page';
import { groupItems } from '../../utils/helpers';
import GroupedList from '../../components/layout/GroupedList.vue';

const pages = ref<Page[]>([]);

const pagesGroup = computed(() => {
    return groupItems(pages.value);
});

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
            <grouped-list :listGroup="pagesGroup" v-slot="page">
                <a :href="`/spanel/pages/${page.item?.id}`" class="button primary w-full flex items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-semibold">{{ page.item?.name }}</span>
                        <span>{{ $t('pages.labels.urlParam', { url: page.item?.url }) }}</span>
                    </div>
                    <div class="flex gap-2">
                        <span>{{ $t('pages.labels.sectionsCount', { count: page.item?.sections_count }) }}</span>
                        <div>
                            <a :href="page.item?.url" class="button small default" target="_blank">
                                <fa-icon icon="up-right-from-square" />
                            </a>
                        </div>
                    </div>
                </a>
            </grouped-list>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
