<script setup lang="ts">
import { PropType } from 'vue';
import { useActions } from '../../services/ActionService.ts';

const { actions } = useActions();

defineProps({
    modelValue: {
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: false,
    },
});

const emit = defineEmits(['update:model-value']);

const emitChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    emit('update:model-value', target.value);
}

</script>

<template>
    <select class="input w-full" @change="emitChange" :value="modelValue">
        <option value="">{{ $t('placeholders.select') }}</option>
        <option :value="action.name" v-for="action of actions">
            {{ action.name }}
        </option>
    </select>
</template>

<style scoped>
</style>
