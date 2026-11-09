<script setup lang="ts">
import { computed, PropType } from 'vue';
import { SpacingBorder, SpacingConfig, spacingItems, SpacingType } from '../../../../../engine/constants/Spacing';
import { SelectOption } from '../../../../../engine/constants/Select';
const { type, spacingConfig } = defineProps({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String as PropType<SpacingType>,
        required: true,
    },
    spacingConfig: {
        type: Object as PropType<SpacingConfig>,
        default: () => ({
            top: '',
            bottom: '',
            left: '',
            right: '',
        }),
    }
});

const emit = defineEmits(['update:spacingConfig']);

const computeSpacingOptions = (spacingBorder: SpacingBorder): SelectOption[] => {
    return spacingItems((step) => `sp-style__spacing-${type}-${spacingBorder}__${step}`);
};

const upSpacingOptions = computed(() => {
    return computeSpacingOptions('top');
});

const bottomSpacingOptions = computed(() => {
    return computeSpacingOptions('bottom');
});

const leftSpacingOptions = computed(() => {
    return computeSpacingOptions('left');
});

const rightSpacingOptions = computed(() => {
    return computeSpacingOptions('right');
});

const updateSpacingConfig = () => {
    emit('update:spacingConfig', spacingConfig);
};

</script>

<template>
    <div class="space-y-2">
        <div>
            <h2 class="text-sm font-semibold text-gray-800">{{ title }}</h2>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Arriba</label>
                <select
                    v-model="spacingConfig.top"
                    class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    @change="updateSpacingConfig"
                >
                    <option value=""></option>
                    <option v-for="option in upSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Abajo</label>
                <select
                    v-model="spacingConfig.bottom"
                    class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    @change="updateSpacingConfig"
                >
                    <option value=""></option>
                    <option v-for="option in bottomSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Izquierda</label>
                <select
                    v-model="spacingConfig.left"
                    class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    @change="updateSpacingConfig"
                >
                    <option value=""></option>
                    <option v-for="option in leftSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold text-gray-700">Derecha</label>
                <select
                    v-model="spacingConfig.right"
                    class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    @change="updateSpacingConfig"
                >
                    <option value=""></option>
                    <option v-for="option in rightSpacingOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
        </div>
    </div>
</template>
