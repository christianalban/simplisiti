<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import ConfigurationPopUp from './components/ConfigurationPopUp.vue';
import ElementFloatingPanel from './components/ElementFloatingPanel.vue';
import { element, isElementAddingMode, isPopUpOpened } from './engine/services/ElementManagerService';
import { getComponentPreview, initSupportedElements, waitForComponentPreview } from './engine/helpers/HtmlAlias';

let cleanupInteractionLayer: (() => void) | null = null;
const canUndo = ref(false);
const canRedo = ref(false);
const historyOverlay = ref<HTMLElement | null>(null);
const isHistoryDragging = ref(false);
const suppressHistoryClick = ref(false);

interface HistoryOverlayPosition {
    left: number | null;
    right: number;
    top: number;
}

interface HistoryDragSession {
    pointerId: number;
    startX: number;
    startY: number;
    startLeft: number;
    startTop: number;
    width: number;
    height: number;
    moved: boolean;
}

const HISTORY_OVERLAY_PADDING = 12;
const HISTORY_DRAG_THRESHOLD = 4;
const HISTORY_SNAP_DURATION = 200;
const historyOverlayPosition = ref<HistoryOverlayPosition>({
    left: null,
    right: HISTORY_OVERLAY_PADDING,
    top: HISTORY_OVERLAY_PADDING,
});
let historyDragSession: HistoryDragSession | null = null;
const historyPointerListenerOptions: AddEventListenerOptions = { passive: false };
const isHistorySnapping = ref(false);
let historySnapTimeout: number | null = null;

const historyOverlayStyle = computed(() => {
    const position = historyOverlayPosition.value;
    const hasExplicitLeft = position.left !== null;

    return {
        top: `${position.top}px`,
        left: hasExplicitLeft ? `${position.left}px` : 'auto',
        right: hasExplicitLeft ? 'auto' : `${position.right}px`,
    };
});

const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), Math.max(min, max));
};

const updateHistoryOverlayPosition = (
    left: number,
    top: number,
    width: number,
    height: number,
) => {
    const maxLeft = Math.max(
        HISTORY_OVERLAY_PADDING,
        window.innerWidth - width - HISTORY_OVERLAY_PADDING,
    );
    const maxTop = Math.max(
        HISTORY_OVERLAY_PADDING,
        window.innerHeight - height - HISTORY_OVERLAY_PADDING,
    );

    historyOverlayPosition.value = {
        ...historyOverlayPosition.value,
        left: clamp(left, HISTORY_OVERLAY_PADDING, maxLeft),
        top: clamp(top, HISTORY_OVERLAY_PADDING, maxTop),
    };
};

const clearHistorySnapTimeout = () => {
    if (historySnapTimeout !== null) {
        window.clearTimeout(historySnapTimeout);
        historySnapTimeout = null;
    }
};

const finishHistorySnap = () => {
    clearHistorySnapTimeout();
    isHistorySnapping.value = false;
};

const animateHistoryOverlayToCorner = (left: number, top: number, width: number) => {
    const shouldAnchorLeft = left + width / 2 <= window.innerWidth / 2;
    const targetLeft = shouldAnchorLeft
        ? HISTORY_OVERLAY_PADDING
        : window.innerWidth - width - HISTORY_OVERLAY_PADDING;

    clearHistorySnapTimeout();
    isHistorySnapping.value = true;
    historyOverlayPosition.value = {
        ...historyOverlayPosition.value,
        left,
        top,
    };
    historySnapTimeout = window.setTimeout(finishHistorySnap, HISTORY_SNAP_DURATION + 50);

    window.requestAnimationFrame(() => {
        if (!isHistorySnapping.value) {
            return;
        }

        historyOverlayPosition.value = {
            ...historyOverlayPosition.value,
            left: Math.max(HISTORY_OVERLAY_PADDING, targetLeft),
            right: HISTORY_OVERLAY_PADDING,
            top: HISTORY_OVERLAY_PADDING,
        };
    });
};

const constrainHistoryOverlay = () => {
    const overlay = historyOverlay.value;

    if (!overlay) {
        return;
    }

    const rect = overlay.getBoundingClientRect();
    const maxHorizontalOffset = Math.max(
        HISTORY_OVERLAY_PADDING,
        window.innerWidth - rect.width - HISTORY_OVERLAY_PADDING,
    );
    const position = historyOverlayPosition.value;
    const left = position.left === null
        ? null
        : clamp(position.left, HISTORY_OVERLAY_PADDING, maxHorizontalOffset);
    const right = clamp(
        position.right,
        HISTORY_OVERLAY_PADDING,
        maxHorizontalOffset,
    );

    historyOverlayPosition.value = {
        ...position,
        left,
        right,
        top: isHistoryDragging.value ? position.top : HISTORY_OVERLAY_PADDING,
    };
};

