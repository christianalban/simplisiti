<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue';
import { getResourcePreviewUrl, getComponentPreview, getPluginResourcePreviewUrl } from "../../services/PageService.ts";
import { useContentObserver, parseComponentContent } from "../../services/ContentService.ts";
import { Component, ContentValue } from "../../types/Component.ts";

const observer = useContentObserver();

const props = defineProps({
    component: {
        type: Object as PropType<Component>,
        required: true,
    },
    html: {
        type: [String, null] as PropType<string | null>,
        default: null,
    },
});

const iframe = ref<HTMLIFrameElement | null>(null);

const updateIframe = async (componentContent: ContentValue) => {
    if (!props.component.id) return;

    const content = props.html ?? (await getComponentPreview(props.component.id, componentContent)).data;

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
        doc.close();

        iframe.value.onload = () => {
            const bodyHeight = doc.body.scrollHeight;
            if (iframe.value) {
                iframe.value.style.height = `${bodyHeight}px`;
            }
        };
    }
};

const resizeIframe = () => {
    if (iframe.value) {
        const doc = iframe.value.contentDocument;
        if (!doc) return;

        const bodyHeight = doc.body.offsetHeight;
        iframe.value.style.height = `${bodyHeight}px`;
    }
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

onMounted(() => {
    updateIframe(parseComponentContent(props.component, props.component.content));
    if (!props.html) {
        observer.subscribe(props.component, (content) => {
            updateIframe(content).then(() => resizeIframe());
        });
    }
});
</script>

<template>
    <div class="relative">
        <iframe
            class="w-full"
            ref="iframe"
            sandbox="allow-scripts allow-same-origin"
        ></iframe>
        <div class="absolute inset-0"></div>
    </div>
</template>

<style scoped>
</style>
