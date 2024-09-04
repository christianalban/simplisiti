<script setup lang="ts">
import { onMounted, watch } from 'vue';
import ConfigurationPopUp from './components/ConfigurationPopUp.vue';
import ElementFloatingPanel from './components/ElementFloatingPanel.vue';
import { element, isElementAddingMode, isPopUpOpened } from './engine/services/ElementManagerService';
import { ElementInterface } from './engine/factories/ElementInterface';


const addEventListener = (elements: NodeList) => {
    elements.forEach((node: Node) => ElementInterface.addElementListeners(node));

    const componentPreview = document.querySelector(`[data-simplisitiid="simplisiti-component-preview"]`);
    if (componentPreview) ElementInterface.addElementListeners(componentPreview);
};

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
    const divs = document.querySelectorAll('[data-simplisitiid="simplisiti-component-preview"] div');
    const ancords = document.querySelectorAll('[data-simplisitiid="simplisiti-component-preview"] a');
    addEventListener(divs);
    addEventListener(ancords);
});
</script>

<template>
    <configuration-pop-up
        v-if="isPopUpOpened"
        :element="element"
        :type="element?.tagName"
        @close.stop="closePopUp"
    />
    <element-floating-panel />
</template>

<style>
.sp-element__active {
    cursor: pointer;
    transition: border-color 0.3s ease;
    border: 2px solid #2563eb;
}

div.sp-element__active {
    border: 2px solid #db27d2;
}

.sp-element__add-element-mode {
    div.sp-element__active {
        border-color: #0d9488;
    }
}

.sp-element__placeholder {
    padding: 5px;
    background-color: #0d9488;
    border-radius: 2.5px;
}

[data-simplisitiid="simplisiti-component-preview"]:empty {
    padding: 10px;
}
body {
    height: 100%
}
</style>
