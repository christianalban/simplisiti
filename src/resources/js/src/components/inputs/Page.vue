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
    }
});

const emit = defineEmits(['update:model-value']);

const emitChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    emit('update:model-value', target.value);
}

</script>

<template>
    <select class="input w-full" @change="emitChange" :value="modelValue" :disabled="!editable">
        <option value="">{{ $t('placeholders.select') }}</option>
        <option :value="page.name" v-for="page of pages">
            {{ page.title }} - {{ page.url }}
        </option>
    </select>
</template>

<style scoped>
</style>
