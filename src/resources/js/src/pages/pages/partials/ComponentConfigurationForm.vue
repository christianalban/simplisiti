<script setup lang="ts">
import { PropType } from 'vue';
import { Component } from '../../../types/Component';
import ControlTypeSelector from '../../../components/inputs/ControlTypeSelector.vue';

defineProps({
    component: {
        type: Object as PropType<Component|null>,
    },
});

defineEmits(['exit']);

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
                <control-type-selector v-model="variable.default" :name="variable.name" :type="variable.type"/>
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
