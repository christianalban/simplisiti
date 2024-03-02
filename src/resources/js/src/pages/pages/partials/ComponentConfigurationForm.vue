<script setup lang="ts">
import { PropType } from 'vue';
import { Component } from '../../../types/Component';
import ControlTypeSelector from '../../../components/inputs/ControlTypeSelector.vue';
import { FloatToolbarPosition } from '../../../types/FloatToolbar';

const props = defineProps({
    component: {
        type: Object as PropType<Component|null>,
    },
    position: {
        type: String as PropType<FloatToolbarPosition>,
        default: 'left',
    },
});

const emit = defineEmits(['exit', 'update:position']);

const togglePosition = () => {
    const newPosition = props.position === 'left' ? 'right' : 'left';
    emit('update:position', newPosition);
}

const restoreDefault = (component: Component, name: string) => {
    if (!component.content) {
        return;
    }
    component.content[name] = null;
}

</script>

<template>
    <div :class="`component-configuration-title ${position}`">
        <h2>{{ $t('pages.titles.componentConfigurationForm') }}</h2>
        <div>
            <div class="form-group">
                <button type="button" class="button small default" @click="$emit('exit')">
                    {{ $t('pages.buttons.exit') }}
                </button>
                <button type="button" class="button small default button-position" @click="togglePosition">
                    <fa-icon icon="border-top-left" />
                </button>
            </div>
        </div>
    </div>
    <div class="component-configuration-parameters" v-if="component">
        <div v-for="variable of component.variables" :key="variable.name">
            <div class="component-configuration-label">
                <label>{{ variable.name }}&colon;</label>
                <fa-icon class="component-configuration-set-default" icon="arrows-rotate" @click="restoreDefault(component, variable.name)"/>
            </div>
            <control-type-selector v-if="component.content" v-model="component.content[variable.name]" :default-value="variable.default" :name="variable.name" :type="variable.type"/>
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
    @apply flex gap-2;

    h2 {
        @apply font-bold text-lg pb-2;
    }

    .button-position {
        @apply -scale-x-100;
    }

    &.right {
        @apply flex-row-reverse;

        .button-position {
            @apply scale-x-100;
        }

        .form-group {
            @apply flex-row-reverse;
        }
    }
}

.component-configuration-parameters {
    @apply flex flex-col gap-2 flex-1 overflow-auto;

    .component-configuration-label {
        @apply flex gap-2 items-center;

        .component-configuration-set-default {
            @apply cursor-pointer text-xs;
        }
    }
}
</style>
