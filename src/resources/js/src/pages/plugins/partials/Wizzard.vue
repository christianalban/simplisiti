<script setup lang="ts">
import { ref } from 'vue';
import { Plugin } from '../../../types/Plugin';
import PluginItem from './PluginItem.vue'

const search = ref('')

defineProps({
    plugins: Array as () => Plugin[],
})

defineEmits(['installing', 'installed', 'uninstalling', 'uninstalled', 'error'])
</script>

<template>
    <div class="flex flex-col">
        <div class="w-full">
            <input type="search" class="input" v-model="search" :placeholder="$t('plugins.placeholders.searchPlugin')" />
        </div>
        <div class="flex flex-col py-4 overflow-x-auto h-[65vh]">
            <div v-if="plugins?.length" v-for="(plugin, index) of plugins" :key="plugin.name">
                <plugin-item
                    :plugin="plugin"
                    @installing="$emit('installing', $event)"
                    @installed="$emit('installed', $event)"
                    @uninstalling="$emit('uninstalling', $event)"
                    @uninstalled="$emit('uninstalled', $event)"
                    @error="$emit('error', $event)"
                ></plugin-item>
                <hr class="my-4" v-if="index !== plugins.length - 1"/>
            </div>
            <div v-else class="flex">
                <p class="text-center text-gray-500">{{ $t('plugins.labels.noPlugins') }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
