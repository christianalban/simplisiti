<script setup lang="ts">
import { PropType, ref } from 'vue';
import { Component } from '../../../types/Component';
import ControlTypeSelector from '../../../components/inputs/ControlTypeSelector.vue';
import { FloatToolbarPosition } from '../../../types/FloatToolbar';
import { useContentObserver } from '../../../services/ContentService.ts';
import { variableHasSettings } from '../../../services/VariableService.ts';
import { getComponentVariableSettings } from '../../../services/VariableService.ts';
import VariableSettings from '../../../components/inputs/VariableSettings.vue';
import Modal from "../../../components/Modal.vue";
import { Variable } from '../../../types/Variable';
import { SettingMenu } from '../../../types/Setting';

const observer = useContentObserver();

const props =defineProps({
    component: {
        type: Object as PropType<Component|null>,
    },
    sectionId: {
        type: Number as PropType<number|null>,
    },
    position: {
        type: String as PropType<FloatToolbarPosition>,
        default: 'left',
    },
});

const emit = defineEmits(['update:position']);

const restoreDefault = (component: Component, name: string) => {
    if (!component.content) {
        return;
    }
    component.content[name] = null;
}

const selectedVariable = ref<Variable | null>(null);
const settings = ref<SettingMenu[]>([]);
const showSettings = ref(false);

const displaySettings = async (variable: Variable) => {
    if (variableHasSettings(variable.type)) {
        selectedVariable.value = variable;
        if (variable.type === 'resource') {
            settings.value = variable.applied_settings || [];
        } else {
            settings.value = variable.settings || [];
        }

        const settingsData = await getComponentVariableSettings(props.component?.id as unknown as string, {type: variable.type, name: variable.name, default: variable.default}, props.sectionId)

        variable.settings = settingsData.data.data;
        settings.value = variable.settings || [];
        showSettings.value = true;
    }
};

const emitComponentContentUpdated = () => {
    observer.update();
}

</script>

<template>
    <div class="component-configuration-parameters" v-if="component">
        <div v-for="variable of component.variables" :key="variable.name">
            <div class="component-configuration-label">
                <label>{{ variable.name }}&colon;</label>
                <fa-icon class="component-configuration-set-default" icon="arrows-rotate" @click="restoreDefault(component, variable.name)"/>
            </div>
            <div class="max-h-[4rem] flex overflow-hidden">
                <div class="form-group h-10 w-full">
                    <control-type-selector :editStructure="false" v-if="component.content" v-model="component.content[variable.name]" @update:model-value="emitComponentContentUpdated" :default-value="variable.default" :name="variable.name" :type="variable.type" @displaySettings="displaySettings(variable)"/>
                    <div class="flex flex-col text-xs w-14" v-if="variableHasSettings(variable.type)">
                        <button type="button" :class="['variable-button flex-1 rounded-r', {'bg-blue-200 text-blue-900': variableHasSettings(variable.type), 'bg-blue-100 text-blue-300 cursor-not-allowed': !variableHasSettings(variable.type)}]" @click="displaySettings(variable)" :disabled="!variableHasSettings(variable.type)">
                            <fa-icon icon="gear" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <modal :title="$t('titles.settings')" v-model:showModal="showSettings" @close="selectedVariable = null">
        <variable-settings :variable="selectedVariable" v-model:settings="settings"/>
    </modal>
</template>

<style scoped lang="scss">
.tile {
   &.sortable-chosen {
        @apply bg-blue-100;
    }
}

.component-configuration-parameters {
    @apply flex flex-col gap-2 flex-1 overflow-y-auto;

    .component-configuration-label {
        @apply flex gap-2 items-center;

        .component-configuration-set-default {
            @apply cursor-pointer text-xs;
        }
    }
}
</style>
