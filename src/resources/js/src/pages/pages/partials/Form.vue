<script setup lang="ts">
import { PropType, onMounted, reactive, ref, computed } from 'vue';
import Draggable from 'vuedraggable'
import DialogComponent from "../../../components/Dialog.vue";
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
import { usePages } from '../../../services/PageService';
import { useContentObserver } from '../../../services/ContentService.ts';
import { isMobileScreen } from '../../../utils/helpers';
import { getStorage, putStorage } from '../../../services/LocalStorageService.ts';
import ConfigurationPopUp from '../../../../simplisiti-component-editor/src/components/ConfigurationPopUp.vue';

const { loadResources } = useResources();
const { loadSources } = useSources();
const { loadActions } = useActions();
const { loadPages } = usePages();

const showDialog = ref(false);
const observer = useContentObserver();

const props = defineProps({
    sections: {
        type: Array as PropType<Section[]>,
        default: () => [
            {order: 0, sp_class_list: [], sp_style_list: {}, components: []},
            {order: 1, sp_class_list: [], sp_style_list: {}, components: []}
        ],
    },
    pageEditionMode: {
        type: String as PropType<PageEditionMode>,
        default: 'adding-component',
    },
});

const isInvisible = ref(true);

const emit = defineEmits(['update:sections']);

const toDeleteComponentIndex = ref<number|null>(null);
const toDeleteComponentSection = ref<Section|null>(null);

const selectedComponent = ref<Component|null>(null);
const selectedSection = ref<number|null>(null);
const selectedSectionId = ref<number|null>(null);
const sectionConfigurationElement = ref<HTMLElement|null>(null);
const sectionConfigurationIndex = ref<number|null>(null);
const sectionElements = new Map<string, HTMLElement>();

const pageEditionMode = ref<PageEditionMode>('adding-component');

const prependSection = (index: number) => {
    const sections = [...props.sections];
    sections.splice(index, 0, reactive({
        order: 0,
        sp_class_list: [],
        sp_style_list: {},
        components: [],
    }));
    emit('update:sections', sections);
};

const appendSection = () => {
    emit('update:sections', [
        ...props.sections,
        reactive({order: 0, sp_class_list: [], sp_style_list: {}, components: []}),
    ]);
};

const removeSection = (sectionIndex: number) => {
    const sections = [...props.sections];
    sections.splice(sectionIndex, 1);
    emit('update:sections', sections);
};

const removeComponent = () => {
    toDeleteComponentSection.value?.components.splice(toDeleteComponentIndex.value || 0, 1);

    toDeleteComponentIndex.value = null;
    toDeleteComponentSection.value = null;
    selectedComponent.value = null;
};

const enterToEditingMode = (component: Component, sectionIndex: number, sectionId: number) => {
    isInvisible.value = false;
    pageEditionMode.value = 'editing-component';
    selectedComponent.value = component;
    selectedSection.value = sectionIndex;
    selectedSectionId.value = sectionId;
    observer.attach(component);
};

const exitFromEditMode = (): void => {
    isInvisible.value = true;
    pageEditionMode.value = 'adding-component';
    observer.detach();
    selectedComponent.value = null;
    selectedSection.value = null;
    selectedSectionId.value = null;
};

const isCurrentComponentSelected = (component: Component, sectionIndex: number): boolean => {
    return selectedComponent.value?.id === component.id
        && component.order === selectedComponent.value?.order
        && selectedSection.value === sectionIndex;
};

const isMobile = ref(isMobileScreen());

const position = ref<FloatToolbarPosition>(getStorage('float-toolbar-position', isMobile.value ? 'bottom' : 'left') as FloatToolbarPosition);

const togglePosition = () => {
    position.value = position.value === 'left' ? 'right' : 'left';
    putStorage('float-toolbar-position', position.value);
}

const title = computed(() => {
    return pageEditionMode.value === 'adding-component' ? 'availableComponents' : 'componentConfigurationForm';
});

const selectToBeDeletedComponent = (component: Component, componentIndex: number, section: Section) => {
    selectedComponent.value = component;
    toDeleteComponentIndex.value = componentIndex;
    toDeleteComponentSection.value = section;
    showDialog.value = true;
};

const sectionElementId = (section: Section, sectionIndex: number): string => {
    return `page-section-${section.id ?? `new-${sectionIndex}`}`;
};

const resolveSectionElement = (value: unknown): HTMLElement | null => {
    if (value instanceof HTMLElement) {
        return value;
    }

    if (value && typeof value === 'object' && '$el' in value) {
        const element = (value as { $el?: unknown }).$el;

        return element instanceof HTMLElement ? element : null;
    }

    return null;
};

const setSectionElement = (section: Section, sectionIndex: number, value: unknown) => {
    const id = sectionElementId(section, sectionIndex);
    const element = resolveSectionElement(value);

    if (element) {
        sectionElements.forEach((registeredElement, registeredId) => {
            if (registeredElement === element && registeredId !== id) {
                sectionElements.delete(registeredId);
            }
        });
        element.dataset.simplisitiid = id;
        element.dataset.sectionIndex = String(sectionIndex);
        sectionElements.set(id, element);
        return;
    }

    sectionElements.delete(id);
};

const updateSectionConfiguration = (sectionIndex: number, updates: Partial<Section>) => {
    const sections = props.sections.map((section, index) => (
        index === sectionIndex
            ? { ...section, ...updates }
            : section
    ));

    emit('update:sections', sections);
};

const sectionIndexForElement = (target: HTMLElement | null): number | null => {
    if (!target) {
        return null;
    }

    const dataIndex = Number(target.dataset.sectionIndex);
    const simplisitiId = target.dataset.simplisitiid;

    if (
        Number.isInteger(dataIndex)
        && dataIndex >= 0
        && dataIndex < props.sections.length
        && (
            !simplisitiId
            || sectionElementId(props.sections[dataIndex], dataIndex) === simplisitiId
        )
    ) {
        return dataIndex;
    }

    if (simplisitiId) {
        const index = props.sections.findIndex((section, sectionIndex) => (
            sectionElementId(section, sectionIndex) === simplisitiId
        ));

        if (index >= 0) {
            return index;
        }
    }

    return null;
};

const sectionElementForId = (simplisitiId: string): HTMLElement | null => {
    return sectionElements.get(simplisitiId)
        ?? Array.from(sectionElements.values()).find(
            (element) => element.dataset.simplisitiid === simplisitiId
        )
        ?? null;
};

const normalizeSectionClassList = (classList: unknown): string[] => {
    if (!Array.isArray(classList)) {
        return [];
    }

    return classList.filter(
        (className): className is string => (
            typeof className === 'string' && className.startsWith('sp-style__')
        )
    );
};

const normalizeSectionStyleList = (styleList: unknown): Record<string, string> => {
    if (!styleList || typeof styleList !== 'object') {
        return {};
    }

    const backgroundColor = (styleList as Record<string, unknown>)['background-color'];

    return typeof backgroundColor === 'string' && backgroundColor !== ''
        ? { 'background-color': backgroundColor }
        : {};
};

