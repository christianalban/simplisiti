<script setup lang="ts">
import { PropType, defineAsyncComponent, onMounted, ref, shallowReactive } from 'vue';
import { aliasFromTagName } from '../engine/helpers/HtmlAlias';
import { StylesProperties, StylesPropertiesList, StyleValue, WizardComponentImported } from '../engine/constants/WizardPages';
import { dispatchClassChange, dispatchContentChange, dispatchStyleChange } from '../engine/services/ElementEventDispatcherService';
import { ContentTypeValue } from '../engine/constants/Content';

const { element } = defineProps({
    element: {
        type: HTMLElement as PropType<HTMLElement>,
        required: true,
    }
});

const spClassList = ref<string[]>([]);
const spStyleList = ref<StyleValue>({});

const availableTabs = shallowReactive<WizardComponentImported[]>([]);
const selectedWizard = ref<WizardComponentImported|undefined>(undefined);

const emit = defineEmits(['tabChange']);

const getAvailabeTabs = () => {
    for (const wizard of aliasFromTagName(element.tagName.toLowerCase())) {
        availableTabs.push({
            component: defineAsyncComponent(wizard.component),
            icon: wizard.icon,
            title: wizard.title,
            tab: wizard.tab,
            spClassList: spClassList.value,
            spStyleList: spStyleList.value,
            spContent: {
                content: '',
                type: 'text',
            },
        });
    }
};

const selectTab = (tab: WizardComponentImported) => {
    selectedWizard.value = tab;
    emit('tabChange', tab.tab);
};

const selectFirstTab = () => {
    if (availableTabs.length > 0) {
        selectTab(availableTabs[0]);
    }
};

const isTabActive = (tab: WizardComponentImported) => {
    return selectedWizard.value?.tab === tab.tab;
};

const removeElementClass = (className: string): Promise<void> => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            element.classList.remove(className);
            resolve();
        }, 10);
    });
};

const addElementClass = (className: string): Promise<void> => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            element.classList.add(className);
            resolve();
        }, 10);
    });
};

const clearSpClasses = (): Promise<void> => {
    return new Promise<void>((resolve) => {
        element.classList.forEach(async (className: string) => {
            if (className.startsWith('sp-style')) {
                await removeElementClass(className);
            }
        });
        resolve();
    });
};

const addSpClasses = (classList: string[]) => {
    return new Promise<void>((resolve) => {
        classList.forEach(async (className: string) => {
            await addElementClass(className);
        });
        resolve();
    });
};

const addSpStyles = (styleList: StyleValue) => {
    return new Promise<void>((resolve) => {
        for (const style in styleList) {
            element.style.setProperty(style, styleList[style]);
        }
        resolve();
    });
};

const addSpContent = (content: ContentTypeValue) => {
    return new Promise<void>((resolve) => {
        element.innerHTML = content.content;
        resolve();
    });
};

const emitUpdateClassList = (event: string[], toUpdateWizard: WizardComponentImported) => {
    if (toUpdateWizard?.spClassList) {
        toUpdateWizard.spClassList = event;
    }
    
    const flattedSpClassList = availableTabs.flatMap((availableTab) => availableTab.spClassList);
    spClassList.value = flattedSpClassList;

    clearSpClasses()
        .then(() => {
            addSpClasses(flattedSpClassList)
            .then(() => {
                if (element.dataset.simplisitiid) {
                    dispatchClassChange(element.dataset.simplisitiid, flattedSpClassList);
                }
            });
        });
};

const emitUpdateStyleList = (event: StyleValue) => {
    if (selectedWizard.value?.spStyleList) {
        selectedWizard.value.spStyleList = event;
    }
 
    const flattedSpStyleList = availableTabs.reduce((acc, availableTab) => {
        return { ...acc, ...availableTab.spStyleList, ...event };
    }, {});
    spStyleList.value = flattedSpStyleList;

    addSpStyles(flattedSpStyleList)
        .then(() => {
            if (element.dataset.simplisitiid) {
                dispatchStyleChange(element.dataset.simplisitiid, flattedSpStyleList);
            }
        });
};

const emitUpdateContent = (event: ContentTypeValue) => {
    if (selectedWizard.value?.spContent) {
        selectedWizard.value.spContent = event;
    }
    
    addSpContent(event)
        .then(() => {
            if (element.dataset.simplisitiid) {
                if (event.type === 'text') {
                    dispatchContentChange(element.dataset.simplisitiid, event.content);
                }
            }
        });
};

const updateClassList = () => {
    spClassList.value = Array.from(element.classList).filter((className: string) => className.startsWith('sp-style'));
};

const updateStyleList = () => {
    for (let style in element.style) {
        if (StylesPropertiesList.includes(style as StylesProperties) && element.style[style] !== '') {
            spStyleList.value[style] = element.style[style];
        }
    }
};

onMounted(() => {
    updateClassList();
    updateStyleList();
    getAvailabeTabs()
    selectFirstTab();
});

</script>

<template>
    <div class="sp-wizard-popup__tabs-container">
        <div class="sp-wizard-popup__tabs">
            <div class="sp-wizard-popup__tab" v-for="availableTab of availableTabs">
                <button :class="['sp-wizard-popup__tab-button', { 'sp-wizard-popup__tab-button__active': isTabActive(availableTab) }]" :title="availableTab.title" @click="selectTab(availableTab)">
                    <fa-icon :icon="availableTab.icon" />
                </button>
            </div>
        </div>
    </div>
    <div class="sp-wizard-popup__content">
        <div class="sp-wizard-popup__content-header">
            <div v-for="availableTab of availableTabs">
                <div v-show="isTabActive(availableTab)">
                    <component
                        :is="availableTab?.component"
                        :sp-class-list="availableTab?.spClassList"
                        @update:spClassList="emitUpdateClassList($event, availableTab)"
                        :sp-style-list="availableTab?.spStyleList"
                        @update:spStyleList="emitUpdateStyleList"
                        :element="element"
                        @update:spContent="emitUpdateContent"
                    ></component>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.sp-wizard-popup__tabs-container {
    width: 215px;
    & > .sp-wizard-popup__tabs {
        display: flex;
    }

    .sp-wizard-popup__tab-button {
        border: none;
        background-color: #f0f0f0;
        cursor: pointer;
        padding: 0.5rem;
        margin: 0;
        transition: background-color 0.2s;

        &:hover,
        &.sp-wizard-popup__tab-button__active {
            background-color: #e0e0e0;
        }
    }
}
</style>
