<script setup lang="ts">
import { computed, PropType } from 'vue';
import { SelectOption } from '../../../../../engine/constants/Select';
import { sizingItems, SizingType } from '../../../../../engine/constants/Spacing';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String as PropType<SizingType>,
        required: true,
    },
    sizingValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:sizingValue']);

const options = computed<SelectOption[]>(() => sizingItems(props.type));

const selectedValue = computed({
    get: () => props.sizingValue,
    set: (value: string) => emit('update:sizingValue', value),
});
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-xs font-semibold text-gray-700">{{ title }}</label>
        <select
            v-model="selectedValue"
            class="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
            <option value=""></option>
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>
