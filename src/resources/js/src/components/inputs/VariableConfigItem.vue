<script setup lang="ts">
import { PropType, ref } from 'vue';
import { VariableType } from '../../types/Variable.ts';
import { variableHasSettings } from '../../services/VariableService.ts';
import { getComponentVariableSettings } from '../../services/VariableService.ts';
import { computed } from 'vue';
import VariableTypeSelector from "../../components/inputs/VariableTypeSelector.vue";
import ControlTypeSelector from "../../components/inputs/ControlTypeSelector.vue";
import { useRoute } from 'vue-router';
import { value } from '../../utils/helpers.ts';
import { DataTableValue } from "../../types/DataTable.ts";
import { DataSourceValue } from "../../types/DataSource.ts";
import { SettingMenu } from '../../types/Setting.ts';
import { ResourcePreset } from '../../types/Resource.ts';

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
    settings: {
        type: Array as PropType<SettingMenu[]|ResourcePreset[]>,
        default: [],
    },
    showRemove: {
        type: Boolean,
        default: true,
    },
});

const route = useRoute();
const variableName = ref(props.name);

const emit = defineEmits(['update:type', 'update:name', 'update:default', 'removeVariable', 'displaySettings']);

const hasConfigs = computed(() => {
    return variableHasSettings(props.type);
});

const removeVariable = () => {
    emit('removeVariable');
};

const displaySettings = () => {
    if (props.type === 'resource') {
        emit('displaySettings', props.settings);
    }

    if (props.type === 'datasource') {
        getComponentVariableSettings(route.params.component as string, {type: props.type, name: props.name, default: props.default})
            .then((settings) => {
                emit('displaySettings', settings.data.data);
            });
    }
};

const handleInput = (event: Event) => variableName.value = value(event.target);

</script>

<template>
    <div class="variable-config-item h-10">
        <div class="variable-grip-lines button primary flex cursor-move !px-1 items-center justify-center">
            <fa-icon icon="grip-lines" class="text-gray-500" />
        </div>
        <variable-type-selector class="w-full min-w-0" :modelValue="type" @update:modelValue="$emit('update:type', $event)"/>
        <input type="text" class="input w-full min-w-0" :value="variableName" @input="handleInput($event)" @blur="$emit('update:name', variableName)" :placeholder="$t('components.placeholders.name')" />
        <!-- inputs defaults accord selected type -->
        <div class="variable-value min-w-0 w-full overflow-hidden">
            <control-type-selector :modelValue="default" @update:modelValue="$emit('update:default', $event)" :name="name" :type="type"/>
        </div>
        <!-- inputs defaults accord selected type -->
        <!-- buttons add and remove -->
        <div class="variable-actions flex flex-col text-xs w-14">
            <button type="button" :class="['variable-button flex-1', {'bg-blue-200 text-blue-900': hasConfigs, 'bg-blue-100 text-blue-300 cursor-not-allowed': !hasConfigs}]" @click="displaySettings" :disabled="!hasConfigs">
                <fa-icon icon="gear" />
            </button>
            <button type="button" :class="['variable-button flex-1 bg-red-200 text-red-900', { 'hover:bg-red-300 cursor-pointer': showRemove, 'cursor-not-allowed': !showRemove }]" @click="removeVariable" :disabled="!showRemove">
                <fa-icon icon="minus" />
            </button>
        </div>
        <!-- buttons add and remove -->
    </div>
</template>

<style scoped>
.variable-config-item {
    @apply grid min-w-0;
    grid-template-columns: 2.25rem minmax(0, 1.1fr) minmax(0, 1fr) minmax(0, 1.6fr) 3.5rem;
}

.variable-config-item > .variable-grip-lines {
    border-radius: 0.5rem 0 0 0.5rem;
}

.variable-config-item > :nth-child(2),
.variable-config-item > :nth-child(3),
.variable-config-item > .variable-value {
    border-radius: 0;
}

.variable-value :deep(.input),
.variable-value :deep(.button) {
    border-radius: 0;
}

.variable-actions {
    overflow: hidden;
    border-radius: 0 0.5rem 0.5rem 0;
}

.variable-actions > button {
    border-radius: 0;
}

.variable-actions > button:first-child {
    border-top-right-radius: 0.5rem;
}

.variable-actions > button:last-child {
    border-bottom-right-radius: 0.5rem;
}
</style>
