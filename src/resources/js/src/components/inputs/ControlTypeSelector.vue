<script setup lang="ts">
import { PropType, ref, toRefs, watch } from 'vue';
import { VariableType } from '../../types/Variable';
import { DataTableValue } from '../../types/DataTable';
import ResourcePicker from './ResourcePicker.vue';
import DataTable from './DataTable.vue';

const props = defineProps({
    type: {
        type: String as PropType<VariableType>,
        required: true,
    },
    modelValue: {
        type: [String, Number, Object, null, undefined] as PropType<string | number | DataTableValue | null | undefined>,
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const emitInputValue = (value: Event) => {
    emit('update:modelValue', (value.target as HTMLInputElement).value);
};

const emitResourceValue = (value: number) => {
    emit('update:modelValue', value);
};

const emitDataTableValue = (value: DataTableValue) => {
    emit('update:modelValue', value);
};

const { type } = toRefs(props);

watch(type, () => {
    emit('update:modelValue', '');
});

</script>

<template>
    <input v-if="type === 'text'" type="text" class="input" :value="modelValue" @input="emitInputValue($event)" :placeholder="$t('components.placeholders.defaultValue')" />
    <resource-picker v-else-if="type === 'resource'" :modelValue="modelValue as number" @update:modelValue="emitResourceValue($event)"/>
    <data-table v-else-if="type === 'datatable'" :name="name" :modelValue="modelValue as DataTableValue" @update:modelValue="emitDataTableValue($event)"/>
</template>

<style scoped>
</style>
