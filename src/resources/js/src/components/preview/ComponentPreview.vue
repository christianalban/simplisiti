<script setup lang="ts">
import { ref, onMounted, PropType, onUnmounted } from 'vue';
import { getResourcePreviewUrl, getComponentPreview, getPluginResourcePreviewUrl, getResourceEditorEngine } from "../../services/PageService.ts";
import { useContentObserver, parseComponentContent } from "../../services/ContentService.ts";
import { Component, ContentValue } from "../../types/Component.ts";
import { EditorEngine } from '../../editor-engine/EditorEngine.ts';

const observer = useContentObserver();

const editorEngine = new EditorEngine();

const props = defineProps({
    component: {
        type: Object as PropType<Component>,
        required: true,
    },
    html: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
    allowEdit: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update']);

const iframe = ref<HTMLIFrameElement | null>(null);

const resizeIframe = () => {
    if (iframe.value) {
        const doc = iframe.value.contentDocument;
        if (!doc) return;

        const bodyHeight = doc.body.offsetHeight;
        iframe.value.style.height = `${bodyHeight}px`;
    }
};

const loadResourcesEditor = (): (HTMLLinkElement|HTMLScriptElement)[] => {
    const scriptEditor = document.createElement('script');
    const styleEditor = document.createElement('link');
    const layoutEditor = document.createElement('link');
    const scriptVue = document.createElement('script');
    const scriptVueApp = document.createElement('script');

    const scriptEditorUrl = getResourceEditorEngine('script');
    const styleEditorUrl = getResourceEditorEngine('style');
    const layoutEditorUrl = getResourceEditorEngine('layout');
    const scriptVueUrl = 'https://unpkg.com/vue@3/dist/vue.global.js';

    styleEditor.rel = 'stylesheet';
    styleEditor.href = styleEditorUrl;

    layoutEditor.rel = 'stylesheet';
    layoutEditor.href = layoutEditorUrl;

    scriptVue.src = scriptVueUrl;

    scriptEditor.src = scriptEditorUrl;

    scriptVueApp.innerHTML = `
        const appContainer = document.createElement('div');
        appContainer.id = 'simplisiti-component-editor-app';
        appContainer.innerHTML = '<simplisiti-component-editor/>';
        document.body.appendChild(appContainer);
        window.addEventListener('load', () => {
            const { createApp } = Vue;
            const app = createApp({});
            app.use(SimplisitiComponentEditor);
            app.mount('#simplisiti-component-editor-app');
        });
    `;

    return [styleEditor, scriptEditor, scriptVue, scriptVueApp, layoutEditor];
};

const loadResourcesPreview = (): (HTMLLinkElement|HTMLScriptElement)[] => {
    const link = document.createElement('link');
    const script = document.createElement('script');

    const styleUrl = getResourcePreviewUrl('style');
    const scriptUrl = getResourcePreviewUrl('script');

    link.rel = 'stylesheet';
    link.href = styleUrl

    script.src = scriptUrl;
    script.async = true;

    return [link, script];
};

const loadPluginResourcesPreview = (): (HTMLLinkElement|HTMLScriptElement)[] => {
    const link = document.createElement('link');
    const script = document.createElement('script');

    const styleUrl = getPluginResourcePreviewUrl('style');
    const scriptUrl = getPluginResourcePreviewUrl('script');

    link.rel = 'stylesheet';
    link.href = styleUrl

    script.src = scriptUrl;
    script.async = true;

    return [link, script];
};

const updateIframe = async () => {
    if (!props.component.id) return;

    editorEngine.setHtmlString(props.html || props.component.html);

    const content = await editorEngine.compose().getComposedHtmlString();
    const contentContainer = document.createElement('div');
    contentContainer.dataset.simplisitiid = 'simplisiti-component-preview';
    contentContainer.innerHTML = content;

    if (iframe.value) {
        const doc = iframe.value.contentDocument;

        if (!doc) return;

        const [styleLink, scriptLink] = loadResourcesPreview();
        const [pluginStyleLink, pluginScriptLink] = loadPluginResourcesPreview();

        const metaViewport = doc.createElement('meta');
        metaViewport.name = 'viewport';
        metaViewport.content = 'width=device-width, initial-scale=1.0';

        doc.open();
        doc.write(contentContainer.outerHTML);
        doc.head.appendChild(metaViewport);
        doc.head.appendChild(styleLink);
        doc.head.appendChild(pluginStyleLink);
        doc.body.appendChild(scriptLink);
        doc.body.appendChild(pluginScriptLink);

        if (props.allowEdit) {
            const [styleEditorLink, scriptEditorLink, scriptVueLink, scriptVueAppLink, layoutEditor] = loadResourcesEditor();

            doc.head.appendChild(styleEditorLink);
            doc.head.appendChild(layoutEditor);
            doc.body.appendChild(scriptVueLink);
            doc.body.appendChild(scriptEditorLink);
            doc.body.appendChild(scriptVueAppLink);
        }

        doc.close();

        iframe.value.onload = () => {
            const bodyHeight = doc.body.scrollHeight;
            if (props.allowEdit) {
                return;
            }
            if (iframe.value) {
                iframe.value.style.height = `${bodyHeight}px`;
            }
        };
    }
};

const onClassChange = async (event: any) => {
    editorEngine.updateClassOfElementBySimplisitiId(event.detail.simplisitiId, event.detail.spClassList);

    const composedHtml = await editorEngine.getComposedHtmlString();

    emit('update', composedHtml);
};

const onStyleChange = async (event: any) => {
    editorEngine.updateStyleOfElementBySimplisitiId(event.detail.simplisitiId, event.detail.spStyleList);

    const composedHtml = await editorEngine.getComposedHtmlString();

    emit('update', composedHtml);
};

const onElementRemoved = async (event: any) => {
    editorEngine.removeElementBySimplisitiId(event.detail.simplisitiId);

    const composedHtml = await editorEngine.getComposedHtmlString();

    emit('update', composedHtml);
};

const onContentChange = async (event: any) => {
    editorEngine.updateContainerContentBySimplisitiId(event.detail.simplisitiId, event.detail.content);

    const composedHtml = await editorEngine.getComposedHtmlString();

    emit('update', composedHtml);
};

const listenElementEvents = () => {
    window.document.addEventListener('classChange', onClassChange);
    window.document.addEventListener('styleChange', onStyleChange);
    window.document.addEventListener('contentChange', onContentChange);
    window.document.addEventListener('elementRemoved', onElementRemoved);
};

onMounted(() => {
    updateIframe(parseComponentContent(props.component, props.component.content));
    listenElementEvents();
    // updateIframe();
    // if (!props.html) {
    //     observer.subscribe(props.component, (content) => {
    //         updateIframe(content).then(() => resizeIframe());
    //     });
    // }
});

onUnmounted(() => {
    window.document.removeEventListener('classChange', onClassChange);
    window.document.removeEventListener('styleChange', onStyleChange);
    window.document.removeEventListener('contentChange', onContentChange);
    window.document.removeEventListener('elementRemoved', onElementRemoved);
});
</script>

<template>
    <div class="relative">
        <iframe
            :class="['w-full', { 'h-full': allowEdit }]"
            ref="iframe"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
        ></iframe>
        <div class="absolute inset-0" v-if="!allowEdit"></div>
    </div>
</template>

<style scoped>
</style>
