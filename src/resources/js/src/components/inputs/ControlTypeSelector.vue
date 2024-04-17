<script setup lang="ts">
import { PropType, toRefs, watch, computed } from 'vue';
import { VariableType } from '../../types/Variable';
import { DataTableValue } from '../../types/DataTable';
import { DataSourceValue } from '../../types/DataSource';
import ResourcePicker from './ResourcePicker.vue';
import DataTable from './DataTable.vue';
import DataSource from './DataSource.vue';
import Action from './Action.vue';
import Page from './Page.vue';

const props = defineProps({
    type: {
        type: String as PropType<VariableType>,
        required: true,
    },
    modelValue: {
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: true,
    },
    defaultValue: {
        type: [String, Number, Object, null, undefined] as PropType<string | number | DataTableValue | DataSourceValue | null | undefined>,
    },
    class: {
        type: String as PropType<string>,
    },
    editStructure: {
        type: Boolean as PropType<boolean>,
        default: true,
    }
});

const emit = defineEmits(['update:model-value']);

const emitInputValue = (value: Event) => {
    emit('update:model-value', (value.target as HTMLInputElement).value);
};

const emitResourceValue = (value: number) => {
    emit('update:model-value', value);
};

const emitDataTableValue = (value: DataTableValue) => {
    emit('update:model-value', value);
};

const emitDataSourceValue = (value: DataSourceValue) => {
    emit('update:model-value', value);
};

const emitActionValue = (value: string) => {
    emit('update:model-value', value);
};

const { type } = toRefs(props);

const value = computed(() => {
    return props.modelValue || props.defaultValue;
});

watch(type, (value) => {
    emit('update:model-value', value === 'datatable'
        ? { columns: [{name: '', type: 'text'}], rows: [[{}]] }
        : ''
    );
});

</script>

<template>
    <input v-if="type === 'text'" type="text" class="input w-full" :value="value" @input="emitInputValue($event)" :placeholder="$t('components.placeholders.defaultValue')" />
    <textarea v-if="type === 'textarea'" class="input w-full" @input="emitInputValue($event)" :placeholder="$t('components.placeholders.defaultValue')" >{{ value }}</textarea>
    <resource-picker v-else-if="type === 'resource'" :modelValue="value" @update:modelValue="emitResourceValue($event)"/>
    <data-table v-else-if="type === 'datatable'" :editStructure="editStructure" :name="name" :modelValue="value" @update:modelValue="emitDataTableValue($event)"/>
    <data-source v-else-if="type === 'datasource'" :name="name" :modelValue="value" @update:modelValue="emitDataSourceValue($event)"/>
    <action v-else-if="type === 'action'" :name="name" :modelValue="value" @update:modelValue="emitActionValue($event)"/>
    <page v-else-if="type === 'page'" :name="name" :modelValue="value" @update:modelValue="emitActionValue($event)"/>
</template>

<style scoped>
</style>
