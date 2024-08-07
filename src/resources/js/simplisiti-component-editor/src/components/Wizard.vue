<script setup lang="ts">
import { Component, PropType, computed, defineAsyncComponent, onMounted, ref, shallowReactive, shallowRef } from 'vue';
import { aliasFromTagName } from '../enginge/helpers/HtmlAlias';
import { AvailableWizards, WizardComponentImported } from '../enginge/constants/WizardPages';

const { element } = defineProps({
    element: {
        type: HTMLElement as PropType<HTMLElement>,
        required: true,
    }
});

const availableTabs = shallowReactive<WizardComponentImported[]>([]);
const selectedTab = shallowRef<Component | undefined>(undefined);
const selectedTabWizard = ref<AvailableWizards | undefined>(undefined);

const availableWizard = computed(() => aliasFromTagName(element.tagName.toLowerCase()));

const getAvailabeTabs = async () => {
    for (const wizard of availableWizard.value) {
        availableTabs.push({
            component: defineAsyncComponent(wizard.component),
            icon: wizard.icon,
            title: wizard.title,
            tab: wizard.tab,
        });
    }
};

const selectTab = (tab: WizardComponentImported) => {
    selectedTab.value = tab.component;
    selectedTabWizard.value = tab.tab;
};

const selectFirstTab = () => {
    if (availableTabs.length > 0) {
        selectTab(availableTabs[0]);
    }
};

const isTabActive = (tab: WizardComponentImported) => {
    return selectedTabWizard.value === tab.tab;
};

const emitUpdate = (event: string[]) => {
    element.classList.forEach((className: string) => {
        setTimeout(() => {
            if (className.startsWith('sp-style')) {
                element.classList.remove(className);
            }
        }, 100);
    });
    event.forEach((className: string) => {
        setTimeout(() => {
            element.classList.add(className)
        }, 100);
    });
};

onMounted(async () => {
    await getAvailabeTabs()
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
            <component :is="selectedTab" @update="emitUpdate"></component>
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
