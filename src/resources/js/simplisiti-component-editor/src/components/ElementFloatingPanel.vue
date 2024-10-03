<script setup lang="ts">
import { ref } from 'vue';
import { ElementsTabs, ElementTab } from '../engine/services/ElementFloatingPanelService';
import { isElementAddingMode } from '../engine/services/ElementManagerService';

const toolBoxVisible = ref(false);
const selectedTab = ref<ElementTab>(ElementsTabs[0]);

const toggleVisibilityToolbox = () => {
    toolBoxVisible.value = !toolBoxVisible.value;
};

const selectTab = (tab: ElementTab) => {
    selectedTab.value = tab;
    toolBoxVisible.value = true;
};

</script>

<template>
    <div class="sp-element__floating-container">
        <div :class="['sp-element__floating-panel', { 'sp-element__floating-panel__closed': isElementAddingMode || !toolBoxVisible }]">
            <div class="sp-element__component-container">
                <component :is="selectedTab.component"/>
            </div>
        </div>
        <div class="sp-element__side-buttons">
            <button class="sp-element__close-button" v-for="tab of ElementsTabs" v-key="tab.icon" @click="selectTab(tab)">
                <fa-icon :icon="tab.icon"/>
            </button>
            <button class="sp-element__close-button" @click="toggleVisibilityToolbox" v-if="toolBoxVisible">
                <fa-icon icon="times"/>
            </button>
        </div>
    </div>
</template>

<style scoped>
.sp-element__floating-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    overflow-y: auto;
    display: flex;
}

.sp-element__floating-panel {
    display: flex;
    gap: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: width 0.3s;
    width: 300px;
}

.sp-element__component-container {
    min-width: 300px;
}

.sp-element__floating-panel.sp-element__floating-panel__closed {
    width: 0;
}

.sp-element__side-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sp-element__close-button {
    cursor: pointer;
    font-size: 1rem;
    padding: 5px;
    border-radius: 5px;
    background-color: #f0f0f0;
    transition: background-color 0.3s;
}

.sp-element__close-button:hover {
    background-color: #e0e0e0;
}
</style>
