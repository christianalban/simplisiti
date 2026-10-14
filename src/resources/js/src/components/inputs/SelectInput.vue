<script setup lang="ts">
import { PropType } from 'vue';
import { usePages } from '../../services/PageService.ts';

const { pages } = usePages();

defineProps({
    modelValue: {
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: false,
    },
    editable: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
    required: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    data: {
        type: [Array, Object],
        default: () => [],
    },
});

const emit = defineEmits(['update:model-value']);

const emitChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    emit('update:model-value', target.value);
}

</script>

<template>
    <select class="input w-full" :name="name" :value="value" @change="emitChange($event)" :required="required" :disabled="!editable">
        <option :value="null">{{ $t('placeholders.select') }}</option>
        <option v-for="option of data" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<style scoped>
</style>
