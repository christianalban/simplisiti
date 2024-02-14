<script setup lang="ts">
import { PropType } from 'vue';
import { Component } from '../../../types/Component';
import ResourcePicker from '../../../components/inputs/ResourcePicker.vue';
import DataTable from '../../../components/inputs/DataTable.vue';
import { useResources } from "../../../services/ResourceService";
import { Variable } from '../../../types/Variable';
import { DataTableValue } from '../../../types/DataTable';

const { resources } = useResources();

defineProps({
    component: {
        type: Object as PropType<Component|null>,
    },
});
defineEmits(['exit']);

const handleChangeResource = (variable: Variable, value: number): void => {
    variable.default = value;
    variable.value = resources.value.find((resource) => resource.id === value)?.url ?? '';
};

const handleChangeText = (variable: Variable, event: Event): void => {
    const value = (event.target as HTMLInputElement).value;
    variable.default = value;
    variable.value = value;
};

const handleChangeDataTable = (variable: Variable, value: DataTableValue): void => {
    variable.default = value;
};

</script>

<template>
    <div class="component-configuration-title">
        <h2>{{ $t('pages.titles.componentConfigurationForm') }}</h2>
        <button type="button" class="button small default" @click="$emit('exit')">
            {{ $t('pages.buttons.exit') }}
        </button>
    </div>
    <div class="component-configuration-parameters" v-if="component">
        <div v-for="variable of component.variables" :key="variable.name">
            <div class="flex flex-col gap-2">
                <label class="label">{{ variable.name }}&colon;</label>
                <input v-if="variable.type === 'text'" class="input" type="text" :value="variable.default" @input="handleChangeText(variable, $event)" :placeholder="variable.name"/>
                <resource-picker v-else-if="variable.type === 'resource'" :modelValue="variable.default" @update:model-value="handleChangeResource(variable, $event)" />
                <data-table v-else-if="variable.type === 'datatable'" :modelValue="variable.default" @update:model-value="handleChangeDataTable(variable, $event)"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tile {
    &.sortable-chosen {
        @apply bg-blue-100;
    }
}

.component-configuration-title {
    display: flex;
    gap: 1rem;

    h2 {
        font-weight: bold;
        font-size: 0.95rem;
        padding-bottom: 0.5rem;
    }
}

.component-configuration-parameters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    overflow: auto;
}
</style>
