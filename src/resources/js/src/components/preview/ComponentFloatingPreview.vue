<script setup lang="ts">
import { PropType, ref } from 'vue';
import { Component } from '../../types/Component';
import { getComponentPreview } from '../../services/PageService';
import { parseComponentContent } from '../../services/ContentService';
import ComponentPreview from './ComponentPreview.vue';
import { FloatPosition } from '../../types/FloatPreview';

const { component } = defineProps({
    component: {
        type: Object as PropType<Component>,
        required: true,
    },
    position: {
        type: String as PropType<FloatPosition>,
        default: 'left',
    },
});

const componentPreviewRender = ref<string | null>(null);
const noPreview = ref(false);

const loadComponentPreview = async () => {
    if (!component.id || componentPreviewRender.value || noPreview.value) {
        return;
    }

    try {
        const content = await getComponentPreview(component.id, parseComponentContent(component, component.content));
        componentPreviewRender.value = content.data;
    } catch (error) {
        noPreview.value = true;
    }

}
</script>

<template>
    <div class="relative group">
        <div class="h-full w-full" @mouseenter="loadComponentPreview">
            <slot></slot>
        </div>
        <div class="invisible group-hover:visible">
            <div :class="`absolute preview-${position} shadow bg-white top-full mt-4 scale-[0.2] z-10`" v-if="componentPreviewRender && !noPreview">
                <component-preview :component="component" :html="componentPreviewRender"/>
            </div>
            <div class="absolute top-full mt-4 z-10" v-else>
                <div class="bg-white shadow p-2 text-center">
                    <p v-if="noPreview" class="text-center text-gray-500">{{ $t('components.labels.noPreview') }}</p>
                    <fa-icon v-else icon="spinner" class="animate-spin text-center text-gray-500"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.preview-right {
    transform-origin: top right;
    @apply right-0;
}

.preview-left {
    transform-origin: top left;
    @apply left-0;
}
</style>
