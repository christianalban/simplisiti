<script setup lang="ts" generic="T">
import { PropType, ref } from 'vue';
import { Tab } from '../types/Tab';

defineProps({
    tabs: {
        type: Array as PropType<Tab<T>[]>,
        default: [],
    },
});

const activeTabIndex = ref(0);

</script>

<template>
    <div class="grid grid-cols-3">
        <div class="flex flex-col overflow-y-auto rounded-lg bg-gray-100 h-full">
            <div :class="['tab', {'active': index === activeTabIndex}]" v-for="(tab, index) of tabs" :key="index" @click="activeTabIndex = index">
                <span class="before"></span>
                {{ tab.title }}
                <span class="after"></span>
            </div>
        </div>
        <div class="col-span-2 overflow-y-auto h-full">
            <div v-for="(tab, index) of tabs">
                <div v-if="index === activeTabIndex">
                    <slot :item="tab"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
