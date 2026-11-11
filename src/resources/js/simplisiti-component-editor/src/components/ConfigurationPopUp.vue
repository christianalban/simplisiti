<script setup lang="ts">
import { PropType, computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
import { HTML_TITLES } from '../engine/constants/HtmlTagsMappings';
import Wizard from './Wizard.vue';
import { dispatchElementRemoved } from '../engine/services/ElementEventDispatcherService';
import ConfirmationDialog from './ConfirmationDialog.vue';

const { element, showDeleteButton, dispatchChanges } = defineProps({
    element: {
        type: [HTMLElement, null] as PropType<HTMLElement | null>,
        required: true,
    },
    showDeleteButton: {
        type: Boolean,
        default: true,
    },
    dispatchChanges: {
        type: Boolean,
        default: true,
    }
});

const popup = ref<HTMLElement | null>(null);
const isClosed = ref(false);
const showDeleteConfirmation = ref(false);
let positionFrameId: number | null = null;
let resizeObserver: ResizeObserver | null = null;

const emit = defineEmits([
    'close',
    'classChange',
    'styleChange',
    'contentChange',
    'attributeChange',
]);

const updatePosition = (target: HTMLElement | null) => {
    if (!target || !popup.value) {
        return;
    }

    const viewport = document.documentElement;
    const viewportWidth = viewport.clientWidth || window.innerWidth;
    const viewportHeight = viewport.clientHeight || window.innerHeight;
    const targetRect = target.getBoundingClientRect();
    const popupWidth = popup.value.offsetWidth;
    const popupHeight = popup.value.offsetHeight;
    const padding = 10;
    const gap = 10;

    const maxLeft = Math.max(padding, viewportWidth - popupWidth - padding);
    const maxTop = Math.max(padding, viewportHeight - popupHeight - padding);
    const fitsRight = targetRect.right + gap + popupWidth <= viewportWidth - padding;
    const fitsLeft = targetRect.left - gap - popupWidth >= padding;

    let left = fitsRight
        ? targetRect.right + gap
        : fitsLeft
            ? targetRect.left - popupWidth - gap
            : targetRect.right + gap;

    let top = targetRect.top;

    if (top + popupHeight > viewportHeight - padding) {
        const topAboveTarget = targetRect.top - popupHeight - gap;

        top = topAboveTarget >= padding ? topAboveTarget : maxTop;
    }

    if (top < padding) {
        const topBelowTarget = targetRect.bottom + gap;

        top = topBelowTarget + popupHeight <= viewportHeight - padding
            ? topBelowTarget
            : padding;
    }

    popup.value.style.top = `${Math.min(Math.max(top, padding), maxTop)}px`;
    popup.value.style.left = `${Math.min(Math.max(left, padding), maxLeft)}px`;
};

const calculatePosition = (target: HTMLElement | null = element) => {
    if (positionFrameId !== null) {
        cancelAnimationFrame(positionFrameId);
    }

    positionFrameId = requestAnimationFrame(() => {
        positionFrameId = null;
        updatePosition(target);
    });
};

const type = computed(() => {
    const tagName = element?.tagName?.toLowerCase();
    if (!tagName) return 'Element';
    return HTML_TITLES[tagName] || 'Element';
});

const emitClosed = (event: Event) => {
    setTimeout(() => {
        emit('close', event);
        isClosed.value = true;
    }, 300);
};

const requestDelete = () => {
    showDeleteConfirmation.value = true;
};

const cancelDelete = () => {
    showDeleteConfirmation.value = false;
};

const deleteElement = () => {
    if (element) {
        element.remove();
        if (element.dataset.simplisitiid) {
            dispatchElementRemoved(element.dataset.simplisitiid);
        }
        showDeleteConfirmation.value = false;
        isClosed.value = true;
        emit('close');
    }
};

const tabChange = () => {
    nextTick(() => calculatePosition(element));
};

const onDocumentScroll = () => {
    calculatePosition(element);
};

onMounted(() => {
    document.addEventListener('scroll', onDocumentScroll, true);
    window.addEventListener('resize', onDocumentScroll);
    window.visualViewport?.addEventListener('resize', onDocumentScroll);
    window.visualViewport?.addEventListener('scroll', onDocumentScroll);
    resizeObserver = new ResizeObserver(() => calculatePosition(element));

    if (popup.value) {
        resizeObserver.observe(popup.value);
    }

    if (element) {
        resizeObserver.observe(element);
    }

    nextTick(() => calculatePosition(element));
});

onUnmounted(() => {
    document.removeEventListener('scroll', onDocumentScroll, true);
    window.removeEventListener('resize', onDocumentScroll);
    window.visualViewport?.removeEventListener('resize', onDocumentScroll);
    window.visualViewport?.removeEventListener('scroll', onDocumentScroll);
    resizeObserver?.disconnect();
    resizeObserver = null;

    if (positionFrameId !== null) {
        cancelAnimationFrame(positionFrameId);
        positionFrameId = null;
    }
});

</script>

<template>
    <div
        :class="[
            'fixed z-[1000] max-h-[calc(100vh-20px)] max-w-[calc(100vw-20px)] overflow-auto rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5 animate-editor-fade-in',
            { 'animate-editor-fade-out': isClosed }
        ]"
        ref="popup"
        @click.stop
    >
        <div class="flex items-center gap-2 border-b border-gray-200 py-1.5">
            <h4 class="m-0 text-sm font-semibold text-gray-800">{{ type }}</h4>
            <button
                v-if="showDeleteButton"
                type="button"
                class="ml-auto cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Eliminar elemento"
                title="Eliminar elemento"
                @click="requestDelete"
            >
                <div class="editor-icon-wrapper">
                    <fa-icon icon="trash" />
                </div>
            </button>
            <button
                type="button"
                class="cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                @click="emitClosed"
            >
                <div class="editor-icon-wrapper">
                    <fa-icon icon="xmark" />
                </div>
            </button>
        </div>
        <div class="pt-2">
            <wizard
                v-if="element"
                :element="element"
                :dispatch-changes="dispatchChanges"
                @tabChange="tabChange"
                @classChange="emit('classChange', $event)"
                @styleChange="emit('styleChange', $event)"
                @contentChange="emit('contentChange', $event)"
                @attributeChange="emit('attributeChange', $event)"
            />
        </div>
        <confirmation-dialog
            :show="showDeleteConfirmation"
            title="Eliminar elemento"
            :message="`¿Deseas eliminar ${type.toLowerCase()}?`"
            @confirm="deleteElement"
            @cancel="cancelDelete"
        />
    </div>
</template>