const applySectionClassList = (target: HTMLElement, classList: string[]) => {
    Array.from(target.classList)
        .filter((className) => className.startsWith('sp-style__'))
        .forEach((className) => target.classList.remove(className));

    classList.forEach((className) => target.classList.add(className));
};

const applySectionStyleList = (target: HTMLElement, styleList: Record<string, string>) => {
    const backgroundColor = styleList['background-color'];

    if (backgroundColor) {
        target.style.setProperty('background-color', backgroundColor);
        return;
    }

    target.style.removeProperty('background-color');
};

const openSectionConfiguration = (section: Section, sectionIndex: number) => {
    const target = sectionElementForId(sectionElementId(section, sectionIndex));

    if (!target) {
        return;
    }

    sectionConfigurationIndex.value = sectionIndex;
    sectionConfigurationElement.value = target;
};

const syncSectionConfiguration = () => {
    const target = sectionConfigurationElement.value;
    const index = sectionIndexForElement(target) ?? sectionConfigurationIndex.value;

    if (index === null || !target) {
        return;
    }

    updateSectionConfiguration(index, {
        sp_class_list: normalizeSectionClassList(Array.from(target.classList)),
        sp_style_list: normalizeSectionStyleList({
            'background-color': target.style.getPropertyValue('background-color'),
        }),
    });
};

const closeSectionConfiguration = () => {
    syncSectionConfiguration();
    sectionConfigurationElement.value = null;
    sectionConfigurationIndex.value = null;
};

const onSectionClassChange = ({ simplisitiId, spClassList }: {
    simplisitiId?: string;
    spClassList?: string[];
}) => {
    if (!simplisitiId) {
        return;
    }

    const target = sectionElementForId(simplisitiId);
    const index = sectionIndexForElement(target);

    if (!target || index === null || !Array.isArray(spClassList)) {
        return;
    }

    const normalizedClassList = normalizeSectionClassList(spClassList);
    applySectionClassList(target, normalizedClassList);

    updateSectionConfiguration(index, {
        sp_class_list: normalizedClassList,
    });
};

const onSectionStyleChange = ({ simplisitiId, spStyleList }: {
    simplisitiId?: string;
    spStyleList?: Record<string, string>;
}) => {
    if (!simplisitiId) {
        return;
    }

    const target = sectionElementForId(simplisitiId);
    const index = sectionIndexForElement(target);

    if (!target || index === null || typeof spStyleList !== 'object' || spStyleList === null) {
        return;
    }

    const normalizedStyleList = normalizeSectionStyleList(spStyleList);
    applySectionStyleList(target, normalizedStyleList);

    updateSectionConfiguration(index, {
        sp_style_list: normalizedStyleList,
    });
};

onMounted(() => {
    loadResources();
    loadSources();
    loadActions();
    loadPages();
});

</script>

<template>
    <float-toolbar v-model:isInvisible="isInvisible" :position="position" :showLabel="$t(pageEditionMode === 'editing-component' ? 'pages.buttons.settings' : 'pages.buttons.components')" :canResize="true">
        <div class="w-full p-4 flex flex-col h-[60vh] md:h-full">
            <div :class="`component-configuration-title ${position}`">
                <h2>{{ $t(`pages.titles.${title}`) }}</h2>
                <div>
                    <div class="form-group">
                        <button type="button" class="button small default" @click="exitFromEditMode">
                            {{ $t('pages.buttons.exit') }}
                        </button>
                        <button v-if="!isMobile" type="button" class="button small default button-position" @click="togglePosition">
                            <fa-icon icon="arrows-down-to-line" />
                        </button>
                    </div>
                </div>
            </div>
            <available-components v-if="pageEditionMode === 'adding-component'"/>
            <component-configuration-form v-model:position="position" :component="selectedComponent" v-if="pageEditionMode === 'editing-component'" :sectionId="selectedSectionId"/>
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
            >
                <template #item="{element: section, index: sectionIndex}">
                    <div :class="['page-sections-list-content', {'page-sections-list-header': !sectionIndex, 'page-sections-list-footer': sectionIndex === sections.length - 1}]">
                        <page-sections-button-add v-if="sectionIndex" @click="prependSection(sectionIndex)" />
                        <div class="page-sections-item-panel">
                            <div
                                class="page-section page-sections-dreaggable"
                                :style="section.sp_style_list"
                                :data-simplisitiid="sectionElementId(section, sectionIndex)"
                                :data-section-index="sectionIndex"
                                :ref="(element) => setSectionElement(section, sectionIndex, element)"
                            >
                                <div class="page-sections-buttons">
                                    <span v-if="!sectionIndex">
                                        <fa-icon icon="heading" />
                                        {{ $t('pages.labels.header') }}
                                    </span>
                                    <span v-else>
                                        {{ $t(sectionIndex === sections.length - 1 ? 'pages.labels.footer' :  'pages.labels.section', { section: (section.order = sectionIndex) }) }}
                                    </span>
                                    <button type="button" @click.stop="openSectionConfiguration(section, sectionIndex)">
                                        <fa-icon icon="gear" />
                                    </button>
                                    <button type="button" @click="removeSection(sectionIndex)">
                                        <fa-icon icon="trash" />
                                    </button>
                                </div>
                                <draggable
                                    v-model="section.components"
                                    group="components"
                                    item-key="id"
                                    :class="['page-section-container', section.sp_class_list]"
                                >
                                    <template #item="{element: component, index: componentIndex}">
                                        <div :class="['page-sections-item sp-component-container', { 'page-sections-item-selected': isCurrentComponentSelected(component, sectionIndex) }]">
                                            <div v-autosize class="page-sections-preview">
                                                <div class="page-sections-preview-content relative" v-autosize @click="enterToEditingMode(component, sectionIndex, section.id)">
                                                    <div class="absolute inset-0 cursor-pointer transition-colors hover:bg-yellow-400 active:bg-yellow-200 opacity-50 z-10"></div>
                                                    <component-preview :component="component" :lazy="true"/>
                                                </div>
                                                <div class="page-sections-item-buttons">
                                                    <div class="pages-secttions-component-buttons">
                                                        <button type="button" @click="selectToBeDeletedComponent(component, componentIndex, section)">
                                                            <fa-icon icon="trash" />
                                                        </button>
                                                        <router-link :to="{ name: 'components.edit', params: { component: component.id }}" target="_blank">
                                                            <fa-icon icon="edit" />
                                                        </router-link>
                                                        <span class="page-sections-label">
                                                            {{ component.name }}
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
                            </div>
                        </div>
                    </div>
                </template>
            </draggable>
            <page-sections-button-add @click="appendSection" />
        </div>
    </div>
    <configuration-pop-up
        v-if="sectionConfigurationElement"
        :element="sectionConfigurationElement"
        :show-delete-button="false"
        :dispatch-changes="false"
        @close="closeSectionConfiguration"
        @classChange="onSectionClassChange"
        @styleChange="onSectionStyleChange"
    />
    <dialog-component
        v-model:showDialog="showDialog"
        :title="$t('components.dialogs.delete.title')"
        :message="$t('components.dialogs.delete.message', { name: selectedComponent?.name })"
        @confirm="removeComponent"
    />
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
                    @apply relative z-10 bg-gray-200;

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
                                @apply border-4 border-yellow-400;
                            }
                            
                        }
                    }

                    &.page-sections-item-selected {
                        .page-sections-preview {
                            .page-sections-preview-content {
                                @apply border-4 border-yellow-400;
                            }
                        }
                    }

                    .page-sections-preview {
                        @apply flex flex-col w-full h-full sticky z-10;

                        &:hover {
                            .page-sections-preview-content {
                                @apply border-4 border-yellow-400;
                            }
                        }

                        .page-sections-preview-content {
                            @apply bg-white -z-10 border-4 border-transparent;
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
                                @apply flex gap-2;
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
        @apply -rotate-90;
    }

    &.right {
        @apply flex-row-reverse;

        .button-position {
            @apply rotate-90;
        }

        .form-group {
            @apply flex-row-reverse;
        }
    }
}

