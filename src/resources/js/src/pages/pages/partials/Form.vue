<script setup lang="ts">
import { PropType, onMounted, reactive, ref, computed } from 'vue';
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
import ComponentPreview from '../../../components/preview/ComponentPreview.vue';
import { useSources } from '../../../services/DataSourceService';
import { useActions } from '../../../services/ActionService';
import { useContentObserver } from '../../../services/ContentService.ts';

const { loadResources } = useResources();
const { loadSources } = useSources();
const { loadActions } = useActions();

const observer = useContentObserver();

const props = defineProps({
    sections: {
        type: Array as PropType<Section[]>,
        default: () => [
            {order: 0, components: []},
            {order: 1, components: []}
        ],
    },
    pageEditionMode: {
        type: String as PropType<PageEditionMode>,
        default: 'adding-component',
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
    observer.attach(component);
};

const exitFromEditMode = (): void => {
    isInvisible.value = true;
    pageEditionMode.value = 'adding-component';
    observer.detach();
    selectedComponent.value = null;
    selectedSection.value = null;
};

const isCurrentComponentSelected = (component: Component, sectionIndex: number): boolean => {
    return selectedComponent.value?.id === component.id
        && component.order === selectedComponent.value?.order
        && selectedSection.value === sectionIndex;
};

const position = ref<FloatToolbarPosition>('left');

const togglePosition = () => {
    position.value = position.value === 'left' ? 'right' : 'left';
}

const title = computed(() => {
    return pageEditionMode.value === 'adding-component' ? 'availableComponents' : 'componentConfigurationForm';
});

onMounted(() => {
    loadResources();
    loadSources();
    loadActions();
});

</script>

<template>
    <float-toolbar v-model:isInvisible="isInvisible" :position="position" :showLabel="$t('pages.buttons.components')" :canResize="true">
        <div class="w-full p-4 h-screen flex flex-col overflow-y-auto">
            <div :class="`component-configuration-title ${position}`">
                <h2>{{ $t(`pages.titles.${title}`) }}</h2>
                <div>
                    <div class="form-group">
                        <button type="button" class="button small default" @click="exitFromEditMode">
                            {{ $t('pages.buttons.exit') }}
                        </button>
                        <button type="button" class="button small default button-position" @click="togglePosition">
                            <fa-icon icon="border-top-left" />
                        </button>
                    </div>
                </div>
            </div>
            <available-components v-if="pageEditionMode === 'adding-component'"/>
            <component-configuration-form v-model:position="position" :component="selectedComponent" v-if="pageEditionMode === 'editing-component'"/>
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
                                                <component-preview :component="component"/>
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
                                        <fa-icon icon="triangle-exclamation" />
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
    @apply flex flex-col gap-4 fixed top-0 left-0 right-0 h-screen w-full overflow-y-auto overflow-x-hidden;

    .page-sections-content {
        @apply flex flex-col;

        .page-sections-panel {
            @apply flex flex-col;

            .page-sections-item-panel {
                .page-sections-dreaggable {
                    @apply py-4 relative z-10 bg-gray-200;

                    &:hover {
                        @apply bg-gray-300;
                    }
                }

                .hideable-header {
                    @apply justify-center items-center my-1 mx-4 py-4 border-2 border-dashed border-yellow-400 italic gap-2;
                }

                .hideable-header:not(:only-child){
                    @apply hidden;
                }

                .hideable-header:only-child{
                    @apply flex;
                }

                .page-sections-item {
                    @apply relative flex justify-center;

                    &:hover {
                        .page-sections-preview {
                            .page-sections-preview-content {
                                @apply border-2 border-yellow-400;
                            }
                            
                        }
                    }

                    &.page-sections-item-selected {
                        .page-sections-preview {
                            .page-sections-preview-content {
                                @apply border-2 border-yellow-400;
                            }
                        }
                    }

                    .page-sections-preview {
                        @apply flex flex-col w-full h-full sticky z-10;

                        &:hover {
                            .page-sections-preview-content {
                                @apply border-2 border-yellow-400;
                            }
                        }

                        .page-sections-preview-content {
                            @apply bg-white -z-10 border-2 border-transparent;
                        }

                        .page-sections-item-buttons {
                            @apply flex absolute top-0 left-[2.5rem] gap-4 bg-yellow-400 z-20 rounded-b-md px-2;

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
                                @apply flex gap-1;
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

.component-configuration-title {
    @apply flex gap-2 justify-between;

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
</style>
