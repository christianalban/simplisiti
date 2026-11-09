<script setup lang="ts">
defineProps({
    show: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['confirm', 'cancel']);
</script>

<template>
    <div
        v-if="show"
        class="fixed inset-0 z-[1100] flex items-center justify-center bg-gray-900/40 p-4"
        role="dialog"
        aria-modal="true"
        @click.self="emit('cancel')"
    >
        <div class="w-full max-w-sm rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/10">
            <h3 class="m-0 text-base font-semibold text-gray-900">{{ title }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ message }}</p>
            <div class="mt-4 flex justify-end gap-2">
                <button
                    type="button"
                    class="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    @click="emit('cancel')"
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    class="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                    @click="emit('confirm')"
                >
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>
