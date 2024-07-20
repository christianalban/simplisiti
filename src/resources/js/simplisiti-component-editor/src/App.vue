<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ConfigurationPopUp from './components/ConfigurationPopUp.vue';

const isPopUpOpened = ref(false);
const element = ref<HTMLElement | null>(null);

const addEventListener = (elements: NodeList) => {
    elements.forEach((node: Node) => {
        node.addEventListener('click', (event: Event) => {
            if (!isPopUpOpened.value) {
                isPopUpOpened.value = true;
                element.value = node as HTMLElement;
                (node as HTMLElement).classList.add('sp-element__active');
            }
            event.preventDefault();
            event.stopPropagation();
        });

        node.addEventListener('mouseover', (event: Event) => {
            if (!isPopUpOpened.value) {
                (node as HTMLElement).classList.add('sp-element__active');
            }
            event.preventDefault();
            event.stopPropagation();
        });

        node.addEventListener('mouseout', (event: Event) => {
            if (!isPopUpOpened.value) {
                (node as HTMLElement).classList.remove('sp-element__active');
            }
            event.preventDefault();
            event.stopPropagation();
        });
    });
};

const closePopUp = () => {
    if (element.value) {
        element.value.classList.remove('sp-element__active');
    }
    element.value = null;
    isPopUpOpened.value = false;
};

onMounted(() => {
    const divs = document.querySelectorAll('div');
    const ancords = document.querySelectorAll('a');
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
</template>

<style>
.sp-element__active {
    cursor: pointer;
    transition: border-color 0.3s ease;
    border: 2px solid rgb(37 99 235);
}

body {
    height: 100%
}
</style>
