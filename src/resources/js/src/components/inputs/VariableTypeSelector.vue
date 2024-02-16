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
        <option value="textarea">{{ $t('components.types.textarea') }}</option>
        <option value="resource">{{ $t('components.types.resource') }}</option>
        <option value="datatable">{{ $t('components.types.datatable') }}</option>
    </select>
</template>

<style scoped>
</style>
