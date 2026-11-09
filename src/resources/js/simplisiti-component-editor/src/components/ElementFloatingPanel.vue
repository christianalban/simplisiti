<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElementsTabs, ElementTab } from '../engine/services/ElementFloatingPanelService';
import { isElementAddingMode } from '../engine/services/ElementManagerService';

const toolBoxVisible = ref(false);
const selectedTab = ref<ElementTab>(ElementsTabs[0]);

const isToolboxExpanded = computed(() => toolBoxVisible.value && !isElementAddingMode.value);

const toggleVisibilityToolbox = () => {
    toolBoxVisible.value = !isToolboxExpanded.value;
};

</script>

<template>
    <div class="fixed inset-y-0 left-0 z-[1000] flex overflow-y-auto">
        <div :class="[
            'flex w-[300px] gap-1.5 overflow-hidden bg-white shadow-lg transition-[width] duration-300',
            { '!w-0': isElementAddingMode || !toolBoxVisible }
        ]">
            <div class="min-w-[300px]">
                <component :is="selectedTab.component"/>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center">
            <button
                class="cursor-pointer w-7 rounded-r-md bg-gray-100 p-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none"
                @click="toggleVisibilityToolbox"
                :aria-label="isToolboxExpanded ? 'Cerrar elementos' : 'Abrir elementos'"
            >
                <fa-icon :icon="isToolboxExpanded ? 'xmark' : selectedTab.icon"/>
            </button>
        </div>
    </div>
</template>
