<script setup lang="ts">
import { HTML_ICONS, HTML_TITLES, SupportedTags } from '../engine/constants/HtmlTagsMappings';
import { enableElementAddingMode } from '../engine/services/ElementManagerService';

const elementIcons = Object.keys(HTML_ICONS).map((icon) => {
    return {
        icon: HTML_ICONS[icon],
        title: HTML_TITLES[icon],
        element: icon as SupportedTags,
    };
});

</script>

<template>
    <div class="sp-element__floating-container">
        <div class="sp-element__floating-panel">
            <div v-for="{icon, title, element} of elementIcons" class="sp-element__icons-container" :title="title" @dragstart="enableElementAddingMode(element)" draggable="true">
                <fa-icon :icon="icon" class="sp-element__icon"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sp-element__floating-container {
    position: fixed;
    top: 10px;
    left: 10px;
    bottom: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow-y: auto;
    padding: 5px;
    transition: transform 0.3s;
}

.sp-element__floating-panel {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.sp-element__icons-container {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    border: 1px solid #f0f0f0;
}

.sp-element__icons-container:hover {
    background-color: #f0f0f0;
}

.sp-element__icon {
    width: 14px;
    height: 14px;
}
</style>
