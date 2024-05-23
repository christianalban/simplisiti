<script setup lang="ts">
import { PropType } from 'vue';
import { Component } from '../../../types/Component';
import ControlTypeSelector from '../../../components/inputs/ControlTypeSelector.vue';
import { FloatToolbarPosition } from '../../../types/FloatToolbar';
import { useContentObserver } from '../../../services/ContentService.ts';

const observer = useContentObserver();

defineProps({
    component: {
        type: Object as PropType<Component|null>,
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
                <control-type-selector :editStructure="false" v-if="component.content" v-model="component.content[variable.name]" @update:model-value="emitComponentContentUpdated" :default-value="variable.default" :name="variable.name" :type="variable.type"/>
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
