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
    <div :class="['sp-configuration-popup', {'sp-configuration-popup_closed': isClosed}]" ref="popup" @click.stop="undefined">
        <div class="sp-configuration-popup__header">
            <h4>{{ type }}</h4>
            <button class="sp-configuration-popup__button" @click="deleteElement">
                <fa-icon icon="trash" />
            </button>
            <button class="sp-configuration-popup__button" @click="emitClosed">
                <fa-icon icon="times" />
            </button>
        </div>
        <div class="sp-configuration-popup__body">
            <wizard v-if="element" :element="element" @tabChange="tabChange" />
        </div>
    </div>
</template>

<style scoped>
.sp-configuration-popup {
    position: fixed;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: auto;
    animation: fadeIn 0.25s linear forwards;
    min-width: max-content;

    &.sp-configuration-popup_closed {
        animation: fadeOut 0.25s linear forwards;
    }

    & > .sp-configuration-popup__header {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;

        & > h4 {
            font-size: 0.9rem;
            margin: 0;
        }

        & > .sp-configuration-popup__close {
            cursor: pointer;
            font-size: 1.5rem;
        }

        & > .sp-configuration-popup__button:nth-child(2) {
            margin-left: auto;
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
