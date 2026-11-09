<script setup lang="ts">
import { PropType, computed, onMounted, ref } from 'vue';
import { HTML_TITLES } from '../engine/constants/HtmlTagsMappings';
import Wizard from './Wizard.vue';
import { dispatchElementRemoved } from '../engine/services/ElementEventDispatcherService';

const { element } = defineProps({
    element: {
        type: [HTMLElement, null] as PropType<HTMLElement | null>,
        required: true,
    }
});

const popup = ref<HTMLElement | null>(null);
const isClosed = ref(false);

const emit = defineEmits(['close']);

const calculatePosition = (element: HTMLElement | null) => {
    setTimeout(() => {
        if (!element || !popup.value) return;

        const rect = element.getBoundingClientRect();
        const bodyWidth = document.body.offsetWidth;
        const bodyHeight = document.body.offsetHeight;
        const popupWidth = 250;
        const padding = 10;

        let top = rect.top;
        let left = rect.left + rect.width + padding;

        if (left + popupWidth > bodyWidth) {
            left = rect.right - popupWidth;
            top = rect.top - popup.value.offsetHeight - padding;

            if (top < padding) {
                top = padding;
            }
        }

        if (top + popup.value.offsetHeight > bodyHeight) {
            top = bodyHeight - popup.value.offsetHeight - padding;
        }

        popup.value.style.top = `${top}px`;
        popup.value.style.left = `${left}px`;
    }, 50);
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

const deleteElement = (event: Event) => {
    if (element) {
        element.remove();
        if (element.dataset.simplisitiid) {
            dispatchElementRemoved(element.dataset.simplisitiid);
        }
        emit('close', event);
    }
    isClosed.value = true;
};

const tabChange = () => {
    calculatePosition(element);
};

calculatePosition(element);

onMounted(() => {
    document.addEventListener('scroll', () => {
        calculatePosition(element);
    });
});

</script>

<template>
    <div
        :class="[
            'fixed z-[1000] min-w-max rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5 animate-editor-fade-in',
            { 'animate-editor-fade-out': isClosed }
        ]"
        ref="popup"
        @click.stop
    >
        <div class="flex items-center gap-2 border-b border-gray-200 py-1.5">
            <h4 class="m-0 text-sm font-semibold text-gray-800">{{ type }}</h4>
            <button
                class="ml-auto cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                @click="deleteElement"
            >
                <fa-icon icon="trash" />
            </button>
            <button
                class="cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                @click="emitClosed"
            >
                <fa-icon icon="times" />
            </button>
        </div>
        <div class="pt-2">
            <wizard v-if="element" :element="element" @tabChange="tabChange" />
        </div>
    </div>
</template>
