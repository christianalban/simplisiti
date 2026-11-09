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
    <div class="flex w-full flex-col gap-1.5 p-2.5">
        <div>
            <h2 class="m-0 text-lg font-bold text-gray-900">Elementos</h2>
        </div>
        <div
            v-for="{icon, title, element} of elementIcons"
            :key="element"
            class="flex cursor-grab items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-50 active:cursor-grabbing"
            :title="title"
            draggable="true"
            @dragstart="enableElementAddingMode(element)"
            @dragend="disableElementAddingMode"
        >
            <fa-icon :icon="icon" class="h-4 w-4 shrink-0 text-gray-600"/>
            <span>{{ title }}</span>
        </div>
    </div>   
</template>
