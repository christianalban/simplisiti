<script setup lang="ts">
import { getComponents } from '../../../services/ComponentService';
import { computed, onMounted, ref } from 'vue';
import Draggable from 'vuedraggable'
import { Component, ComponentContent } from '../../../types/Component';
import Group from '../../../components/Group.vue';
import { groupItems, componentName } from '../../../utils/helpers';
import ComponentFloatingPreview from '../../../components/preview/ComponentFloatingPreview.vue';

const availableComponents = ref<Component[]>([]);

const componentsGroup = computed(() => {
    return groupItems(availableComponents.value);
});

const isLoading = ref(false);

const filter = ref<string>('');

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
    <input v-model="filter" type="search" class="input mt-4" :placeholder="$t('placeholders.search')" />
    <div class="overflow-y-auto mt-2">
        <group :items="componentsGroup" v-slot="slotProps" :filter="filter">
            <draggable 
                class="grid grid-cols-2 gap-4"
                v-model="slotProps.item" 
                :group="{ name: 'components', pull: 'clone', put: false }"
                :sort="false"
                :clone="cloneComponent"
                item-key="id">
                <template #item="{element, index}">
                    <div class="tile h-24 cursor-pointer flex flex-col">
                        <div class="flex items-center justify-between px-2 py-1">
                            <div class="flex flex-col">
                                <span class="font-semibold">{{ componentName(element.name) }}</span>
                            </div>
                        </div>
                        <component-floating-preview
                            :component="element" class="flex-1 tile-title cursor-pointer active:cursor-grabbing"
                            :position="index % 2 === 0 ? 'left' : 'right'"
                        />
                    </div>
                </template>
            </draggable>
        </group>
    </div>
</template>

<style scoped lang="scss">
</style>