.sp-component-container {
    @apply relative w-full h-full;
}

.page-section-container {
    /* Layout */
    &.sp-style__layout-display__flex {
        display: flex !important;
        flex-direction: row !important;
    }
    &.sp-style__layout-display__grid {
        display: grid !important;
    }

    /* Aligment Flex */

    &.sp-style__layout-display__flex.sp-style__layout-justify-content__start {
        justify-content: flex-start !important;
    }

    &.sp-style__layout-display__flex.sp-style__layout-justify-content__center {
        justify-content: center !important;
    }

    &.sp-style__layout-display__flex.sp-style__layout-justify-content__end {
        justify-content: flex-end !important;
    }

    &.sp-style__layout-display__flex.sp-style__layout-justify-content__between {
        justify-content: space-between !important;
    }

    &.sp-style__layout-display__flex.sp-style__layout-align-items__start {
        align-items: flex-start !important;
    }

    &.sp-style__layout-display__flex.sp-style__layout-align-items__center {
        align-items: center !important;
    }

    &.sp-style__layout-display__flex.sp-style__layout-align-items__end {
        align-items: flex-end !important;
    }

    /* Flex Direction */

    &.sp-style__layout-display__flex.sp-style__layout-flex-direction__row {
        flex-direction: row !important;
    }

    &.sp-style__layout-display__flex.sp-style__layout-flex-direction__column {
        flex-direction: column !important;
    }

    /* Aligment Grid */

    &.sp-style__layout-display__grid.sp-style__layout-justify-content__start {
        justify-items: start !important;
    }

    &.sp-style__layout-display__grid.sp-style__layout-justify-content__center {
        justify-items: center !important;
    }

    &.sp-style__layout-display__grid.sp-style__layout-justify-content__end {
        justify-items: end !important;
    }

    &.sp-style__layout-display__grid.sp-style__layout-align-items__start {
        align-items: end !important;
    }

    &.sp-style__layout-display__grid.sp-style__layout-align-items__center {
        align-items: center !important;
    }

    &.sp-style__layout-display__grid.sp-style__layout-align-items__end {
        align-items: start !important;
    }

    /* Grid Columns and Rows */

    &.sp-style__layout-grid-template__columns-1 {
        grid-template-columns: 1fr !important;
    }

    &.sp-style__layout-grid-template__columns-2 {
        grid-template-columns: repeat(2, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-3 {
        grid-template-columns: repeat(3, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-4 {
        grid-template-columns: repeat(4, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-5 {
        grid-template-columns: repeat(5, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-6 {
        grid-template-columns: repeat(6, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-7 {
        grid-template-columns: repeat(7, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-8 {
        grid-template-columns: repeat(8, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-9 {
        grid-template-columns: repeat(9, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-10 {
        grid-template-columns: repeat(10, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-11 {
        grid-template-columns: repeat(11, 1fr) !important;
    }

    &.sp-style__layout-grid-template__columns-12 {
        grid-template-columns: repeat(12, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-1 {
        grid-template-rows: 1fr !important;
    }

    &.sp-style__layout-grid-template__rows-2 {
        grid-template-rows: repeat(2, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-3 {
        grid-template-rows: repeat(3, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-4 {
        grid-template-rows: repeat(4, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-5 {
        grid-template-rows: repeat(5, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-6 {
        grid-template-rows: repeat(6, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-7 {
        grid-template-rows: repeat(7, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-8 {
        grid-template-rows: repeat(8, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-9 {
        grid-template-rows: repeat(9, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-10 {
        grid-template-rows: repeat(10, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-11 {
        grid-template-rows: repeat(11, 1fr) !important;
    }

    &.sp-style__layout-grid-template__rows-12 {
        grid-template-rows: repeat(12, 1fr) !important;
    }

    /* Gap Spacing */

    &.sp-style__layout-gap__0 {
        gap: 0px !important;
    }

    &.sp-style__layout-gap__0_5 {
        gap: 2px !important;
    }

    &.sp-style__layout-gap__1 {
        gap: 4px !important;
    }

    &.sp-style__layout-gap__1_5 {
        gap: 6px !important;
    }

    &.sp-style__layout-gap__2 {
        gap: 8px !important;
    }

    &.sp-style__layout-gap__2_5 {
        gap: 10px !important;
    }

    &.sp-style__layout-gap__3 {
        gap: 12px !important;
    }

    &.sp-style__layout-gap__3_5 {
        gap: 14px !important;
    }

    &.sp-style__layout-gap__4 {
        gap: 16px !important;
    }

    &.sp-style__layout-gap__5 {
        gap: 20px !important;
    }

    &.sp-style__layout-gap__6 {
        gap: 24px !important;
    }

    &.sp-style__layout-gap__7 {
        gap: 28px !important;
    }

    &.sp-style__layout-gap__8 {
        gap: 32px !important;
    }

    &.sp-style__layout-gap__9 {
        gap: 36px !important;
    }

    &.sp-style__layout-gap__10 {
        gap: 40px !important;
    }

    &.sp-style__layout-gap__11 {
        gap: 44px !important;
    }

    &.sp-style__layout-gap__12 {
        gap: 48px !important;
    }

    &.sp-style__layout-gap__14 {
        gap: 56px !important;
    }

    &.sp-style__layout-gap__16 {
        gap: 64px !important;
    }

    &.sp-style__layout-gap__20 {
        gap: 80px !important;
    }

    &.sp-style__layout-gap__24 {
        gap: 96px !important;
    }

    &.sp-style__layout-gap__28 {
        gap: 112px !important;
    }

    &.sp-style__layout-gap__32 {
        gap: 128px !important;
    }

    &.sp-style__layout-gap__36 {
        gap: 144px !important;
    }

    &.sp-style__layout-gap__40 {
        gap: 160px !important;
    }

    &.sp-style__layout-gap__44 {
        gap: 176px !important;
    }

    &.sp-style__layout-gap__48 {
        gap: 192px !important;
    }

    &.sp-style__layout-gap__52 {
        gap: 208px !important;
    }

    &.sp-style__layout-gap__56 {
        gap: 224px !important;
    }

    &.sp-style__layout-gap__60 {
        gap: 240px !important;
    }

    &.sp-style__layout-gap__64 {
        gap: 256px !important;
    }

    &.sp-style__layout-gap__72 {
        gap: 288px !important;
    }

    &.sp-style__layout-gap__80 {
        gap: 320px !important;
    }

    &.sp-style__layout-gap__96 {
        gap: 384px !important;
    }

    /* Margin Left Spacing */

    &.sp-style__spacing-margin-left__0 {
        margin-left: 0px !important;
    }

    &.sp-style__spacing-margin-left__0_5 {
        margin-left: 2px !important;
    }

    &.sp-style__spacing-margin-left__1 {
        margin-left: 4px !important;
    }

    &.sp-style__spacing-margin-left__1_5 {
        margin-left: 6px !important;
    }

    &.sp-style__spacing-margin-left__2 {
        margin-left: 8px !important;
    }

    &.sp-style__spacing-margin-left__2_5 {
        margin-left: 10px !important;
    }

    &.sp-style__spacing-margin-left__3 {
        margin-left: 12px !important;
    }

    &.sp-style__spacing-margin-left__3_5 {
        margin-left: 14px !important;
    }

    &.sp-style__spacing-margin-left__4 {
        margin-left: 16px !important;
    }

    &.sp-style__spacing-margin-left__5 {
        margin-left: 20px !important;
    }

    &.sp-style__spacing-margin-left__6 {
        margin-left: 24px !important;
    }

    &.sp-style__spacing-margin-left__7 {
        margin-left: 28px !important;
    }

    &.sp-style__spacing-margin-left__8 {
        margin-left: 32px !important;
    }

    &.sp-style__spacing-margin-left__9 {
        margin-left: 36px !important;
    }

    &.sp-style__spacing-margin-left__10 {
        margin-left: 40px !important;
    }

    &.sp-style__spacing-margin-left__11 {
        margin-left: 44px !important;
    }

    &.sp-style__spacing-margin-left__12 {
        margin-left: 48px !important;
    }

    &.sp-style__spacing-margin-left__14 {
        margin-left: 56px !important;
    }

    &.sp-style__spacing-margin-left__16 {
        margin-left: 64px !important;
    }

    &.sp-style__spacing-margin-left__20 {
        margin-left: 80px !important;
    }

    &.sp-style__spacing-margin-left__24 {
        margin-left: 96px !important;
    }

    &.sp-style__spacing-margin-left__28 {
        margin-left: 112px !important;
    }

    &.sp-style__spacing-margin-left__32 {
        margin-left: 128px !important;
    }

    &.sp-style__spacing-margin-left__36 {
        margin-left: 144px !important;
    }

    &.sp-style__spacing-margin-left__40 {
        margin-left: 160px !important;
    }

    &.sp-style__spacing-margin-left__44 {
        margin-left: 176px !important;
    }

    &.sp-style__spacing-margin-left__48 {
        margin-left: 192px !important;
    }

    &.sp-style__spacing-margin-left__52 {
        margin-left: 208px !important;
    }

    &.sp-style__spacing-margin-left__56 {
        margin-left: 224px !important;
    }

    &.sp-style__spacing-margin-left__60 {
        margin-left: 240px !important;
    }

    &.sp-style__spacing-margin-left__64 {
        margin-left: 256px !important;
    }

    &.sp-style__spacing-margin-left__72 {
        margin-left: 288px !important;
    }

    &.sp-style__spacing-margin-left__80 {
        margin-left: 320px !important;
    }

    &.sp-style__spacing-margin-left__96 {
        margin-left: 384px !important;
    }

    /* Margin Right Spacing */

    &.sp-style__spacing-margin-right__0 {
        margin-right: 0px !important;
    }

    &.sp-style__spacing-margin-right__0_5 {
        margin-right: 2px !important;
    }

    &.sp-style__spacing-margin-right__1 {
        margin-right: 4px !important;
    }

    &.sp-style__spacing-margin-right__1_5 {
        margin-right: 6px !important;
    }

    &.sp-style__spacing-margin-right__2 {
        margin-right: 8px !important;
    }

    &.sp-style__spacing-margin-right__2_5 {
        margin-right: 10px !important;
    }

    &.sp-style__spacing-margin-right__3 {
        margin-right: 12px !important;
    }

    &.sp-style__spacing-margin-right__3_5 {
        margin-right: 14px !important;
    }

    &.sp-style__spacing-margin-right__4 {
        margin-right: 16px !important;
    }

    &.sp-style__spacing-margin-right__5 {
        margin-right: 20px !important;
    }

    &.sp-style__spacing-margin-right__6 {
        margin-right: 24px !important;
    }

    &.sp-style__spacing-margin-right__7 {
        margin-right: 28px !important;
    }

    &.sp-style__spacing-margin-right__8 {
        margin-right: 32px !important;
    }

    &.sp-style__spacing-margin-right__9 {
        margin-right: 36px !important;
    }

    &.sp-style__spacing-margin-right__10 {
        margin-right: 40px !important;
    }

    &.sp-style__spacing-margin-right__11 {
        margin-right: 44px !important;
    }

    &.sp-style__spacing-margin-right__12 {
        margin-right: 48px !important;
    }

    &.sp-style__spacing-margin-right__14 {
        margin-right: 56px !important;
    }

    &.sp-style__spacing-margin-right__16 {
        margin-right: 64px !important;
    }

    &.sp-style__spacing-margin-right__20 {
        margin-right: 80px !important;
    }

    &.sp-style__spacing-margin-right__24 {
        margin-right: 96px !important;
    }

    &.sp-style__spacing-margin-right__28 {
        margin-right: 112px !important;
    }

    &.sp-style__spacing-margin-right__32 {
        margin-right: 128px !important;
    }

    &.sp-style__spacing-margin-right__36 {
        margin-right: 144px !important;
    }

    &.sp-style__spacing-margin-right__40 {
        margin-right: 160px !important;
    }

    &.sp-style__spacing-margin-right__44 {
        margin-right: 176px !important;
    }

    &.sp-style__spacing-margin-right__48 {
        margin-right: 192px !important;
    }

    &.sp-style__spacing-margin-right__52 {
        margin-right: 208px !important;
    }

    &.sp-style__spacing-margin-right__56 {
        margin-right: 224px !important;
    }

    &.sp-style__spacing-margin-right__60 {
        margin-right: 240px !important;
    }

    &.sp-style__spacing-margin-right__64 {
        margin-right: 256px !important;
    }

    &.sp-style__spacing-margin-right__72 {
        margin-right: 288px !important;
    }

    &.sp-style__spacing-margin-right__80 {
        margin-right: 320px !important;
    }

    &.sp-style__spacing-margin-right__96 {
        margin-right: 384px !important;
    }

    /* Margin Top Spacing */

    &.sp-style__spacing-margin-top__0 {
        margin-top: 0px !important;
    }

    &.sp-style__spacing-margin-top__0_5 {
        margin-top: 2px !important;
    }

    &.sp-style__spacing-margin-top__1 {
        margin-top: 4px !important;
    }

    &.sp-style__spacing-margin-top__1_5 {
        margin-top: 6px !important;
    }

    &.sp-style__spacing-margin-top__2 {
        margin-top: 8px !important;
    }

    &.sp-style__spacing-margin-top__2_5 {
        margin-top: 10px !important;
    }

    &.sp-style__spacing-margin-top__3 {
        margin-top: 12px !important;
    }

    &.sp-style__spacing-margin-top__3_5 {
        margin-top: 14px !important;
    }

    &.sp-style__spacing-margin-top__4 {
        margin-top: 16px !important;
    }

    &.sp-style__spacing-margin-top__5 {
        margin-top: 20px !important;
    }

    &.sp-style__spacing-margin-top__6 {
        margin-top: 24px !important;
    }

    &.sp-style__spacing-margin-top__7 {
        margin-top: 28px !important;
    }

    &.sp-style__spacing-margin-top__8 {
        margin-top: 32px !important;
    }

    &.sp-style__spacing-margin-top__9 {
        margin-top: 36px !important;
    }

    &.sp-style__spacing-margin-top__10 {
        margin-top: 40px !important;
    }

    &.sp-style__spacing-margin-top__11 {
        margin-top: 44px !important;
    }

    &.sp-style__spacing-margin-top__12 {
        margin-top: 48px !important;
    }

    &.sp-style__spacing-margin-top__14 {
        margin-top: 56px !important;
    }

    &.sp-style__spacing-margin-top__16 {
        margin-top: 64px !important;
    }

    &.sp-style__spacing-margin-top__20 {
        margin-top: 80px !important;
    }

    &.sp-style__spacing-margin-top__24 {
        margin-top: 96px !important;
    }

    &.sp-style__spacing-margin-top__28 {
        margin-top: 112px !important;
    }

    &.sp-style__spacing-margin-top__32 {
        margin-top: 128px !important;
    }

    &.sp-style__spacing-margin-top__36 {
        margin-top: 144px !important;
    }

    &.sp-style__spacing-margin-top__40 {
        margin-top: 160px !important;
    }

    &.sp-style__spacing-margin-top__44 {
        margin-top: 176px !important;
    }

    &.sp-style__spacing-margin-top__48 {
        margin-top: 192px !important;
    }

    &.sp-style__spacing-margin-top__52 {
        margin-top: 208px !important;
    }

    &.sp-style__spacing-margin-top__56 {
        margin-top: 224px !important;
    }

    &.sp-style__spacing-margin-top__60 {
        margin-top: 240px !important;
    }

    &.sp-style__spacing-margin-top__64 {
        margin-top: 256px !important;
    }

    &.sp-style__spacing-margin-top__72 {
        margin-top: 288px !important;
    }

    &.sp-style__spacing-margin-top__80 {
        margin-top: 320px !important;
    }

    &.sp-style__spacing-margin-top__96 {
        margin-top: 384px !important;
    }

    /* Margin Bottom Spacing */

    &.sp-style__spacing-margin-bottom__0 {
        margin-bottom: 0px !important;
    }

    &.sp-style__spacing-margin-bottom__0_5 {
        margin-bottom: 2px !important;
    }

    &.sp-style__spacing-margin-bottom__1 {
        margin-bottom: 4px !important;
    }

    &.sp-style__spacing-margin-bottom__1_5 {
        margin-bottom: 6px !important;
    }

    &.sp-style__spacing-margin-bottom__2 {
        margin-bottom: 8px !important;
    }

    &.sp-style__spacing-margin-bottom__2_5 {
        margin-bottom: 10px !important;
    }

    &.sp-style__spacing-margin-bottom__3 {
        margin-bottom: 12px !important;
    }

    &.sp-style__spacing-margin-bottom__3_5 {
        margin-bottom: 14px !important;
    }

    &.sp-style__spacing-margin-bottom__4 {
        margin-bottom: 16px !important;
    }

    &.sp-style__spacing-margin-bottom__5 {
        margin-bottom: 20px !important;
    }

    &.sp-style__spacing-margin-bottom__6 {
        margin-bottom: 24px !important;
    }

    &.sp-style__spacing-margin-bottom__7 {
        margin-bottom: 28px !important;
    }

    &.sp-style__spacing-margin-bottom__8 {
        margin-bottom: 32px !important;
    }

    &.sp-style__spacing-margin-bottom__9 {
        margin-bottom: 36px !important;
    }

    &.sp-style__spacing-margin-bottom__10 {
        margin-bottom: 40px !important;
    }

    &.sp-style__spacing-margin-bottom__11 {
        margin-bottom: 44px !important;
    }

    &.sp-style__spacing-margin-bottom__12 {
        margin-bottom: 48px !important;
    }

    &.sp-style__spacing-margin-bottom__14 {
        margin-bottom: 56px !important;
    }

    &.sp-style__spacing-margin-bottom__16 {
        margin-bottom: 64px !important;
    }

    &.sp-style__spacing-margin-bottom__20 {
        margin-bottom: 80px !important;
    }

    &.sp-style__spacing-margin-bottom__24 {
        margin-bottom: 96px !important;
    }

    &.sp-style__spacing-margin-bottom__28 {
        margin-bottom: 112px !important;
    }

    &.sp-style__spacing-margin-bottom__32 {
        margin-bottom: 128px !important;
    }

    &.sp-style__spacing-margin-bottom__36 {
        margin-bottom: 144px !important;
    }

    &.sp-style__spacing-margin-bottom__40 {
        margin-bottom: 160px !important;
    }

    &.sp-style__spacing-margin-bottom__44 {
        margin-bottom: 176px !important;
    }

    &.sp-style__spacing-margin-bottom__48 {
        margin-bottom: 192px !important;
    }

    &.sp-style__spacing-margin-bottom__52 {
        margin-bottom: 208px !important;
    }

    &.sp-style__spacing-margin-bottom__56 {
        margin-bottom: 224px !important;
    }

    &.sp-style__spacing-margin-bottom__60 {
        margin-bottom: 240px !important;
    }

    &.sp-style__spacing-margin-bottom__64 {
        margin-bottom: 256px !important;
    }

    &.sp-style__spacing-margin-bottom__72 {
        margin-bottom: 288px !important;
    }

    &.sp-style__spacing-margin-bottom__80 {
        margin-bottom: 320px !important;
    }

    &.sp-style__spacing-margin-bottom__96 {
        margin-bottom: 384px !important;
    }

    /* Padding Left Spacing */

    &.sp-style__spacing-padding-left__0 {
        padding-left: 0px !important;
    }

    &.sp-style__spacing-padding-left__0_5 {
        padding-left: 2px !important;
    }

    &.sp-style__spacing-padding-left__1 {
        padding-left: 4px !important;
    }

    &.sp-style__spacing-padding-left__1_5 {
        padding-left: 6px !important;
    }

    &.sp-style__spacing-padding-left__2 {
        padding-left: 8px !important;
    }

    &.sp-style__spacing-padding-left__2_5 {
        padding-left: 10px !important;
    }

    &.sp-style__spacing-padding-left__3 {
        padding-left: 12px !important;
    }

    &.sp-style__spacing-padding-left__3_5 {
        padding-left: 14px !important;
    }

    &.sp-style__spacing-padding-left__4 {
        padding-left: 16px !important;
    }

    &.sp-style__spacing-padding-left__5 {
        padding-left: 20px !important;
    }

    &.sp-style__spacing-padding-left__6 {
        padding-left: 24px !important;
    }

    &.sp-style__spacing-padding-left__7 {
        padding-left: 28px !important;
    }

    &.sp-style__spacing-padding-left__8 {
        padding-left: 32px !important;
    }

    &.sp-style__spacing-padding-left__9 {
        padding-left: 36px !important;
    }

    &.sp-style__spacing-padding-left__10 {
        padding-left: 40px !important;
    }

    &.sp-style__spacing-padding-left__11 {
        padding-left: 44px !important;
    }

    &.sp-style__spacing-padding-left__12 {
        padding-left: 48px !important;
    }

    &.sp-style__spacing-padding-left__14 {
        padding-left: 56px !important;
    }

    &.sp-style__spacing-padding-left__16 {
        padding-left: 64px !important;
    }

    &.sp-style__spacing-padding-left__20 {
        padding-left: 80px !important;
    }

    &.sp-style__spacing-padding-left__24 {
        padding-left: 96px !important;
    }

    &.sp-style__spacing-padding-left__28 {
        padding-left: 112px !important;
    }

    &.sp-style__spacing-padding-left__32 {
        padding-left: 128px !important;
    }

    &.sp-style__spacing-padding-left__36 {
        padding-left: 144px !important;
    }

    &.sp-style__spacing-padding-left__40 {
        padding-left: 160px !important;
    }

    &.sp-style__spacing-padding-left__44 {
        padding-left: 176px !important;
    }

    &.sp-style__spacing-padding-left__48 {
        padding-left: 192px !important;
    }

    &.sp-style__spacing-padding-left__52 {
        padding-left: 208px !important;
    }

    &.sp-style__spacing-padding-left__56 {
        padding-left: 224px !important;
    }

    &.sp-style__spacing-padding-left__60 {
        padding-left: 240px !important;
    }

    &.sp-style__spacing-padding-left__64 {
        padding-left: 256px !important;
    }

    &.sp-style__spacing-padding-left__72 {
        padding-left: 288px !important;
    }

    &.sp-style__spacing-padding-left__80 {
        padding-left: 320px !important;
    }

    &.sp-style__spacing-padding-left__96 {
        padding-left: 384px !important;
    }

    /* Padding Right Spacing */

    &.sp-style__spacing-padding-right__0 {
        padding-right: 0px !important;
    }

    &.sp-style__spacing-padding-right__0_5 {
        padding-right: 2px !important;
    }

    &.sp-style__spacing-padding-right__1 {
        padding-right: 4px !important;
    }

    &.sp-style__spacing-padding-right__1_5 {
        padding-right: 6px !important;
    }

    &.sp-style__spacing-padding-right__2 {
        padding-right: 8px !important;
    }

    &.sp-style__spacing-padding-right__2_5 {
        padding-right: 10px !important;
    }

    &.sp-style__spacing-padding-right__3 {
        padding-right: 12px !important;
    }

    &.sp-style__spacing-padding-right__3_5 {
        padding-right: 14px !important;
    }

    &.sp-style__spacing-padding-right__4 {
        padding-right: 16px !important;
    }

    &.sp-style__spacing-padding-right__5 {
        padding-right: 20px !important;
    }

    &.sp-style__spacing-padding-right__6 {
        padding-right: 24px !important;
    }

    &.sp-style__spacing-padding-right__7 {
        padding-right: 28px !important;
    }

    &.sp-style__spacing-padding-right__8 {
        padding-right: 32px !important;
    }

    &.sp-style__spacing-padding-right__9 {
        padding-right: 36px !important;
    }

    &.sp-style__spacing-padding-right__10 {
        padding-right: 40px !important;
    }

    &.sp-style__spacing-padding-right__11 {
        padding-right: 44px !important;
    }

    &.sp-style__spacing-padding-right__12 {
        padding-right: 48px !important;
    }

    &.sp-style__spacing-padding-right__14 {
        padding-right: 56px !important;
    }

    &.sp-style__spacing-padding-right__16 {
        padding-right: 64px !important;
    }

    &.sp-style__spacing-padding-right__20 {
        padding-right: 80px !important;
    }

    &.sp-style__spacing-padding-right__24 {
        padding-right: 96px !important;
    }

    &.sp-style__spacing-padding-right__28 {
        padding-right: 112px !important;
    }

    &.sp-style__spacing-padding-right__32 {
        padding-right: 128px !important;
    }

    &.sp-style__spacing-padding-right__36 {
        padding-right: 144px !important;
    }

    &.sp-style__spacing-padding-right__40 {
        padding-right: 160px !important;
    }

    &.sp-style__spacing-padding-right__44 {
        padding-right: 176px !important;
    }

    &.sp-style__spacing-padding-right__48 {
        padding-right: 192px !important;
    }

    &.sp-style__spacing-padding-right__52 {
        padding-right: 208px !important;
    }

    &.sp-style__spacing-padding-right__56 {
        padding-right: 224px !important;
    }

    &.sp-style__spacing-padding-right__60 {
        padding-right: 240px !important;
    }

    &.sp-style__spacing-padding-right__64 {
        padding-right: 256px !important;
    }

    &.sp-style__spacing-padding-right__72 {
        padding-right: 288px !important;
    }

    &.sp-style__spacing-padding-right__80 {
        padding-right: 320px !important;
    }

    &.sp-style__spacing-padding-right__96 {
        padding-right: 384px !important;
    }

    /* Padding Top Spacing */

    &.sp-style__spacing-padding-top__0 {
        padding-top: 0px !important;
    }

    &.sp-style__spacing-padding-top__0_5 {
        padding-top: 2px !important;
    }

    &.sp-style__spacing-padding-top__1 {
        padding-top: 4px !important;
    }

    &.sp-style__spacing-padding-top__1_5 {
        padding-top: 6px !important;
    }

    &.sp-style__spacing-padding-top__2 {
        padding-top: 8px !important;
    }

    &.sp-style__spacing-padding-top__2_5 {
        padding-top: 10px !important;
    }

    &.sp-style__spacing-padding-top__3 {
        padding-top: 12px !important;
    }

    &.sp-style__spacing-padding-top__3_5 {
        padding-top: 14px !important;
    }

    &.sp-style__spacing-padding-top__4 {
        padding-top: 16px !important;
    }

    &.sp-style__spacing-padding-top__5 {
        padding-top: 20px !important;
    }

    &.sp-style__spacing-padding-top__6 {
        padding-top: 24px !important;
    }

    &.sp-style__spacing-padding-top__7 {
        padding-top: 28px !important;
    }

    &.sp-style__spacing-padding-top__8 {
        padding-top: 32px !important;
    }

    &.sp-style__spacing-padding-top__9 {
        padding-top: 36px !important;
    }

    &.sp-style__spacing-padding-top__10 {
        padding-top: 40px !important;
    }

    &.sp-style__spacing-padding-top__11 {
        padding-top: 44px !important;
    }

    &.sp-style__spacing-padding-top__12 {
        padding-top: 48px !important;
    }

    &.sp-style__spacing-padding-top__14 {
        padding-top: 56px !important;
    }

    &.sp-style__spacing-padding-top__16 {
        padding-top: 64px !important;
    }

    &.sp-style__spacing-padding-top__20 {
        padding-top: 80px !important;
    }

    &.sp-style__spacing-padding-top__24 {
        padding-top: 96px !important;
    }

    &.sp-style__spacing-padding-top__28 {
        padding-top: 112px !important;
    }

    &.sp-style__spacing-padding-top__32 {
        padding-top: 128px !important;
    }

    &.sp-style__spacing-padding-top__36 {
        padding-top: 144px !important;
    }

    &.sp-style__spacing-padding-top__40 {
        padding-top: 160px !important;
    }

    &.sp-style__spacing-padding-top__44 {
        padding-top: 176px !important;
    }

    &.sp-style__spacing-padding-top__48 {
        padding-top: 192px !important;
    }

    &.sp-style__spacing-padding-top__52 {
        padding-top: 208px !important;
    }

    &.sp-style__spacing-padding-top__56 {
        padding-top: 224px !important;
    }

    &.sp-style__spacing-padding-top__60 {
        padding-top: 240px !important;
    }

    &.sp-style__spacing-padding-top__64 {
        padding-top: 256px !important;
    }

    &.sp-style__spacing-padding-top__72 {
        padding-top: 288px !important;
    }

    &.sp-style__spacing-padding-top__80 {
        padding-top: 320px !important;
    }

    &.sp-style__spacing-padding-top__96 {
        padding-top: 384px !important;
    }

    /* Padding Bottom Spacing */

    &.sp-style__spacing-padding-bottom__0 {
        padding-bottom: 0px !important;
    }

    &.sp-style__spacing-padding-bottom__0_5 {
        padding-bottom: 2px !important;
    }

    &.sp-style__spacing-padding-bottom__1 {
        padding-bottom: 4px !important;
    }

    &.sp-style__spacing-padding-bottom__1_5 {
        padding-bottom: 6px !important;
    }

    &.sp-style__spacing-padding-bottom__2 {
        padding-bottom: 8px !important;
    }

    &.sp-style__spacing-padding-bottom__2_5 {
        padding-bottom: 10px !important;
    }

    &.sp-style__spacing-padding-bottom__3 {
        padding-bottom: 12px !important;
    }

    &.sp-style__spacing-padding-bottom__3_5 {
        padding-bottom: 14px !important;
    }

    &.sp-style__spacing-padding-bottom__4 {
        padding-bottom: 16px !important;
    }

    &.sp-style__spacing-padding-bottom__5 {
        padding-bottom: 20px !important;
    }

    &.sp-style__spacing-padding-bottom__6 {
        padding-bottom: 24px !important;
    }

    &.sp-style__spacing-padding-bottom__7 {
        padding-bottom: 28px !important;
    }

    &.sp-style__spacing-padding-bottom__8 {
        padding-bottom: 32px !important;
    }

    &.sp-style__spacing-padding-bottom__9 {
        padding-bottom: 36px !important;
    }

    &.sp-style__spacing-padding-bottom__10 {
        padding-bottom: 40px !important;
    }

    &.sp-style__spacing-padding-bottom__11 {
        padding-bottom: 44px !important;
    }

    &.sp-style__spacing-padding-bottom__12 {
        padding-bottom: 48px !important;
    }

    &.sp-style__spacing-padding-bottom__14 {
        padding-bottom: 56px !important;
    }

    &.sp-style__spacing-padding-bottom__16 {
        padding-bottom: 64px !important;
    }

    &.sp-style__spacing-padding-bottom__20 {
        padding-bottom: 80px !important;
    }

    &.sp-style__spacing-padding-bottom__24 {
        padding-bottom: 96px !important;
    }

    &.sp-style__spacing-padding-bottom__28 {
        padding-bottom: 112px !important;
    }

    &.sp-style__spacing-padding-bottom__32 {
        padding-bottom: 128px !important;
    }

    &.sp-style__spacing-padding-bottom__36 {
        padding-bottom: 144px !important;
    }

    &.sp-style__spacing-padding-bottom__40 {
        padding-bottom: 160px !important;
    }

    &.sp-style__spacing-padding-bottom__44 {
        padding-bottom: 176px !important;
    }

    &.sp-style__spacing-padding-bottom__48 {
        padding-bottom: 192px !important;
    }

    &.sp-style__spacing-padding-bottom__52 {
        padding-bottom: 208px !important;
    }

    &.sp-style__spacing-padding-bottom__56 {
        padding-bottom: 224px !important;
    }

    &.sp-style__spacing-padding-bottom__60 {
        padding-bottom: 240px !important;
    }

    &.sp-style__spacing-padding-bottom__64 {
        padding-bottom: 256px !important;
    }

    &.sp-style__spacing-padding-bottom__72 {
        padding-bottom: 288px !important;
    }

    &.sp-style__spacing-padding-bottom__80 {
        padding-bottom: 320px !important;
    }

    &.sp-style__spacing-padding-bottom__96 {
        padding-bottom: 384px !important;
    }

    /* Sizing */

    /* Width Tailwind Spacing */
    &.sp-style__sizing-width__0 {
        width: 0px !important;
    }

    &.sp-style__sizing-width__0_5 {
        width: 2px !important;
    }

    &.sp-style__sizing-width__1 {
        width: 4px !important;
    }

    &.sp-style__sizing-width__1_5 {
        width: 6px !important;
    }

    &.sp-style__sizing-width__2 {
        width: 8px !important;
    }

    &.sp-style__sizing-width__2_5 {
        width: 10px !important;
    }

    &.sp-style__sizing-width__3 {
        width: 12px !important;
    }

    &.sp-style__sizing-width__3_5 {
        width: 14px !important;
    }

    &.sp-style__sizing-width__4 {
        width: 16px !important;
    }

    &.sp-style__sizing-width__5 {
        width: 20px !important;
    }

    &.sp-style__sizing-width__6 {
        width: 24px !important;
    }

    &.sp-style__sizing-width__7 {
        width: 28px !important;
    }

    &.sp-style__sizing-width__8 {
        width: 32px !important;
    }

    &.sp-style__sizing-width__9 {
        width: 36px !important;
    }

    &.sp-style__sizing-width__10 {
        width: 40px !important;
    }

    &.sp-style__sizing-width__11 {
        width: 44px !important;
    }

    &.sp-style__sizing-width__12 {
        width: 48px !important;
    }

    &.sp-style__sizing-width__14 {
        width: 56px !important;
    }

    &.sp-style__sizing-width__16 {
        width: 64px !important;
    }

    &.sp-style__sizing-width__20 {
        width: 80px !important;
    }

    &.sp-style__sizing-width__24 {
        width: 96px !important;
    }

    &.sp-style__sizing-width__28 {
        width: 112px !important;
    }

    &.sp-style__sizing-width__32 {
        width: 128px !important;
    }

    &.sp-style__sizing-width__36 {
        width: 144px !important;
    }

    &.sp-style__sizing-width__40 {
        width: 160px !important;
    }

    &.sp-style__sizing-width__44 {
        width: 176px !important;
    }

    &.sp-style__sizing-width__48 {
        width: 192px !important;
    }

    &.sp-style__sizing-width__52 {
        width: 208px !important;
    }

    &.sp-style__sizing-width__56 {
        width: 224px !important;
    }

    &.sp-style__sizing-width__60 {
        width: 240px !important;
    }

    &.sp-style__sizing-width__64 {
        width: 256px !important;
    }

    &.sp-style__sizing-width__72 {
        width: 288px !important;
    }

    &.sp-style__sizing-width__80 {
        width: 320px !important;
    }

    &.sp-style__sizing-width__96 {
        width: 384px !important;
    }

    &.sp-style__sizing-width__auto {
        width: auto !important;
    }

    &.sp-style__sizing-width__full {
        width: 100% !important;
    }

    &.sp-style__sizing-width__screen {
        width: 100vw !important;
    }

    /* Width Viewport */
    &.sp-style__sizing-width__viewport-0 {
        width: 0vw !important;
    }

    &.sp-style__sizing-width__viewport-10 {
        width: 10vw !important;
    }

    &.sp-style__sizing-width__viewport-20 {
        width: 20vw !important;
    }

    &.sp-style__sizing-width__viewport-30 {
        width: 30vw !important;
    }

    &.sp-style__sizing-width__viewport-40 {
        width: 40vw !important;
    }

    &.sp-style__sizing-width__viewport-50 {
        width: 50vw !important;
    }

    &.sp-style__sizing-width__viewport-60 {
        width: 60vw !important;
    }

    &.sp-style__sizing-width__viewport-70 {
        width: 70vw !important;
    }

    &.sp-style__sizing-width__viewport-80 {
        width: 80vw !important;
    }

    &.sp-style__sizing-width__viewport-90 {
        width: 90vw !important;
    }

    &.sp-style__sizing-width__viewport-100 {
        width: 100vw !important;
    }

    /* Height Tailwind Spacing */
    &.sp-style__sizing-height__0 {
        height: 0px !important;
    }

    &.sp-style__sizing-height__0_5 {
        height: 2px !important;
    }

    &.sp-style__sizing-height__1 {
        height: 4px !important;
    }

    &.sp-style__sizing-height__1_5 {
        height: 6px !important;
    }

    &.sp-style__sizing-height__2 {
        height: 8px !important;
    }

    &.sp-style__sizing-height__2_5 {
        height: 10px !important;
    }

    &.sp-style__sizing-height__3 {
        height: 12px !important;
    }

    &.sp-style__sizing-height__3_5 {
        height: 14px !important;
    }

    &.sp-style__sizing-height__4 {
        height: 16px !important;
    }

    &.sp-style__sizing-height__5 {
        height: 20px !important;
    }

    &.sp-style__sizing-height__6 {
        height: 24px !important;
    }

    &.sp-style__sizing-height__7 {
        height: 28px !important;
    }

    &.sp-style__sizing-height__8 {
        height: 32px !important;
    }

    &.sp-style__sizing-height__9 {
        height: 36px !important;
    }

    &.sp-style__sizing-height__10 {
        height: 40px !important;
    }

    &.sp-style__sizing-height__11 {
        height: 44px !important;
    }

    &.sp-style__sizing-height__12 {
        height: 48px !important;
    }

    &.sp-style__sizing-height__14 {
        height: 56px !important;
    }

    &.sp-style__sizing-height__16 {
        height: 64px !important;
    }

    &.sp-style__sizing-height__20 {
        height: 80px !important;
    }

    &.sp-style__sizing-height__24 {
        height: 96px !important;
    }

    &.sp-style__sizing-height__28 {
        height: 112px !important;
    }

    &.sp-style__sizing-height__32 {
        height: 128px !important;
    }

    &.sp-style__sizing-height__36 {
        height: 144px !important;
    }

    &.sp-style__sizing-height__40 {
        height: 160px !important;
    }

    &.sp-style__sizing-height__44 {
        height: 176px !important;
    }

    &.sp-style__sizing-height__48 {
        height: 192px !important;
    }

    &.sp-style__sizing-height__52 {
        height: 208px !important;
    }

    &.sp-style__sizing-height__56 {
        height: 224px !important;
    }

    &.sp-style__sizing-height__60 {
        height: 240px !important;
    }

    &.sp-style__sizing-height__64 {
        height: 256px !important;
    }

    &.sp-style__sizing-height__72 {
        height: 288px !important;
    }

    &.sp-style__sizing-height__80 {
        height: 320px !important;
    }

    &.sp-style__sizing-height__96 {
        height: 384px !important;
    }

    &.sp-style__sizing-height__auto {
        height: auto !important;
    }

    &.sp-style__sizing-height__full {
        height: 100% !important;
    }

    &.sp-style__sizing-height__screen {
        height: 100vh !important;
    }

    /* Height Viewport */
    &.sp-style__sizing-height__viewport-0 {
        height: 0vh !important;
    }

    &.sp-style__sizing-height__viewport-10 {
        height: 10vh !important;
    }

    &.sp-style__sizing-height__viewport-20 {
        height: 20vh !important;
    }

    &.sp-style__sizing-height__viewport-30 {
        height: 30vh !important;
    }

    &.sp-style__sizing-height__viewport-40 {
        height: 40vh !important;
    }

    &.sp-style__sizing-height__viewport-50 {
        height: 50vh !important;
    }

    &.sp-style__sizing-height__viewport-60 {
        height: 60vh !important;
    }

    &.sp-style__sizing-height__viewport-70 {
        height: 70vh !important;
    }

    &.sp-style__sizing-height__viewport-80 {
        height: 80vh !important;
    }

    &.sp-style__sizing-height__viewport-90 {
        height: 90vh !important;
    }

    &.sp-style__sizing-height__viewport-100 {
        height: 100vh !important;
    }
}

</style>
