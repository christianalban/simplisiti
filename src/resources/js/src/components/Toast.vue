<script setup lang="ts">
import { toasts } from '../services/ToastService';
import { ToastPosition } from '../types/Toast';
import { PropType } from 'vue';

const props = defineProps({
    position: {
        type: String as PropType<ToastPosition>,
        default: 'top-right',
    },
});

</script>

<template>
    <ul :class="['toast', props.position]">
        <li v-for="toast of toasts" :key="toast.timestamp" :class="['toast-item', toast.type]">
            <span class="toast-title">{{ toast.title }}</span>
            <span class="toast-message">{{ toast.message }}</span>
        </li>
    </ul>
</template>

<style scoped>
.toast {
    @apply fixed list-none p-4 m-4 z-50 gap-4 flex flex-col-reverse;

    &.top-right {
        @apply top-0 right-0;
    }

    &.top-left {
        @apply top-0 left-0;
    }

    &.bottom-right {
        @apply bottom-0 right-0;
    }

    &.bottom-left {
        @apply bottom-0 left-0;
    }
}

.toast-item {
    @apply flex items-center gap-4 p-4 rounded-lg shadow-lg;

    .toast-title {
        @apply font-bold;
    }

    .toast-message {
        @apply text-sm;
    }

    &.error {
        @apply bg-red-100 text-red-900;
    }

    &.success {
        @apply bg-green-100 text-green-900;
    }
}
</style>
