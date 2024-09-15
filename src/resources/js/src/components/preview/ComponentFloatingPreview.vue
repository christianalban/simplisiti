<script setup lang="ts">
import { PropType, ref, onMounted, onBeforeUnmount } from 'vue';
import { Component } from '../../types/Component';
import ComponentPreview from './ComponentPreview.vue';

const { component } = defineProps({
    component: {
        type: Object as PropType<Component>,
        required: true,
    },
});

const componentPreviewRender = ref<string | null>(null);
const previewContainer = ref<HTMLDivElement | null>(null);
const previewComponent = ref<HTMLElement | null>(null);
const scaleFactor = ref('scale(1)');
const reloadPreview = ref(false);

const calcScaleFactor = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const offsetWidth = previewContainer.value?.offsetWidth;

            if (!previewContainer.value) {
                resolve('scale(1)');
                return;
            }

            if (!offsetWidth) {
                resolve('scale(1)');
                return;
            };

            const scale = offsetWidth / 1366;
            resolve(`scale(${scale})`);
        }, 50);
    });
}

const setScaleFactor = async (): Promise<void> => {
    scaleFactor.value = await calcScaleFactor();
}

const handleResize = () => {
    reloadPreview.value = false;
    setScaleFactor().then(() => {
        reloadPreview.value = true;
    });
};

const loadComponentPreview = () => {
    componentPreviewRender.value = component.html
}

const resizeObserver = new ResizeObserver(handleResize);

onMounted(() => {
    loadComponentPreview();
    if (previewContainer.value) {
        resizeObserver.observe(previewContainer.value);  // Empezamos a observar el elemento
    }
});

onBeforeUnmount(() => {
    if (previewContainer.value) {
        resizeObserver.unobserve(previewContainer.value);  // Dejamos de observar cuando el componente se desmonte
  }
});
</script>

<template>
    <div class="relative group w-full pb-[56.25%] h-0">
        <div ref="previewContainer" :class="`absolute inset-0 overflow-hidden bg-white z-10`">
            <component-preview
                ref="previewComponent"
                v-if="reloadPreview"
                class="w-[1366px] h-[768px] preview-left"
                :style="{ transform: scaleFactor }"
                :component="component"
                :html="componentPreviewRender"
            />
        </div>
    </div>
</template>

<style scoped>
.preview-left {
    transform-origin: top left;
    @apply left-0;
}
</style>
