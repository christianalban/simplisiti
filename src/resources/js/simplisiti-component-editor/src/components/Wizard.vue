<script setup lang="ts">
import { PropType, defineAsyncComponent, onMounted, ref, shallowReactive } from 'vue';
import { aliasFromTagName } from '../enginge/helpers/HtmlAlias';
import { WizardComponent } from '../enginge/constants/WizardPages';

const { element } = defineProps({
    element: {
        type: HTMLElement as PropType<HTMLElement>,
        required: true,
    }
});

const availableTabs = shallowReactive<WizardComponent[]>([]);

const getAvailabeTabs = async () => {
    const availableWizard = aliasFromTagName(element.tagName.toLowerCase());

    for (const wizard of availableWizard) {
        availableTabs.push({
            component: defineAsyncComponent(wizard.component),
            icon: wizard.icon,
        });
    }
};

onMounted(async () => {
    await getAvailabeTabs()
});

</script>

<template>
    <div class="sp-wizard-popup__tabs-container">
        <div class="sp-wizard-popup__tabs">
            
        </div>
    </div>
    <div class="sp-wizard-popup__content">
        <div class="sp-wizard-popup__content-header" v-for="availableTab of availableTabs">
            <component :is="availableTab.component"></component>
        </div>
    </div>
</template>

<style scoped>

</style>
