<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useSources } from '../../services/DataSourceService.ts';

const { sources } = useSources();

const props = defineProps({
    modelValue: {
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: false,
    },
    editStructure: {
        type: Boolean as PropType<boolean>,
        default: true,
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

const canEdit = computed(() => {
    return props.editStructure && props.editable;
});

</script>

<template>
    <div v-if="!editStructure" class="text-gray-500 mb-1 w-full h-full bg-white p-2 rounded-l">
        {{ modelValue }}
    </div>
    <select class="input w-full" @change="emitChange" :value="modelValue" v-else>
        <option value="">{{ $t('placeholders.select') }}</option>
        <option :value="source.name" v-for="source of sources">
            {{ source.name }}
        </option>
    </select>
</template>

<style scoped>
</style>
