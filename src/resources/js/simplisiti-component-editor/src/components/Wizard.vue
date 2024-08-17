<script setup lang="ts">
import { PropType, defineAsyncComponent, onMounted, ref, shallowReactive } from 'vue';
import { aliasFromTagName } from '../enginge/helpers/HtmlAlias';
import { WizardComponentImported } from '../enginge/constants/WizardPages';

const { element } = defineProps({
    element: {
        type: HTMLElement as PropType<HTMLElement>,
        required: true,
    }
});

const spClassList = ref<string[]>([]);

const availableTabs = shallowReactive<WizardComponentImported[]>([]);
const selectedWizard = ref<WizardComponentImported|undefined>(undefined);

const getAvailabeTabs = () => {
    for (const wizard of aliasFromTagName(element.tagName.toLowerCase())) {
        availableTabs.push({
            component: defineAsyncComponent(wizard.component),
            icon: wizard.icon,
            title: wizard.title,
            tab: wizard.tab,
            spClassList: spClassList.value,
        });
    }
};

const selectTab = (tab: WizardComponentImported) => {
    selectedWizard.value = tab;
};

const selectFirstTab = () => {
    if (availableTabs.length > 0) {
        selectTab(availableTabs[0]);
    }
};

const isTabActive = (tab: WizardComponentImported) => {
    return selectedWizard.value?.tab === tab.tab;
};

const clearSpStyles = (): Promise<void> => {
    return new Promise<void>((resolve) => {
        element.classList.forEach((className: string) => {
            setTimeout(() => {
                if (className.startsWith('sp-style')) {
                    element.classList.remove(className);
                }
                resolve();
            }, 100);
        });
    });
};

const addSpStyles = (classList: string[]) => {
    return new Promise<void>((resolve) => {
        classList.forEach((className: string) => {
            setTimeout(() => {
                element.classList.add(className);
                resolve();
            }, 100);
        });
    });
};

const emitUpdate = (event: string[]) => {
    if (selectedWizard.value?.spClassList) {
        selectedWizard.value.spClassList = event;
    }
    
    const flattedSpClassList = availableTabs.flatMap((availableTab) => availableTab.spClassList);
    spClassList.value = flattedSpClassList;

    clearSpStyles()
        .then(() => {
            addSpStyles(flattedSpClassList)
            .then(() => {
                window.parent.document.dispatchEvent(new CustomEvent('elementChange', {
                    detail: {
                        simplisitiId: element.dataset.simplisitiid,
                        spClassList: flattedSpClassList,
                    },
                }));
            });
        });
};

const updateClassList = () => {
    spClassList.value = Array.from(element.classList).filter((className: string) => className.startsWith('sp-style'));
};

onMounted(() => {
    updateClassList();
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
            <component :is="selectedWizard?.component" @update="emitUpdate" :sp-class-list="selectedWizard?.spClassList"></component>
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
