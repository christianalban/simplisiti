<script setup lang="ts">
import { PropType, onMounted, reactive, ref } from 'vue';
import Draggable from 'vuedraggable'
import { Component } from '../../../types/Component';
import { Section } from '../../../types/Section';
import AvailableComponents from './AvailableComponents.vue';
import ComponentConfigurationForm from './ComponentConfigurationForm.vue';
import { PageEditionMode } from '../../../types/Page';
import FloatToolbar from '../../../components/FloatToolbar.vue';
import PageSectionsButtonAdd from '../partials/PageSectionButtonAdd.vue';
import { useResources } from "../../../services/ResourceService";
import { FloatToolbarPosition } from '../../../types/FloatToolbar';
import { getValueOfType } from '../../../services/ContentService';
import { getDefaultContent } from '../../../services/ComponentService';
import SectionPreview from '../../../components/preview/SectionPreview.vue';
import { useSources } from '../../../services/DataSourceService';
import { replaceContentWithValues } from '../../../services/ContentService';

const { loadResources } = useResources();
const { loadSources } = useSources();

const props = defineProps({
    sections: {
        type: Array as PropType<Section[]>,
        default: () => [
            {order: 0, components: []},
            {order: 0, components: []}
        ],
    },
});

const isInvisible = ref(true);

const emit = defineEmits(['update:sections']);

const selectedComponent = ref<Component|null>(null);
const selectedSection = ref<number|null>(null);

const pageEditionMode = ref<PageEditionMode>('adding-component');

const prependSection = (index: number) => {
    const sections = [...props.sections];
    sections.splice(index, 0, reactive({order: 0, components: []}));
    emit('update:sections', sections);
};

const appendSection = () => {
    emit('update:sections', [...props.sections, reactive({order: 0, components: []})]);
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
    isInvisible.value = false;
    pageEditionMode.value = 'editing-component';
    selectedComponent.value = component;
    selectedSection.value = sectionIndex;
};

const exitFromEditMode = (): void => {
    isInvisible.value = true;
    pageEditionMode.value = 'adding-component';
    selectedComponent.value = null;
    selectedSection.value = null;
};

const renderHtmlComponent = (component: Component): string => {
    component.content = component.content || getDefaultContent(component);

    const html =  component.variables.reduce((html, variable) => {
        const contentValue = component.content && component.content[variable.name]
            ? component.content[variable.name]
            : component.variables.find(v => v.name === variable.name)?.default;
        const value = contentValue ? getValueOfType(variable.type, contentValue?.toString()) : '';

        let content = '';

        if (typeof value === 'string') {
            content = value;
        } else {
            content = JSON.stringify(value);
        }
        
        return replaceContentWithValues(html, variable, content || '');
    }, component.html);

    return html;
};

const isCurrentComponentSelected = (component: Component, sectionIndex: number): boolean => {
    return selectedComponent.value?.id === component.id
        && component.order === selectedComponent.value?.order
        && selectedSection.value === sectionIndex;
};

const position = ref<FloatToolbarPosition>('left');

onMounted(() => {
    loadResources();
    loadSources();
});

</script>

