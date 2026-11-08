<script setup lang="ts">
import { PropType, computed } from 'vue';

const props = defineProps({
    modelValue: {
        required: true,
    },
    type: {
        type: String as PropType<string>,
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: false,
    },
    required: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    editable: {
        type: Boolean as PropType<boolean>,
    },
    checked: {
        type: Boolean as PropType<boolean>,
    },
});

const emit = defineEmits(['update:model-value']);

const specialTypes = ['checkbox', 'radio'];

const checkedInput = computed(() => {
    return specialTypes.includes(props.type) && props.modelValue ? true : false;
});

const valueInput = computed(() => {
    return specialTypes.includes(props.type) ? '1' : props.modelValue
});

const emitInputValue = (value: Event) => {
    if (specialTypes.includes(props.type)) {
        emit('update:model-value', (value.target as HTMLInputElement).checked ? 1 : 0);
        return;
    }
    emit('update:model-value', (value.target as HTMLInputElement).value);
};

</script>

<template>
    <div v-if="!specialTypes.includes(props.type)" class="flex w-full h-full overflow-hidden">
        <input
            :type="type"
            class="input h-full w-full"
            :value="valueInput"
            @change="emitInputValue($event)"
            :placeholder="$t('components.placeholders.defaultValue')"
            :required="required"
            step='0.01'
            :disabled="!editable"
        />
    </div>
    <div v-if="specialTypes.includes(props.type)" class="flex items-center justify-center w-full h-full px-2">
        <input
            :type="type"
            class="input !w-4 !h-4"
            :value="valueInput"
            @change="emitInputValue($event)"
            :placeholder="$t('components.placeholders.defaultValue')"
            :required="required"
            :disabled="!editable"
            :checked="checkedInput"
        />
    </div>
</template>

<style scoped>
</style>
