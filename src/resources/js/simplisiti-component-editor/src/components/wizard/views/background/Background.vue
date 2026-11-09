<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue';
import { rgbaToHex } from '../../../../engine/helpers/HtmlAlias';
import { StyleValue } from '../../../../engine/constants/WizardPages';

const props = defineProps({
    spStyleList: {
        type: Object as PropType<StyleValue>,
        default: () => ({}),
    },
});

const emit = defineEmits(['update:spStyleList']);

const backgroundColor = ref('#ffffff');
const isTransparent = ref(true);

const notify = () => {
    emit('update:spStyleList', {
        'background-color': isTransparent.value ? 'transparent' : backgroundColor.value,
    });
};

const updateBackgroundColor = () => {
    isTransparent.value = false;
    notify();
};

const resetBackgroundColor = () => {
    isTransparent.value = true;
    notify();
};

onMounted(() => {
    const currentColor = props.spStyleList['background-color'];

    if (currentColor && currentColor !== 'transparent') {
        backgroundColor.value = rgbaToHex(currentColor) || backgroundColor.value;
        isTransparent.value = false;
    }
});
</script>

<template>
    <div class="space-y-3">
        <div class="flex flex-col gap-1">
            <label class="text-xs font-semibold text-gray-700">Color de fondo</label>
            <input
                v-model="backgroundColor"
                class="h-8 w-full cursor-pointer rounded-md border border-gray-300 bg-white p-1 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                type="color"
                @change="updateBackgroundColor"
            />
        </div>
        <button
            type="button"
            class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            @click="resetBackgroundColor"
        >
            Restablecer transparente
        </button>
    </div>
</template>
