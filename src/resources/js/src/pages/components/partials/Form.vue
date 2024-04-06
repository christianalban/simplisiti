<script setup lang="ts">
import { PropType, onMounted, ref } from "vue";
import CodeEditor from "../../../components/CodeEditor.vue";
import { Variable } from "../../../types/Variable";
import { value } from '../../../utils/helpers';
import { useResources } from "../../../services/ResourceService";
import { useSources } from "../../../services/DataSourceService";
import { useActions } from "../../../services/ActionService";
import { variableHasSettings } from '../../../services/VariableService.ts';
import Modal from "../../../components/Modal.vue";
import SettingForm from '../../settings/partials/Form.vue';
import VariableConfigItem from '../../../components/inputs/VariableConfigItem.vue';
import { SettingMenu } from '../../../types/Setting';

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


const variablesExpanded = ref(window.innerWidth > 768);
const showSettings = ref(false);
const settings = ref<SettingMenu[]>([]);

const emit = defineEmits(['update:code', 'update:variables', 'update:name']);

const addVariable = () => {
    emit('update:variables', [...props.variables, {type: 'text', name: '', default: ''}]);
};

const removeVariable = (index: number) => {
    emit('update:variables', props.variables.filter((_, i) => i !== index));
};

const displaySettings = (variable: Variable, settingsMenu: SettingMenu[]) => {
    if (variableHasSettings(variable.type)) {
        settings.value = settingsMenu || [];
        variable.settings = settingsMenu;
        showSettings.value = true;
    }
};

const toggleVariablesExpanded = () => {
    variablesExpanded.value = !variablesExpanded.value;
};

onMounted(() => {
    loadResources();
    loadSources();
    loadActions();
});

</script>

<template>
    <div class="flex flex-col gap-4 flex-1 overflow-hidden">
        <div class="flex flex-col gap-2 md:w-1/3">
            <label class="label">{{ $t('components.labels.componentName') }}</label>
            <input type="text" :value="name" required @input="$emit('update:name', value($event.target))" class="input" :placeholder="$t('components.placeholders.componentName')"/>
        </div>
        <div class="flex flex-col-reverse md:flex-row gap-4 w-full flex-1 overflow-hidden py-2">
            <div class="flex-1 flex flex-col overflow-hidden">
                <h2 class="title mb-4">{{ $t('components.titles.code') }}</h2>
                <code-editor :code="props.code" @update:code="$emit('update:code', $event)" language="html"/>
            </div>
            <div :class="['flex flex-col gap-2', { 'md:w-4/12': variablesExpanded, 'w-auto': !variablesExpanded }]">
                <div class="flex gap-2">
                    <button class="button primary w-8 !p-0 aspect-square text-xs" type="button" @click="toggleVariablesExpanded">
                        <fa-icon v-if="variablesExpanded" icon="minimize" />
                        <fa-icon v-else icon="maximize" />
                    </button>
                    <h2 v-if="variablesExpanded" class="title">{{ $t('components.titles.variables') }}</h2>
                </div>
            <div v-if="variablesExpanded" class="flex flex-col flex-1 gap-2 bg-gray-100 p-2 rounded-lg overflow-y-auto max-h-[50vh]">
                    <div v-for="(variable, index) of variables" :key="variable.name">
                        <variable-config-item
                            v-model:type="variable.type"
                            v-model:name="variable.name"
                            v-model:default="variable.default"
                            :showRemove="variables.length > 1"
                            @removeVariable="removeVariable(index)"
                            @displaySettings="displaySettings(variable, $event)"
                        />
                    </div>
                </div>
                <div v-if="variablesExpanded" class="w-full mt-auto">
                    <button type="button" class="variable-button bg-teal-200 hover:bg-teal-300 text-teal-900 w-full rounded" @click="addVariable">
                        <fa-icon icon="plus" />
                        {{ $t('components.buttons.addVariable') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <modal :title="$t('titles.settings')" v-model:showModal="showSettings" :resetOnClose="false">
        <setting-form :settingMenu="settings" />
    </modal>
</template>

<style scoped>
.variable-button {
    @apply flex-1 transition-colors px-0.5;
}
</style>
