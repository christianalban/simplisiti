<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getPages } from '../../services/PageService';
import { Page } from '../../types/Page';

const pages = ref<Page[]>([]);

onMounted(() => {
    getPages()
    .then((response) => {
        pages.value = response.data.data;
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2">
        <h1 class="title">{{ $t('pages.titles.pagesList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'pages.create' }">{{ $t('pages.buttons.create') }}</router-link>
        </div>
        <ul class="w-2/3 grid gap-4">
            <li v-for="page of pages" class="flex">
                <router-link :to="{ name: 'pages.edit', params: { page: page.id } }" class="button primary w-full flex items-center justify-between">
                    <div class="flex flex-col">
                        <span class="font-semibold">{{ page.name }}</span>
                        <span>{{ $t('pages.labels.urlParam', { url: page.url }) }}</span>
                    </div>
                    <div class="flex gap-2">
                        <span>{{ $t('pages.labels.sectionsCount', { count: page.sections_count }) }}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
</style>
