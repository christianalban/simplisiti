<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getStyles } from '../../services/StyleService';
import { Style } from '../../types/Style';

const styles = ref<Style[]>([]);

onMounted(() => {
    getStyles()
    .then((response) => {
        styles.value = response.data.data;
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2">
        <h1 class="title">{{ $t('styles.titles.stylesList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'styles.create' }">{{ $t('styles.buttons.create') }}</router-link>
        </div>
        <ul class="w-1/5 grid gap-4">
            <li v-for="style of styles" class="flex">
                <router-link :to="{ name: 'styles.edit', params: { style: style.id } }" class="button primary w-full flex items-center justify-between">
                    <span class="font-semibold">{{ style.name }}</span>
                    <fa-icon v-if="style.is_active" icon="circle-check" />
                    <fa-icon v-else :icon="['far','circle']" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
</style>>
