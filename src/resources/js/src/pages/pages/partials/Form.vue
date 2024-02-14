<script setup lang="ts">
import { PropType, onMounted, onUnmounted, ref } from 'vue';
import Draggable from 'vuedraggable'
import { Component } from '../../../types/Component';
import { Section } from '../../../types/Section';
import AvailableComponents from './AvailableComponents.vue';
import ComponentConfigurationForm from './ComponentConfigurationForm.vue';
import { PageEditionMode } from '../../../types/Page';
import FloatToolbar from '../../../components/FloatToolbar.vue';
import { useResources } from "../../../services/ResourceService";
import { getResourcePreviewUrl } from "../../../services/PageService";

const { loadResources } = useResources();

const props = defineProps({
    sections: {
        type: Array as PropType<Section[]>,
        default: () => [],
    },
});

const isInvisible = ref(true);

const emit = defineEmits(['update:sections']);

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
    const html =  component.variables.reduce((html, variable) => {
        return html.replace(`{{ $${variable.name} }}`, variable.value?.toString() || '');
    }, component.html);

    return html;
};

const isCurrentComponentSelected = (component: Component, sectionIndex: number): boolean => {
    return selectedComponent.value?.id === component.id
        && component.order === selectedComponent.value?.order
        && selectedSection.value === sectionIndex;
};

const link = document.createElement('link');

const loadResourcesPreview = (): void => {
    const styleUrl = getResourcePreviewUrl('style');
    link.rel = 'stylesheet';
    link.href = styleUrl
    document.head.appendChild(link);
};

onMounted(() => {
    loadResources();
    loadResourcesPreview();
});

onUnmounted (() => {
    link && document.head.removeChild(link);
});

</script>

<template>
    <float-toolbar v-model:isInvisible="isInvisible" position="left" :showLabel="$t('pages.buttons.components')">
        <div class="component-wizard">
            <available-components v-if="pageEditionMode === 'adding-component'"/>
            <component-configuration-form :component="selectedComponent" v-if="pageEditionMode === 'editing-component'" @exit="exitFromEditMode"/>
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
                    <div class="page-sections-item-panel">
                        <draggable 
                            class="page-sections-dreaggable"
                            v-model="section.components" 
                            group="components" 
                            item-key="id"
                        >
                            <template #item="{element: component, index: componentIndex}">
                                <div :class="['page-sections-item', { 'page-sections-item-selected': isCurrentComponentSelected(component, sectionIndex) }]">
                                    <div v-autosize class="page-sections-preview">
                                        <div class="page-sections-preview-content" v-autosize v-html="renderHtmlComponent(component)"></div>
                                        <div class="page-sections-item-buttons">
                                            <span class="page-sections-label">
                                                {{ $t('pages.labels.component') }} {{ (component.order = componentIndex) + 1 }} - {{ component.name }}
                                            </span>
                                            <div class="pages-secttions-component-buttons">
                                                <button type="button" @click="removeComponent(section.components, componentIndex)">
                                                    <fa-icon icon="trash" />
                                                </button>
                                                <button type="button" @click="enterToEditingMode(component, sectionIndex)">
                                                    <fa-icon icon="file-invoice" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #header>
                                <div class="hideable-header">
                                    <p>{{ $t('pages.labels.addComponentsToSection', { section: sectionIndex + 1 }) }}</p>
                                </div>
                            </template>
                        </draggable>
                        <div class="page-sections-buttons">
                            <span class="text-blue-500 ml-2">
                                {{ $t('pages.labels.section') }} {{ (section.order = sectionIndex) + 1 }}
                            </span>
                            <fa-icon icon="grip-lines" class="page-sections-grip-lines" />
                            <button @click="removeSection(sectionIndex)">
                                <fa-icon icon="trash" />
                            </button>
                        </div>
                    </div>
                </template>
            </draggable>
            <button class="page-sections-buttons-add" @click="addSection" type="button">
                <fa-icon icon="square-plus" />
                {{ $t('pages.buttons.addSection') }}
            </button>
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
    overflow: auto;

    .page-sections-content {
        display: flex;
        flex-direction: column;

        .page-sections-panel {
            display: flex;
            flex-direction: column;

            .page-sections-item-panel {
                .page-sections-dreaggable {
                    @apply py-4 relative z-10 bg-orange-50;

                    &:hover {
                        @apply bg-orange-100;
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
                    @apply cursor-grab relative flex justify-center;

                    &:active {
                        cursor: grabbing;
                    }

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
                        }

                        .page-sections-preview-content {
                            z-index: -10;
                            @apply bg-white -z-10 border-2 border-transparent;
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

                            .page-sections-label {
                                font-style: italic;
                                padding: 0 0.25rem;
                            }
                            
                            .pages-secttions-component-buttons {
                                display: flex;
                                gap: 0.5rem;
                            }
                        }
                    }
                }

                .page-sections-buttons {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    background-color: rgb(191 219 254);

                    .page-sections-grip-lines {
                        cursor: grab;

                        &:active {
                            cursor: grabbing;
                        }
                    }
                }
            }
        }

        .page-sections-buttons-add {
            background-color: rgb(204, 251, 241);
            padding: 0.5rem;

            &:hover {
                background-color: rgb(153 246 228);
            }
        }
    }
}

.component-wizard {
    width: 20rem;
    padding: 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
