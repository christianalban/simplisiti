<script setup lang="ts">
import { PropType, toRefs, watch } from 'vue';
import { VariableType } from '../../types/Variable';
import { DataTableValue } from '../../types/DataTable';
import ResourcePicker from './ResourcePicker.vue';
import DataTable from './DataTable.vue';
import DataSource from './DataSource.vue';

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
    defaultValue: {
        type: [String, Number, Object, null, undefined] as PropType<string | number | DataTableValue | null | undefined>,
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
    <input v-if="type === 'text'" type="text" class="input w-full" :value="modelValue || defaultValue" @input="emitInputValue($event)" :placeholder="$t('components.placeholders.defaultValue')" />
    <textarea v-if="type === 'textarea'" class="input w-full" @input="emitInputValue($event)" :placeholder="$t('components.placeholders.defaultValue')" >{{ modelValue || defaultValue}}</textarea>
    <resource-picker v-else-if="type === 'resource'" :modelValue="(modelValue || defaultValue) as number" @update:modelValue="emitResourceValue($event)"/>
    <data-table v-else-if="type === 'datatable'" :name="name" :modelValue="(modelValue || defaultValue) as DataTableValue" @update:modelValue="emitDataTableValue($event)"/>
    <data-source v-else-if="type === 'datasource'" :name="name" :modelValue="(modelValue || defaultValue) as DataTableValue" @update:modelValue="emitDataTableValue($event)"/>
</template>

<style scoped>
</style>
