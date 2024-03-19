<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { getResourcePreviewUrl } from "../../services/PageService.ts";

const props = defineProps({
    content: {
        type: String,
        default: '',
    },
});

const iframe = ref<HTMLIFrameElement | null>(null);

const updateIframe = (content: string) => {
    if (iframe.value) {
        const doc = iframe.value.contentDocument;
        if (!doc) return;

        const [styleLink, scriptLink] = loadResourcesPreview();

        doc.open();
        doc.write(content);
        doc.head.appendChild(styleLink);
        doc.body.appendChild(scriptLink);
        doc.close();

        iframe.value.onload = () => {
            const bodyHeight = doc.body.scrollHeight;
            if (iframe.value) {
                iframe.value.style.height = `${bodyHeight}px`;
            }
        };
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

watch(() => props.content, (content) => {
    updateIframe(content);
});

onMounted(() => {
    updateIframe(props.content);
});
</script>

<template>
    <div class="relative">
        <iframe
            class="w-screen"
            ref="iframe"
            sandbox="allow-scripts allow-same-origin"
        ></iframe>
        <div class="absolute inset-0"></div>
    </div>
</template>

<style scoped>
</style>
