<script setup lang="ts">
import { onMounted, watch } from 'vue';
import ConfigurationPopUp from './components/ConfigurationPopUp.vue';
import ElementFloatingPanel from './components/ElementFloatingPanel.vue';
import { element, isElementAddingMode, isPopUpOpened } from './engine/services/ElementManagerService';
import { initSupportedElements, renderStyleSupportedElements } from './engine/helpers/HtmlAlias';


watch(isElementAddingMode, (value) => {
    const componentPreview = document.querySelector(`[data-simplisitiid="simplisiti-component-preview"]`);

    if (value) {
        componentPreview?.classList.add('sp-element__add-element-mode');
    } else {
        componentPreview?.classList.remove('sp-element__add-element-mode');
    }
});

const closePopUp = () => {
    if (element.value) {
        element.value.classList.remove('sp-element__active');
    }
    element.value = null;
    isPopUpOpened.value = false;
};

onMounted(() => {
    const html = document.body.innerHTML;

    renderStyleSupportedElements(html)
        .then(() => {
            initSupportedElements()
        })
});
</script>

<template>
    <div class="min-h-full font-sans text-sm text-gray-800">
        <configuration-pop-up
            v-if="isPopUpOpened"
            :element="element"
            :type="element?.tagName"
            @close.stop="closePopUp"
        />
        <element-floating-panel />
    </div>
</template>
