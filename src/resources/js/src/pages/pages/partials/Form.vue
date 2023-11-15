<script setup lang="ts">
import { value, inputValue } from '../../../utils/helpers';
import { PropType, onMounted, ref } from 'vue';
import Draggable from 'vuedraggable'
import { Component } from '../../../types/Component';
import { Section } from '../../../types/Section';
import AvailableComponents from './AvailableComponents.vue';
import ComponentConfigurationForm from './ComponentConfigurationForm.vue';
import { PageEditionMode } from '../../../types/Page';
import { useResources } from "../../../services/ResourceService";

const { loadResources } = useResources();

const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    url: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    sections: {
        type: Array as PropType<Section[]>,
        default: () => [],
    },
});

const emit = defineEmits(['update:name', 'update:title', 'update:url', 'update:sections']);

const availableComponents = ref<Component[]>([]);

const selectedComponent = ref<Component|null>(null);
const selectedSection = ref<number|null>(null);

const pageEditionMode = ref<PageEditionMode>('adding-component');

const addSection = () => {
    emit('update:sections', [...props.sections, {order: 0, components: []}]);
};

const removeSection = (sectionIndex: number) => {
    const sections = [...props.sections];
    sections.splice(sectionIndex, 1);
    emit('update:sections', sections);
};

const removeComponent = (components: Component[], sectionIndex: number) => {
    components.splice(sectionIndex, 1);
};

const enterToEditingMode = (component: Component, sectionIndex: number) => {
    pageEditionMode.value = 'editing-component';
    selectedComponent.value = component;
    selectedSection.value = sectionIndex;
};

const exitFromEditMode = (): void => {
    pageEditionMode.value = 'adding-component';
    selectedComponent.value = null;
    selectedSection.value = null;
};

const renderHtmlComponent = (component: Component): string => {
    const html =  component.variables.reduce((html, variable) => {
        return html.replace(`{{ $${variable.name} }}`, variable.value);
    }, component.html);

    return html;
};

const isCurrentComponentSelected = (component: Component, sectionIndex: number): boolean => {
    return selectedComponent.value?.id === component.id
        && component.order === selectedComponent.value?.order
        && selectedSection.value === sectionIndex;
};

onMounted(() => {
    loadResources();
});

</script>

<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-4 col-span-1">
            <div class="flex flex-col gap-2">
                <label class="label">{{ $t('pages.labels.pageName') }}</label>
                <input class="input" type="text" required :value="name" @input="$emit('update:name', value($event.target))" :placeholder="$t('pages.placeholders.pageName')"/>
            </div>
            <available-components v-if="pageEditionMode === 'adding-component'"/>
            <component-configuration-form :component="selectedComponent" v-if="pageEditionMode === 'editing-component'" @exit="exitFromEditMode"/>
        </div>
        <div class="flex flex-col gap-4 col-span-3">
            <div class="flex gap-4">
                <div class="w-1/3 flex flex-col gap-2">
                    <label class="label">{{ $t('pages.labels.pageTitle') }}</label>
                    <input class="input" type="text" :value="title" @input="$emit('update:title', inputValue($event.target))" :placeholder="$t('pages.placeholders.pageTitle')"/>
                </div>
                <div class="w-2/3 flex flex-col gap-2">
                    <label class="label">{{ $t('pages.labels.pageUrl') }}</label>
                    <input class="input" type="text" :value="url" @input="$emit('update:url', value($event.target))" :placeholder="$t('pages.placeholders.pageUrl')"/>
                </div>
            </div>
            <h2 class="font-bold">{{ $t('pages.titles.sections') }}</h2>
            <div class="flex flex-col">
                <draggable
                    :list="sections"
                    class="flex flex-col"
                    @input="$emit('update:sections', $event)"
                    group="sections" 
                    item-key="id"
                >
                    <template #item="{element: section, index: sectionIndex}">
                        <div class="mb-4 p-4 bg-blue-100 rounded-lg cursor-move hover:bg-blue-200 relative">
                            <span class="text-blue-500">
                                #{{ (section.order = sectionIndex) + 1 }}
                            </span>
                            <button class="button danger absolute right-0 top-0 small" @click="removeSection(sectionIndex)">
                                <fa-icon icon="trash" />
                            </button>
                            <draggable 
                                class="border-2 p-4 border-blue-300 rounded-lg border-dashed flex flex-col gap-4"
                                v-model="section.components" 
                                group="components" 
                                item-key="id"
                            >
                                <template #item="{element: component, index: componentIndex}">
                                    <div :class="['tile h-24 cursor-move relative', { '!border-orange-300': isCurrentComponentSelected(component, sectionIndex) }]">
                                        <div class="form-group absolute left-0 top-0 flex">
                                            <span class="text-blue-500 mr-2">
                                                #{{ (component.order = componentIndex) + 1 }}
                                            </span>
                                            <button class="button danger small" type="button" @click="removeComponent(section.components, componentIndex)">
                                                <fa-icon icon="trash" />
                                            </button>
                                            <button class="button default small" type="button" @click="enterToEditingMode(component, sectionIndex)">
                                                <fa-icon icon="file-invoice" />
                                            </button>
                                        </div>
                                        <div class="flex flex-col w-full h-full">
                                            <label class="italic text-blue-500 cursor-move ml-auto mr-2">{{ component.name }}</label>
                                            <div v-html="renderHtmlComponent(component)"></div>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </template>
                    <p class="text-blue-900 italic text-sm pt-2">{{ $t('pages.labels.addComponentsToSection') }}</p>
                </draggable>
                <button class="button primary" @click="addSection" type="button">{{ $t('pages.buttons.addSection') }}</button>
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
