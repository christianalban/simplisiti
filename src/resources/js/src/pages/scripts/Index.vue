<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getScripts } from '../../services/ScriptService';
import { Script } from '../../types/Script';
const scripts = ref<Script[]>([]);

onMounted(() => {
    getScripts()
    .then((response) => {
        scripts.value = response.data.data;
    });
});
</script>

<template>
    <div class="flex flex-col gap-4 h-screen py-2">
        <h1 class="title">{{ $t('scripts.titles.scriptsList') }}</h1>
        <div class="flex gap-2">
            <router-link class="button default" :to="{ name: 'dashboard' }">{{ $t('buttons.back') }}</router-link>
            <router-link class="button primary" :to="{ name: 'scripts.create' }">{{ $t('scripts.buttons.create') }}</router-link>
        </div>
        <ul class="w-1/5 grid gap-4">
            <li v-for="script of scripts" class="flex">
                <router-link :to="{ name: 'scripts.edit', params: { script: script.id } }" class="button primary w-full flex items-center justify-between">
                    <span class="font-semibold">{{ script.name }}</span>
                    <fa-icon v-if="script.is_active" icon="circle-check" />
                    <fa-icon v-else :icon="['far','circle']" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
</style>
