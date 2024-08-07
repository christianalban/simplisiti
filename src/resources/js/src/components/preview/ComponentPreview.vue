<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue';
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

const iframe = ref<HTMLIFrameElement | null>(null);

const loadFontFace = () => {
    const styleIcons = document.createElement('style');
    styleIcons.innerHTML = `
        @font-face {
          font-family: 'fontello';
          src: url('http://localhost/api/spanel/page/editor/font/fontello.eot?75699607');
          src: url('http://localhost/api/spanel/page/editor/font/fontello.eot?75699607#iefix') format('embedded-opentype'),
               url('http://localhost/api/spanel/page/editor/font/fontello.woff?75699607') format('woff'),
               url('http://localhost/api/spanel/page/editor/font/fontello.ttf?75699607') format('truetype'),
               url('http://localhost/api/spanel/page/editor/font/fontello.svg?75699607#fontello') format('svg');
          font-weight: normal;
          font-style: normal;
        }
    `;
    
    return [styleIcons];
};

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

const updateIframe = async (componentContent: ContentValue) => {
    if (!props.component.id) return;

    editorEngine.setHtmlString(props.component.html);

    // const content = props.html || (await getComponentPreview(props.component.id, componentContent)).data;
    const content = (await editorEngine.compose().getComposedHtmlString());

    if (iframe.value) {
        const doc = iframe.value.contentDocument;

        if (!doc) return;

        const [styleLink, scriptLink] = loadResourcesPreview();
        const [pluginStyleLink, pluginScriptLink] = loadPluginResourcesPreview();

        doc.open();
        doc.write(content);
        doc.head.appendChild(styleLink);
        doc.head.appendChild(pluginStyleLink);
        doc.body.appendChild(scriptLink);
        doc.body.appendChild(pluginScriptLink);

        if (props.allowEdit) {
            const [styleEditorLink, scriptEditorLink, scriptVueLink, scriptVueAppLink, layoutEditor] = loadResourcesEditor();
            // const [fontFace] = loadFontFace();

            doc.head.appendChild(styleEditorLink);
            doc.head.appendChild(layoutEditor);
            // doc.head.appendChild(fontFace);
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

onMounted(() => {
    updateIframe(parseComponentContent(props.component, props.component.content));
    // updateIframe();
    // if (!props.html) {
    //     observer.subscribe(props.component, (content) => {
    //         updateIframe(content).then(() => resizeIframe());
    //     });
    // }
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