<template>
    <float-toolbar v-model:isInvisible="isInvisible" :position="position" :showLabel="$t('pages.buttons.components')">
        <div class="w-[30vw] p-4 h-screen flex flex-col overflow-y-auto">
            <available-components v-if="pageEditionMode === 'adding-component'"/>
            <component-configuration-form v-model:position="position" :component="selectedComponent" v-if="pageEditionMode === 'editing-component'" @exit="exitFromEditMode"/>
        </div>
    </float-toolbar>
    <div class="page-sections-container">
        <div class="page-sections-content">
            <draggable
                :list="sections"
                class="page-sections-panel"
                @input="$emit('update:sections', $event)"
                group="sections" 
                item-key="id"
                handle=".page-sections-grip-lines"
            >
                <template #item="{element: section, index: sectionIndex}">
                    <div :class="['page-sections-list-content', {'page-sections-list-header': !sectionIndex, 'page-sections-list-footer': sectionIndex === sections.length - 1}]">
                        <page-sections-button-add v-if="sectionIndex" @click="prependSection(sectionIndex)" />
                        <div class="page-sections-item-panel">
                            <draggable 
                                class="page-sections-dreaggable"
                                v-model="section.components" 
                                group="components" 
                                item-key="id"
                                handle=".page-sections-components-grip-lines"
                            >
                                <template #item="{element: component, index: componentIndex}">
                                    <div :class="['page-sections-item', { 'page-sections-item-selected': isCurrentComponentSelected(component, sectionIndex) }]">
                                        <div v-autosize class="page-sections-preview">
                                            <div class="page-sections-preview-content" v-autosize>
                                                <section-preview :content="renderHtmlComponent(component)"/>
                                            </div>
                                            <div class="page-sections-item-buttons">
                                                <button class="page-sections-components-grip-lines">
                                                    <fa-icon icon="grip" />
                                                </button>
                                                <div class="pages-secttions-component-buttons">
                                                    <button type="button" @click="removeComponent(section.components, componentIndex)">
                                                        <fa-icon icon="trash" />
                                                    </button>
                                                    <button type="button" @click="enterToEditingMode(component, sectionIndex)">
                                                        <fa-icon icon="file-invoice" />
                                                    </button>
                                                    <span class="page-sections-label">
                                                        {{ $t('pages.labels.component') }} {{ (component.order = componentIndex) + 1 }} - {{ component.name }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template #header>
                                    <div class="hideable-header">
                                        <p>{{ $t('pages.labels.addComponentsToSection', { section: sectionIndex }) }}</p>
                                    </div>
                                </template>
                            </draggable>
                            <div class="page-sections-buttons">
                                <fa-icon v-if="sectionIndex && sectionIndex !== sections.length - 1" icon="grip" class="page-sections-grip-lines" />
                                <span v-if="!sectionIndex">
                                    <fa-icon icon="heading" />
                                    {{ $t('pages.labels.header') }}
                                </span>
                                <span v-else>
                                    {{ $t(sectionIndex === sections.length - 1 ? 'pages.labels.footer' :  'pages.labels.section', { section: (section.order = sectionIndex) }) }}
                                </span>
                                <button @click="removeSection(sectionIndex)">
                                    <fa-icon icon="trash" />
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
            </draggable>
            <page-sections-button-add @click="appendSection" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.page-sections-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: fixed;
    z-index: -10;
    left: 0;
    top: 0;
    right: 0;
    max-height: 100vh;
    max-width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;

    .page-sections-content {
        display: flex;
        flex-direction: column;

        .page-sections-panel {
            display: flex;
            flex-direction: column;

            .page-sections-item-panel {
                .page-sections-dreaggable {
                    @apply py-4 relative z-10 bg-gray-200;

                    &:hover {
                        @apply bg-gray-300;
                    }
                }

                .hideable-header {
                    justify-content: center;
                    align-items: center;
                    margin: 0.5rem;
                    padding: 0.5rem;
                    border: 2px dashed rgb(234 179 8);
                }

                .hideable-header:not(:only-child){
                    display: none;
                }

                .hideable-header:only-child{
                    display: flex;
                }

                .page-sections-item {
                    @apply relative flex justify-center;

                    &:hover {
                        .page-sections-preview {
                            .page-sections-preview-content {
                                border: 2px solid rgb(234 179 8);
                            }
                            
                        }
                    }

                    &.page-sections-item-selected {
                        .page-sections-preview {
                            .page-sections-preview-content {
                                border: 2px solid rgb(234 179 8);
                            }
                        }
                    }

                    .page-sections-preview {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        height: 100%;
                        position: sticky;
                        z-index: -10;

                        &:hover {
                            .page-sections-preview-content {
                                border: 2px solid rgb(234 179 8);
                            }

                            &.minify {
                                .page-sections-label {
                                    max-width: 100vw;
                                    @apply block;
                                }
                            }
                        }

                        .page-sections-preview-content {
                            @apply bg-white -z-10 border-2 border-transparent;
                        }

                        &.minify {
                            .page-sections-label {
                                transition: max-width 0.5s;
                                @apply max-w-0 overflow-hidden;
                            }
                        }

                        .page-sections-item-buttons {
                            display: flex;
                            position: absolute;
                            top: 100%;
                            left: 2.5rem;
                            gap: 1rem;
                            z-index: 10;
                            background-color: rgb(234 179 8);
                            border-radius: 0 0 0.25rem 0.25rem;
                            padding: 0 0.25rem;

                            .page-sections-components-grip-lines {
                                @apply cursor-grab;

                                &:active {
                                    @apply cursor-grabbing;
                                }
                            }

                            .page-sections-label {
                                text-wrap: nowrap;
                                @apply italic;
                            }
                            
                            .pages-secttions-component-buttons {
                                display: flex;
                                gap: 0.5rem;
                            }
                        }
                    }
                }

                .page-sections-buttons {
                    @apply flex justify-center items-center gap-4 bg-gray-300 text-gray-500;

                    .page-sections-grip-lines {
                        @apply cursor-grab;

                        &:active {
                            @apply cursor-grabbing;
                        }
                    }
                }
            }
        }
    }
}
</style>
