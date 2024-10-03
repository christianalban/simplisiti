<script setup lang="ts">
import { HTML_ICONS, HTML_TITLES, SupportedTags } from '../../engine/constants/HtmlTagsMappings';
import { disableElementAddingMode, enableElementAddingMode } from '../../engine/services/ElementManagerService';


const elementIcons = Object.keys(HTML_ICONS).map((icon) => {
    return {
        icon: HTML_ICONS[icon],
        title: HTML_TITLES[icon],
        element: icon as SupportedTags,
    };
});
</script>

<template>
    <div class="sp-element__element-content">
        <div>
            <h2 class="sp-element__title">Elementos</h2>
        </div>
        <div v-for="{icon, title, element} of elementIcons" class="sp-element__icons-container" :title="title" @dragstart="enableElementAddingMode(element)" @dragend="disableElementAddingMode" draggable="true">
            <fa-icon :icon="icon" class="sp-element__icon"/>
            <span>{{ title }}</span>
        </div>
    </div>   
</template>

<style scoped>
.sp-element__title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
}

.sp-element__element-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    width: 100%;
}

.sp-element__icons-container {
    padding: 5px 10px;
    border-radius: 5px;
    cursor: grab;
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

.sp-element__icons-container:active {
    cursor: grabbing;
}

.sp-element__icon {
    width: 14px;
    height: 14px;
}
</style>
