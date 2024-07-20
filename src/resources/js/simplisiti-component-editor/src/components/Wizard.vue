<script setup lang="ts">
import { Component, PropType, defineAsyncComponent, onMounted, ref, shallowReactive, shallowRef } from 'vue';
import { aliasFromTagName } from '../enginge/helpers/HtmlAlias';
import { WizardComponentImported } from '../enginge/constants/WizardPages';

const { element } = defineProps({
    element: {
        type: HTMLElement as PropType<HTMLElement>,
        required: true,
    }
});

const availableTabs = shallowReactive<WizardComponentImported[]>([]);
const selectedTab = shallowRef<Component | null>(null);

const getAvailabeTabs = async () => {
    const availableWizard = aliasFromTagName(element.tagName.toLowerCase());

    for (const wizard of availableWizard) {
        availableTabs.push({
            component: defineAsyncComponent(wizard.component),
            icon: wizard.icon,
            title: wizard.title,
        });
    }
};

const selectTab = (tab: WizardComponentImported) => {
    selectedTab.value = tab.component;
};

const selectFirstTab = () => {
    if (availableTabs.length > 0) {
        selectTab(availableTabs[0]);
    }
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
                <button class="sp-wizard-popup__tab-button" :title="availableTab.title" @click="selectTab(availableTab)">
                    <fa-icon :icon="availableTab.icon" />
                </button>
            </div>
        </div>
    </div>
    <div class="sp-wizard-popup__content">
        <div class="sp-wizard-popup__content-header">
            <component :is="selectedTab"></component>
        </div>
    </div>
</template>

<style scoped>

.sp-wizard-popup__tabs-container {
    & > .sp-wizard-popup__tabs {
        display: flex;
        gap: 1rem;
    }

    .sp-wizard-popup__tab-button {
        border: none;
        background-color: #f0f0f0;
        cursor: pointer;
        padding: 0.5rem;
        margin: 0;
        transition: background-color 0.2s;

        &:hover {
            background-color: #e0e0e0;
        }
    }
}
</style>
