<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { dispatchContentChange } from '../../engine/services/ElementEventDispatcherService';
import { initSupportedElements, renderStyleSupportedElements } from '../../engine/helpers/HtmlAlias';

const prompt = ref('');
const isGenerating = ref(false);

type SupportedTag = 'div' | 'a' | 'p' | 'h1' | 'img';

const HTML_TAGS: SupportedTag[] = ['div', 'a', 'p', 'h1', 'img'];

const getElements = (doc: Document): HTMLElement[] => {
    return HTML_TAGS.map((tag) => {
        return Array.from(doc.getElementsByTagName(tag));
    }).flat();
}

const compose = (html: string): string => {
    const parser = new DOMParser();

    const doc = parser.parseFromString(html, 'text/html');

    const divs: HTMLElement[] = getElements(doc);

    divs.forEach((div: HTMLElement) => {

        if (div.dataset.simplisitiid) {
            return;
        }
        div.dataset.simplisitiid = Math.random().toString(36).substring(7);
    });

    return doc.body.innerHTML;
}

const generateComponent = () => {
    const preview = document.querySelector(`[data-simplisitiid="simplisiti-component-preview"]`);
    isGenerating.value = true;
    axios.post('https://gpt-tailwind.up.railway.app/api/generate', {
        "prompt": prompt.value, 
    })
    .then(reponse => {
        if (!preview) {
            return;
        }
        const result = reponse.data.result;

        renderStyleSupportedElements(result)
            .then(() => {
                const cleanedResult = compose(result);
                dispatchContentChange('simplisiti-component-preview', cleanedResult)
                preview.innerHTML = cleanedResult;
                initSupportedElements()
                prompt.value = '';
            })
            .finally(() => {
                isGenerating.value = false;
            });
    })
    .catch(error => console.error('Error:', error));
};


</script>

<template>
    <div class="sp-element__element-content">
        <div>
            <h2 class="sp-element__title">Generador de Componentes</h2>
        </div>
        <div class="sp-element__content">
            <textarea v-model="prompt" class="sp-element__textarea" placeholder="Ingresa un prompt"></textarea>
            <button class="sp-element__button" @click="generateComponent" :disabled="isGenerating">
                <fa-icon icon="gear" class="sp-element__icon sp-element__icon-procesing" v-if="isGenerating" />
                <fa-icon icon="gears" class="sp-element__icon" v-else/>
                <span>{{ isGenerating ? 'Generando' : 'Generar' }} Componente</span>
            </button>
        </div>
    </div>   
</template>

<style scoped>
.sp-element__title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
}

.sp-element__element-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    width: 100%;
    height: 100%;
}

.sp-element__textarea {
    width: 100%;
    height: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    flex: 1;
}

.sp-element__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
}

.sp-element__button {
    background-color: #bfdbfe;
    width: 100%;
    padding: 5px 10px;
    transition: background-color 0.3s;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}

.sp-element__button:hover:not(:disabled) {
    background-color: #93c5fd;
}

.sp-element__icon {
    width: 14px;
    height: 14px;
}

.sp-element__icon-procesing {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
