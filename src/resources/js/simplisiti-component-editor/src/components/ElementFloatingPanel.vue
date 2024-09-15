<script setup lang="ts">
import { ref } from 'vue';
import { HTML_ICONS, HTML_TITLES, SupportedTags } from '../engine/constants/HtmlTagsMappings';
import { enableElementAddingMode } from '../engine/services/ElementManagerService';

const toolBoxVisible = ref(true);

const elementIcons = Object.keys(HTML_ICONS).map((icon) => {
    return {
        icon: HTML_ICONS[icon],
        title: HTML_TITLES[icon],
        element: icon as SupportedTags,
    };
});

const toggleVisibilityToolbox = () => {
    toolBoxVisible.value = !toolBoxVisible.value;
};

</script>

<template>
    <div class="sp-element__floating-container">
        <div :class="['sp-element__floating-panel', { 'sp-element__floating-panel__closed': !toolBoxVisible }]">
            <div class="sp-element__element-content">
                <div>
                    <h2 class="sp-element__title">Elementos</h2>
                </div>
                <div v-for="{icon, title, element} of elementIcons" class="sp-element__icons-container" :title="title" @dragstart="enableElementAddingMode(element)" draggable="true">
                    <fa-icon :icon="icon" class="sp-element__icon"/>
                    <span>{{ title }}</span>
                </div>
            </div>
        </div>
        <div class="sp-element__side-buttons">
            <button class="sp-element__close-button" @click="toggleVisibilityToolbox">
                <fa-icon icon="times" v-if="toolBoxVisible"/>
                <fa-icon icon="cube" v-else/>
            </button>
        </div>
    </div>
</template>

<style scoped>
.sp-element__title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
}

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
    width: 135px;
}

.sp-element__floating-panel.sp-element__floating-panel__closed {
    width: 0;
}

.sp-element__element-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
}

.sp-element__icons-container {
    padding: 5px 10px;
    border-radius: 5px;
    cursor: move;
    transition: background-color 0.3s;
    border: 1px solid #f0f0f0;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
}

.sp-element__icons-container:hover {
    background-color: #f0f0f0;
}

.sp-element__icon {
    width: 14px;
    height: 14px;
}

.sp-element__side-buttons {
    display: flex;
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
