<script setup lang="ts">
import { PropType } from 'vue';
import { Component } from '../../../types/Component';
import ResourcePicker from '../../../components/inputs/ResourcePicker.vue';
import { useResources } from "../../../services/ResourceService";
import { Variable } from '../../../types/Variable';

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

</script>

<template>
    <div class="flex gap-2">
        <h2 class="font-bold">{{ $t('pages.titles.componentConfigurationForm') }}</h2>
        <button type="button" class="button small default" @click="$emit('exit')">
            {{ $t('pages.buttons.exit') }}
        </button>
    </div>
    <div class="flex flex-col gap-4" v-if="component">
        <div v-for="variable of component.variables" :key="variable.name">
            <div v-if="variable.type === 'text'" class="flex flex-col gap-2">
                <label class="label">{{ variable.name }}</label>
                <input class="input" type="text" :value="variable.default" @input="handleChangeText(variable, $event)" :placeholder="variable.name"/>
            </div>
            <div v-else-if="variable.type === 'resource'" class="flex flex-col gap-2">
                <label class="label">{{ variable.name }}</label>
                <resource-picker :modelValue="variable.default" @input="handleChangeResource(variable, $event)" />
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
</style>
