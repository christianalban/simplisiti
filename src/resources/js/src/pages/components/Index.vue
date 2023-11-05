<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getComponents} from '../../services/ComponentService';
import { Component } from '../../types/Component';

const components = ref<Component[]>([]);

onMounted(() => {
    getComponents()
    .then((response) => {
        components.value = response.data.data;
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2">
        <h1 class="title">{{ $t('components.titles.componentsList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'components.create' }">{{ $t('components.buttons.create') }}</router-link>
        </div>
        <div class="grid grid-cols-6 grid-rows-6 h-full">
            <router-link :to="{ name: 'components.edit', params: { component: component.id } }" class="tile" v-for="component of components" :key="component.name">
                <span class="tile-title">{{ component.name }}</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tile {
    @apply col-span-1 row-span-1 flex justify-center items-center bg-blue-200 rounded-lg;

    &:hover {
        @apply border-4 border-blue-300;
    }

    .tile-title {
        @apply font-semibold text-2xl;
    }
}
</style>
