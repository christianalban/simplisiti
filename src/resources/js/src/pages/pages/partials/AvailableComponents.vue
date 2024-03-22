<script setup lang="ts">
import { getComponents } from '../../../services/ComponentService';
import { computed, onMounted, ref } from 'vue';
import Draggable from 'vuedraggable'
import { Component, ComponentContent } from '../../../types/Component';
import Group from '../../../components/Group.vue';
import { groupItems, componentName } from '../../../utils/helpers';

const availableComponents = ref<Component[]>([]);

const componentsGroup = computed(() => {
    return groupItems(availableComponents.value);
});

const isLoading = ref(false);

const cloneComponent = (component: Component) => {
    const content: ComponentContent = {};

    component.variables.forEach((variable) => {
        content[variable.name] = null;
    });

    const clonedComponent = {
        id: component.id || 1 + 1,
        ...component,
        variables: component.variables.map((variable) => ({...variable})),
        content,
    };

    delete clonedComponent.content_id;

    return clonedComponent;
}

const loadComponents = () => {
    isLoading.value = true;
    getComponents({
        withData: true,
    })
    .then((response) => {
        availableComponents.value = response.data.data;
    })
    .finally(() => {
        isLoading.value = false;
    });
}

onMounted(() => {
    loadComponents();
});

</script>

<template>
    <button @click="loadComponents" type="button" class="button secondary">
        <fa-icon icon="sync" :class="{'animate-spin': isLoading}" />
        {{ $t('components.buttons.refresh') }}
    </button>
    <group :items="componentsGroup" v-slot="slotProps">
        <draggable 
            class="grid grid-cols-2 gap-4"
            v-model="slotProps.item" 
            :group="{ name: 'components', pull: 'clone', put: false }"
            :sort="false"
            :clone="cloneComponent"
            item-key="id">
            <template #item="{element}">
                <div class="tile h-24 cursor-pointer">
                    <label class="tile-title cursor-grab active:cursor-grabbing">
                        {{ componentName(element.name) }}
                    </label>
                </div>
            </template>
        </draggable>
    </group>
</template>

<style scoped lang="scss">
</style>
