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

        const styleLink = loadResourcesPreview();
        doc.open();
        doc.write(content);
        doc.head.appendChild(styleLink);
        doc.close();

        setTimeout(() => {
            const firstChild = doc.body.firstChild as HTMLElement | null;
            const bodyHeight = firstChild?.clientHeight;
            if (iframe.value) {
                iframe.value.style.height = `${bodyHeight}px`;
            }
        }, 1000);
    }
};


const loadResourcesPreview = (): HTMLLinkElement => {
    const link = document.createElement('link');
    const styleUrl = getResourcePreviewUrl('style');
    link.rel = 'stylesheet';
    link.href = styleUrl

    return link;
};

watch(() => props.content, (content) => {
    updateIframe(content);
});

onMounted(() => {
    updateIframe(props.content);
});
</script>

<template>
    <iframe
        class="w-screen"
        ref="iframe"
    ></iframe>
</template>

<style scoped>
</style>