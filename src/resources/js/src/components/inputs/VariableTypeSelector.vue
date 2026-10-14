<script setup lang="ts">
import { PropType } from 'vue';
import { VariableType } from '../../types/Variable';


defineProps({
    modelValue: {
        type: String as PropType<VariableType>,
        required: true,
    },
});

defineEmits(['update:modelValue']);

const getSelectedValue = (event: Event): string => {
    return (event.target as HTMLSelectElement).value;
};

</script>

<template>
    <select class="input" :value="modelValue" @change="$emit('update:modelValue', getSelectedValue($event))">
        <option value="text">{{ $t('components.types.text') }}</option>
        <option value="number">{{ $t('components.types.number') }}</option>
        <option value="tel">{{ $t('components.types.tel') }}</option>
        <option value="email">{{ $t('components.types.email') }}</option>
        <option value="url">{{ $t('components.types.url') }}</option>
        <option value="password">{{ $t('components.types.password') }}</option>
        <option value="checkbox">{{ $t('components.types.checkbox') }}</option>
        <option value="radio">{{ $t('components.types.radio') }}</option>
        <option value="date">{{ $t('components.types.date') }}</option>
        <option value="time">{{ $t('components.types.time') }}</option>
        <option value="datetime-local">{{ $t('components.types.datetime-local') }}</option>
        <option value="month">{{ $t('components.types.month') }}</option>
        <option value="week">{{ $t('components.types.week') }}</option>
        <option value="color">{{ $t('components.types.color') }}</option>
        <option value="select">{{ $t('components.types.select') }}</option>
        <option value="textarea">{{ $t('components.types.textarea') }}</option>
        <option value="resource">{{ $t('components.types.resource') }}</option>
        <option value="datatable">{{ $t('components.types.datatable') }}</option>
        <option value="datasource">{{ $t('components.types.datasource') }}</option>
        <option value="action">{{ $t('components.types.action') }}</option>
        <option value="page">{{ $t('components.types.page') }}</option>
        <option value="link">{{ $t('components.types.link') }}</option>
    </select>
</template>

<style scoped>
</style>
