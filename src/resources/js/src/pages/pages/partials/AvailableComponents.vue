<script setup lang="ts">
import { getComponents } from '../../../services/ComponentService';
import { onMounted, ref } from 'vue';
import Draggable from 'vuedraggable'
import { Component, ComponentContent } from '../../../types/Component';


const availableComponents = ref<Component[]>([]);

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

onMounted(() => {
    getComponents()
    .then((response) => {
        availableComponents.value = response.data.data;
    });
});

</script>

<template>
    <h2 class="font-bold">{{ $t('pages.titles.availableComponents') }}</h2>
    <draggable 
        class="grid grid-cols-2 gap-4"
        v-model="availableComponents" 
        :group="{ name: 'components', pull: 'clone', put: false }"
        :sort="false"
        :clone="cloneComponent"
        item-key="id">
        <template #item="{element}">
            <div class="tile h-24 cursor-pointer">
                <label class="tile-title cursor-pointer">{{ element.name }}</label>
            </div>
        </template>
    </draggable>
</template>

<style scoped lang="scss">
</style>
