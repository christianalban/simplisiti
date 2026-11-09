<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import ConfigurationPopUp from './components/ConfigurationPopUp.vue';
import ElementFloatingPanel from './components/ElementFloatingPanel.vue';
import { element, isElementAddingMode, isPopUpOpened } from './engine/services/ElementManagerService';
import { getComponentPreview, initSupportedElements, waitForComponentPreview } from './engine/helpers/HtmlAlias';

let cleanupInteractionLayer: (() => void) | null = null;
const canUndo = ref(false);
const canRedo = ref(false);

watch(isElementAddingMode, (value) => {
    const componentPreview = getComponentPreview();

    if (value) {
        componentPreview?.classList.add('sp-element__add-element-mode');
    } else {
        componentPreview?.classList.remove('sp-element__add-element-mode');
    }
});

const closePopUp = () => {
    if (element.value) {
        element.value.classList.remove('sp-element__active');
    }
    element.value = null;
    isPopUpOpened.value = false;
};

const requestHistoryAction = (action: 'undo' | 'redo') => {
    window.parent.document.dispatchEvent(new CustomEvent(`editorHistory${action === 'undo' ? 'Undo' : 'Redo'}`));
};

const onHistoryState = (event: Event) => {
    const state = (event as CustomEvent<{ canUndo: boolean; canRedo: boolean }>).detail;

    canUndo.value = state?.canUndo ?? false;
    canRedo.value = state?.canRedo ?? false;
};

const onHistoryRestored = () => {
    closePopUp();
};

const requestHistoryState = () => {
    window.parent.document.dispatchEvent(new CustomEvent('editorHistoryStateRequest'));
};

const initializeEditorSurface = async () => {
    const componentPreview = await waitForComponentPreview();

    cleanupInteractionLayer?.();
    cleanupInteractionLayer = initSupportedElements(componentPreview);
};

onMounted(() => {
    document.addEventListener('editorHistoryState', onHistoryState);
    document.addEventListener('editorHistoryRestored', onHistoryRestored);
    requestHistoryState();
    initializeEditorSurface().catch((error) => {
        console.error('Unable to initialize the graphical editor surface.', error);
    });
});

onBeforeUnmount(() => {
    document.removeEventListener('editorHistoryState', onHistoryState);
    document.removeEventListener('editorHistoryRestored', onHistoryRestored);
    cleanupInteractionLayer?.();
    cleanupInteractionLayer = null;
});
</script>

<template>
    <div class="min-h-full font-sans text-sm text-gray-800">
        <div
            v-if="canUndo || canRedo"
            class="editor-fixed-overlay right-3 top-3 z-[1100] flex gap-1 rounded-md bg-white/95 p-1 shadow-lg ring-1 ring-black/5"
        >
            <button
                v-if="canUndo"
                class="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
                aria-label="Deshacer cambio"
                title="Deshacer cambio"
                @click="requestHistoryAction('undo')"
            >
                <div class="editor-icon-wrapper">
                    <fa-icon icon="arrow-rotate-left" />
                </div>
            </button>
            <button
                v-if="canRedo"
                class="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
                aria-label="Rehacer cambio"
                title="Rehacer cambio"
                @click="requestHistoryAction('redo')"
            >
                <div class="editor-icon-wrapper">
                    <fa-icon icon="arrow-rotate-right" />
                </div>
            </button>
        </div>
        <configuration-pop-up
            v-if="isPopUpOpened"
            :key="element?.dataset.simplisitiid || element?.tagName"
            :element="element"
            :type="element?.tagName"
            @close="closePopUp"
        />
        <element-floating-panel />
    </div>
</template>
