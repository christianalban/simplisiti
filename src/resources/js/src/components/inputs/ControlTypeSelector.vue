<script setup lang="ts" generic="T">
import { PropType, toRefs, watch, computed } from 'vue';
import { VariableType } from '../../types/Variable';
import { Column, DataTableValue } from '../../types/DataTable';
import { DataSourceValue } from '../../types/DataSource';
import { SelectOption } from '../../types/SelectInput';
import ResourcePicker from './ResourcePicker.vue';
import DataTable from './DataTable.vue';
import TextAreaComponent from './TextArea.vue';
import DataSource from './DataSource.vue';
import Action from './Action.vue';
import Page from './Page.vue';
import SelectInput from './SelectInput.vue';
import DownloadLink from './DownloadLink.vue';
import UploadFile from './UploadFile.vue';
import { DownloadFileOptions, UploadFileOptions } from '../../types/Plugin';

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
    },
    editable: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
    data: {
        type: [Array, Object] as PropType<T | T[]>,
    },
    required: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    plugin: {
        type: String as PropType<string>,
    },
});

const emit = defineEmits(['update:model-value']);

const emitInputValue = (value: Event) => {
    if (['checkbox', 'radio'].includes(props.type)) {
        emit('update:model-value', (value.target as HTMLInputElement).checked ? 1 : 0);
        return;
    }
    emit('update:model-value', (value.target as HTMLInputElement).value);
};

const emitTextAreaValue = (value: string) => {
    emit('update:model-value', value);
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

const value = computed({
    get: () => {
        return props.modelValue || props.defaultValue;
    },
    set: (value) => {
        emit('update:model-value', value);
    },
});

const checkedInput = computed(() => {
    return ['checkbox', 'radio'].includes(props.type) && value.value ? true : false;
});

const valueInput = computed(() => {
    return ['checkbox', 'radio'].includes(props.type) ? '1' : value.value
});

const inputTypes = ['text', 'number', 'tel', 'email', 'url', 'password', 'checkbox', 'radio', 'date', 'time', 'datetime-local', 'month', 'week', 'color'];

watch(type, (value) => {
    emit('update:model-value', value === 'datatable'
        ? { columns: [{name: '', type: 'text'}], rows: [[{}]] }
        : ''
    );
});

</script>

<template>
    <input v-if="inputTypes.includes(type)" :type="type" class="input" :value="valueInput" @change="emitInputValue($event)" :placeholder="$t('components.placeholders.defaultValue')" :required="required" step='0.01' :disabled="!editable" :checked="checkedInput"/>
    <text-area-component v-else-if="type === 'textarea'" :name="name" :modelValue="value as string" @update:modelValue="emitTextAreaValue($event)" :editable="editable"/>
    <resource-picker v-else-if="type === 'resource'" :modelValue="value" @update:modelValue="emitResourceValue($event)" :editable="editable"/>
    <data-table v-else-if="type === 'datatable'" :editStructure="editStructure" :name="name" :modelValue="value" @update:modelValue="emitDataTableValue($event)" :data="data as Column"/>
    <data-source v-else-if="type === 'datasource'" :editStructure="editStructure" :name="name" :modelValue="value" @update:modelValue="emitDataSourceValue($event)" :editable="editable"/>
    <action v-else-if="type === 'action'" :name="name" :modelValue="value" @update:modelValue="emitActionValue($event)" :editable="editable"/>
    <page v-else-if="type === 'page'" :name="name" :modelValue="value" @update:modelValue="emitActionValue($event)" :editable="editable"/>
    <select-input v-else-if="type === 'select'" :name="name" :modelValue="value" @update:modelValue="emitInputValue($event)" :data="data as SelectOption[]" :required="required" :editable="editable"/>
    <download-link v-else-if="type === 'link'" :data="data as DownloadFileOptions" :plugin="plugin"/>
    <upload-file v-else-if="type === 'upload_file'" :name="name" :data="data as UploadFileOptions" :plugin="plugin"/>
</template>

<style scoped>
</style>
