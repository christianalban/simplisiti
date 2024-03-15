<script setup lang="ts">
import { PropType } from 'vue';
import { Variable, VariableType } from '../../types/Variable.ts';
import { variableHasSettings } from '../../services/VariableService.ts';
import { getComponentVariableSettings } from '../../services/VariableService.ts';
import { computed } from 'vue';
import VariableTypeSelector from "../../components/inputs/VariableTypeSelector.vue";
import ControlTypeSelector from "../../components/inputs/ControlTypeSelector.vue";
import { useRoute } from 'vue-router';

const props = defineProps({
    type: {
        type: String as PropType<VariableType>,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    default: {
        type: [String, Number, Object, null, undefined] as PropType<string | number | DataTableValue | DataSourceValue | null | undefined>,
        required: true,
    },
    showRemove: {
        type: Boolean,
        default: true,
    },
});

const route = useRoute();

const emit = defineEmits(['update:type', 'update:name', 'update:default', 'removeVariable', 'displaySettings']);

const hasConfigs = computed(() => {
    return variableHasSettings(props.type);
});

const removeVariable = () => {
    emit('removeVariable');
};

const displaySettings = () => {
    getComponentVariableSettings(route.params.component, {type: props.type, name: props.name, default: props.default})
        .then((settings) => {
            emit('displaySettings', settings.data.data);
        });
};

</script>

<template>
    <div class="form-group h-14">
        <variable-type-selector class="w-20" :modelValue="type" @update:modelValue="$emit('update:type', $event)"/>
        <input type="text" class="input w-32" :value="name" @input="$emit('update:name', value($event.target))" :placeholder="$t('components.placeholders.name')" />
        <!-- inputs defaults accord selected type -->
        <control-type-selector class="flex-1" :modelValue="default" @update:modelValue="$emit('update:default', $event)" :name="name" :type="type"/>
        <!-- inputs defaults accord selected type -->
        <!-- buttons add and remove -->
        <div class="flex flex-col text-xs w-14">
            <button type="button" :class="['variable-button flex-1 rounded-tr', {'bg-blue-200 text-blue-900': hasConfigs, 'bg-blue-100 text-blue-300 cursor-not-allowed': !hasConfigs}]" @click="displaySettings" :disabled="!hasConfigs">
                <fa-icon icon="gear" />
            </button>
            <button type="button" :class="['variable-button flex-1 bg-red-200 text-red-900 rounded-br ', { 'hover:bg-red-300 cursor-pointer': showRemove, 'cursor-not-allowed': !showRemove }]" @click="removeVariable" :disabled="!showRemove">
                <fa-icon icon="minus" />
            </button>
        </div>
        <!-- buttons add and remove -->
    </div>
</template>

<style scoped>
</style>