const startHistoryDrag = (event: PointerEvent) => {
    if (
        isHistorySnapping.value
        || !event.isPrimary
        || (event.pointerType === 'mouse' && event.button !== 0)
    ) {
        return;
    }

    const overlay = historyOverlay.value;

    if (!overlay) {
        return;
    }

    const rect = overlay.getBoundingClientRect();

    suppressHistoryClick.value = false;
    historyOverlayPosition.value = {
        ...historyOverlayPosition.value,
        left: rect.left,
        top: rect.top,
    };
    historyDragSession = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startLeft: rect.left,
        startTop: rect.top,
        width: rect.width,
        height: rect.height,
        moved: false,
    };

    document.addEventListener('pointermove', moveHistoryDrag, historyPointerListenerOptions);
    document.addEventListener('pointerup', finishHistoryDrag, historyPointerListenerOptions);
    document.addEventListener('pointercancel', finishHistoryDrag, historyPointerListenerOptions);
};

const moveHistoryDrag = (event: PointerEvent) => {
    const session = historyDragSession;

    if (!session || session.pointerId !== event.pointerId) {
        return;
    }

    const deltaX = event.clientX - session.startX;
    const deltaY = event.clientY - session.startY;

    if (!session.moved && Math.hypot(deltaX, deltaY) < HISTORY_DRAG_THRESHOLD) {
        return;
    }

    session.moved = true;
    isHistoryDragging.value = true;
    event.preventDefault();

    const overlay = historyOverlay.value;

    if (overlay && !overlay.hasPointerCapture(event.pointerId)) {
        overlay.setPointerCapture(event.pointerId);
    }

    updateHistoryOverlayPosition(
        session.startLeft + deltaX,
        session.startTop + deltaY,
        session.width,
        session.height,
    );
};

const finishHistoryDrag = (event: PointerEvent) => {
    const session = historyDragSession;
    const overlay = historyOverlay.value;

    if (!session || session.pointerId !== event.pointerId) {
        return;
    }

    if (session.moved && overlay) {
        event.preventDefault();
        const rect = overlay.getBoundingClientRect();
        animateHistoryOverlayToCorner(rect.left, rect.top, rect.width);
        suppressHistoryClick.value = true;
    }

    if (overlay?.hasPointerCapture(event.pointerId)) {
        overlay.releasePointerCapture(event.pointerId);
    }

    document.removeEventListener('pointermove', moveHistoryDrag, historyPointerListenerOptions);
    document.removeEventListener('pointerup', finishHistoryDrag, historyPointerListenerOptions);
    document.removeEventListener('pointercancel', finishHistoryDrag, historyPointerListenerOptions);
    historyDragSession = null;
    isHistoryDragging.value = false;
};

const handleHistoryAction = (action: 'undo' | 'redo') => {
    if (suppressHistoryClick.value) {
        suppressHistoryClick.value = false;
        return;
    }

    requestHistoryAction(action);
};

watch(isElementAddingMode, (value) => {
    const componentPreview = getComponentPreview();

    if (value) {
        componentPreview?.classList.add('sp-element__add-element-mode');
    } else {
        componentPreview?.classList.remove('sp-element__add-element-mode');
    }
});

watch([canUndo, canRedo], () => {
    window.requestAnimationFrame(constrainHistoryOverlay);
});

const closePopUp = () => {
    if (element.value) {
        element.value.classList.remove('sp-element__selected');
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
    window.addEventListener('resize', constrainHistoryOverlay);
    requestHistoryState();
    initializeEditorSurface().catch((error) => {
        console.error('Unable to initialize the graphical editor surface.', error);
    });
});

onBeforeUnmount(() => {
    document.removeEventListener('editorHistoryState', onHistoryState);
    document.removeEventListener('editorHistoryRestored', onHistoryRestored);
    window.removeEventListener('resize', constrainHistoryOverlay);
    clearHistorySnapTimeout();
    document.removeEventListener('pointermove', moveHistoryDrag, historyPointerListenerOptions);
    document.removeEventListener('pointerup', finishHistoryDrag, historyPointerListenerOptions);
    document.removeEventListener('pointercancel', finishHistoryDrag, historyPointerListenerOptions);
    historyDragSession = null;
    isHistoryDragging.value = false;
    cleanupInteractionLayer?.();
    cleanupInteractionLayer = null;
});
</script>

<template>
    <div class="min-h-full font-sans text-sm text-gray-800">
        <div
            v-if="canUndo || canRedo"
            ref="historyOverlay"
            :class="[
                'editor-fixed-overlay editor-history-overlay z-[1100] flex gap-1 rounded-md bg-white/95 p-1 shadow-lg ring-1 ring-black/5',
                {
                    'editor-history-overlay--dragging': isHistoryDragging,
                    'editor-history-overlay--snapping': isHistorySnapping
                }
            ]"
            :style="historyOverlayStyle"
            @pointerdown="startHistoryDrag"
            @transitionend="finishHistorySnap"
        >
            <button
                v-if="canUndo"
                class="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
                aria-label="Deshacer cambio"
                title="Deshacer cambio"
                @click="handleHistoryAction('undo')"
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
                @click="handleHistoryAction('redo')"
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
