<script setup lang="ts">
import { PropType, onMounted } from "vue";
import CodeEditor from "../../../components/CodeEditor.vue";
import { Variable } from "../../../types/Variable";
import VariableTypeSelector from "../../../components/inputs/VariableTypeSelector.vue";
import { value } from '../../../utils/helpers';
import { useResources } from "../../../services/ResourceService";
import { useSources } from "../../../services/DataSourceService";
import { useActions } from "../../../services/ActionService";
import ControlTypeSelector from "../../../components/inputs/ControlTypeSelector.vue";

const { loadResources } = useResources();
const { loadSources } = useSources();
const { loadActions } = useActions();

const props = defineProps({
    code: {
        type: String,
        default: '<div>Hello World</div>',
    },
    variables: {
        type: Array as PropType<Variable[]>,
        default: () => [{type: 'text', name: '', default: ''}],
    },
    name: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:code', 'update:variables', 'update:name']);

const addVariable = () => {
    emit('update:variables', [...props.variables, {type: 'text', name: '', default: ''}]);
};

const removeVariable = (index: number) => {
    emit('update:variables', props.variables.filter((_, i) => i !== index));
};

onMounted(() => {
    loadResources();
    loadSources();
    loadActions();
});

</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 w-1/3">
            <label class="label">{{ $t('components.labels.componentName') }}</label>
            <input type="text" :value="name" required @input="$emit('update:name', value($event.target))" class="input" :placeholder="$t('components.placeholders.componentName')"/>
        </div>
        <div class="flex gap-4 h-screen py-2">
            <div class="w-8/12">
                <h2 class="title mb-4">{{ $t('components.titles.code') }}</h2>
                <code-editor :code="props.code" @update:code="$emit('update:code', $event)" language="html"/>
            </div>
            <div class="w-4/12">
                <h2 class="title mb-4">{{ $t('components.titles.variables') }}</h2>
                <div class="flex flex-col gap-2 bg-gray-100 p-2 rounded-lg">
                    <div v-for="(variable, index) of variables" class="form-group h-14">
                        <variable-type-selector class="w-20" v-model="variable.type"/>
                        <input type="text" class="input w-40" :value="variable.name" @input="variable.name = value($event.target)" :placeholder="$t('components.placeholders.name')" />
                        <!-- inputs defaults accord selected type -->
                        <control-type-selector class="w-full" v-model="variable.default" :name="variable.name" :type="variable.type"/>
                        <!-- inputs defaults accord selected type -->
                        <!-- buttons add and remove -->
                        <div class="flex flex-col text-xs">
                            <button type="button" class="variable-button bg-blue-200 text-blue-900 rounded-tr cursor-not-allowed" @click="addVariable" disabled>
                                <fa-icon icon="gear" />
                            </button>
                            <button type="button" :class="['variable-button bg-red-200 text-red-900 rounded-br ', { 'hover:bg-red-300 cursor-pointer': variables.length > 1, 'cursor-not-allowed': variables.length <= 1 }]" @click="removeVariable(index)" :disabled="variables.length <= 1">
                                <fa-icon icon="minus" />
                            </button>
                        </div>
                        <!-- buttons add and remove -->
                    </div>
                    <div class="w-full">
                        <button type="button" class="variable-button bg-teal-200 hover:bg-teal-300 text-teal-900 w-full rounded" @click="addVariable">
                            <fa-icon icon="plus" />
                            {{ $t('components.buttons.addVariable') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.variable-button {
    @apply flex-1 transition-colors px-0.5;
}
</style>
