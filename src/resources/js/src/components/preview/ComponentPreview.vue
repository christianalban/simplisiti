<script setup lang="ts">
import { ref, onMounted, PropType, onUnmounted, onBeforeUnmount } from 'vue';
import { getComponentPreview, getResourceEditorEngine } from "../../services/PageService.ts";
import { useContentObserver, parseComponentContent } from "../../services/ContentService.ts";
import { Component } from "../../types/Component.ts";
import { EditorEngine } from '../../editor-engine/EditorEngine.ts';
import { EditorHistoryService } from '../../services/EditorHistoryService.ts';
import { loadPluginResourcesPreview, loadResourcesPreview } from '../../utils/helpers.ts';

const observer = useContentObserver();

const loaded = ref(false);

const editorEngine = new EditorEngine();
const history = new EditorHistoryService(50);
const previewRootSelector = '[data-simplisitiid="simplisiti-component-preview"]';
let isApplyingHistory = false;

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
    lazy: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update']);

const iframe = ref<HTMLIFrameElement | null>(null);

const dispatchHistoryState = () => {
    const doc = iframe.value?.contentDocument;
    const CustomEventConstructor = doc?.defaultView?.CustomEvent;

    if (!doc || !CustomEventConstructor) {
        return;
    }

    doc.dispatchEvent(new CustomEventConstructor('editorHistoryState', {
        detail: history.getState(),
    }));
};

const dispatchHistoryRestored = (doc: Document) => {
    const CustomEventConstructor = doc.defaultView?.CustomEvent;

    if (CustomEventConstructor) {
        doc.dispatchEvent(new CustomEventConstructor('editorHistoryRestored'));
    }
};

const recordHistorySnapshot = (snapshot: string) => {
    if (!props.allowEdit || isApplyingHistory) {
        return;
    }

    history.record(snapshot);
    dispatchHistoryState();
};

const initializeHistory = (snapshot: string) => {
    if (!props.allowEdit) {
        return;
    }

    history.initialize(snapshot);
    dispatchHistoryState();
};

const loadScript = (doc: Document, source: string): Promise<HTMLScriptElement> => {
    return new Promise((resolve, reject) => {
        const script = doc.createElement('script');
        script.src = source;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Unable to load editor resource: ${source}`));
        doc.body.appendChild(script);
    });
};

const loadStylesheet = (root: ShadowRoot | HTMLElement, source: string): Promise<HTMLLinkElement> => {
    return new Promise((resolve, reject) => {
        const link = root.ownerDocument.createElement('link');
        link.rel = 'stylesheet';
        link.href = source;
        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error(`Unable to load editor stylesheet: ${source}`));
        root.appendChild(link);
    });
};

const createInlineStyle = (doc: Document, content: string): HTMLStyleElement => {
    const style = doc.createElement('style');
    style.textContent = content;
    return style;
};

const createInlineScript = (doc: Document, content: string): HTMLScriptElement => {
    const script = doc.createElement('script');
    script.textContent = content;
    return script;
};

const loadEditor = async (doc: Document): Promise<void> => {
    const scriptVueUrl = 'https://unpkg.com/vue@3/dist/vue.global.js';
    const scriptEditorUrl = getResourceEditorEngine('script');
    const editorHost = doc.createElement('div');
    editorHost.id = 'simplisiti-component-editor-host';
    editorHost.style.cssText = 'all: initial; display: block; position: relative; z-index: 1;';

    const editorShadowRoot = editorHost.attachShadow({ mode: 'open' });
    const appContainer = doc.createElement('div');
    appContainer.id = 'simplisiti-component-editor-app';
    appContainer.innerHTML = '<simplisiti-component-editor></simplisiti-component-editor>';
    editorShadowRoot.appendChild(appContainer);
    doc.body.appendChild(editorHost);

    const editorStyleUrl = getResourceEditorEngine('style');
    const contentStyleUrl = getResourceEditorEngine('content-style');
    await Promise.all([
        loadStylesheet(doc.head, contentStyleUrl),
        loadStylesheet(editorShadowRoot, editorStyleUrl),
    ]);

    await loadScript(doc, scriptVueUrl);
    await loadScript(doc, scriptEditorUrl);

    const mountScript = doc.createElement('script');
    mountScript.textContent = `
        if (!window.Vue || !window.SimplisitiComponentEditor) {
            throw new Error('The component editor dependencies are not available');
        }

        const editorHost = document.getElementById('simplisiti-component-editor-host');
        const appContainer = editorHost?.shadowRoot?.querySelector('#simplisiti-component-editor-app');
        if (!appContainer) {
            throw new Error('The component editor host is not available');
        }

        const app = window.Vue.createApp({});
        app.use(window.SimplisitiComponentEditor);
        app.mount(appContainer);
    `;
    doc.body.appendChild(mountScript);
};

const updateIframe = async () => {
    if (!props.component.id) return;

    editorEngine.setHtmlString(props.html || props.component.html);

    let content = props.component.html;

    if (props.lazy) {
        const componentContent = parseComponentContent(props.component, props.component.content);
        content = (await getComponentPreview(props.component.id, componentContent)).data;
    } else {
        content = await editorEngine.compose().getComposedHtmlString();
    }

    const contentContainer = document.createElement('div');
    contentContainer.dataset.simplisitiid = 'simplisiti-component-preview';
    contentContainer.innerHTML = content;

    if (iframe.value) {
        const doc = iframe.value.contentDocument;

        if (!doc) return;

        const [previewResources, pluginResources] = await Promise.all([
            loadResourcesPreview(),
            loadPluginResourcesPreview(),
        ]);

        const metaViewport = doc.createElement('meta');
        metaViewport.name = 'viewport';
        metaViewport.content = 'width=device-width, initial-scale=1.0';

        iframe.value.onload = () => {
            const bodyHeight = doc.body?.scrollHeight ?? 0;
            if (props.allowEdit) {
                return;
            }
            if (iframe.value) {
                iframe.value.style.height = `${bodyHeight}px`;
            }

            loaded.value = true;
        };

        doc.open();
        doc.write('<!doctype html><html><head></head><body></body></html>');
        doc.close();

        if (!doc.body || !doc.head) {
            throw new Error('Unable to initialize the component preview document.');
        }

        doc.body.appendChild(contentContainer);
        doc.head.appendChild(metaViewport);
        doc.head.appendChild(createInlineStyle(doc, previewResources.style));
        doc.head.appendChild(createInlineStyle(doc, pluginResources.style));
        doc.body.appendChild(createInlineScript(doc, previewResources.script));
        doc.body.appendChild(createInlineScript(doc, pluginResources.script));

        if (props.allowEdit) {
            try {
                await loadEditor(doc);
            } catch (error) {
                console.error('Unable to initialize the component editor.', error);
            }
            initializeHistory(content);
        }
    }
};

const commitEditorChange = async () => {
    const composedHtml = await editorEngine.getComposedHtmlString();

    recordHistorySnapshot(composedHtml);
    emit('update', composedHtml);
};

const onClassChange = async (event: any) => {
    editorEngine.updateClassOfElementBySimplisitiId(event.detail.simplisitiId, event.detail.spClassList);

    await commitEditorChange();
};

const onStyleChange = async (event: any) => {
    editorEngine.updateStyleOfElementBySimplisitiId(event.detail.simplisitiId, event.detail.spStyleList);

    await commitEditorChange();
};

const onElementRemoved = async (event: any) => {
    editorEngine.removeElementBySimplisitiId(event.detail.simplisitiId);

    await commitEditorChange();
};

const onContentChange = async (event: any) => {
    editorEngine.updateContainerContentBySimplisitiId(event.detail.simplisitiId, event.detail.content);

    await commitEditorChange();
};

const onAttributeChange = async (event: any) => {
    editorEngine.updateAttributeOfElementBySimplisitiId(event.detail.simplisitiId, event.detail.attribute);

    await commitEditorChange();
};

const restoreHistorySnapshot = async (snapshot: string) => {
    const doc = iframe.value?.contentDocument;
    const preview = doc?.querySelector<HTMLElement>(previewRootSelector);

    if (!doc || !preview) {
        return;
    }

    editorEngine.setHtmlString(snapshot);
    const composedHtml = await editorEngine.compose().getComposedHtmlString();
    preview.innerHTML = composedHtml;
    dispatchHistoryRestored(doc);
    emit('update', composedHtml);
    resizeIframe();
};

const undoEditorChange = async () => {
    const snapshot = history.undo();

    if (!snapshot) {
        return;
    }

    isApplyingHistory = true;
    try {
        await restoreHistorySnapshot(snapshot);
    } finally {
        isApplyingHistory = false;
        dispatchHistoryState();
    }
};

const redoEditorChange = async () => {
    const snapshot = history.redo();

    if (!snapshot) {
        return;
    }

    isApplyingHistory = true;
    try {
        await restoreHistorySnapshot(snapshot);
    } finally {
        isApplyingHistory = false;
        dispatchHistoryState();
    }
};

const onHistoryStateRequest = () => {
    dispatchHistoryState();
};

const resizeIframe = () => {
    if (iframe.value) {
        const doc = iframe.value.contentDocument;
        if (!doc) return;

        const bodyHeight = doc.body.offsetHeight;
        iframe.value.style.height = `${bodyHeight}px`;
    }
};

const listenElementEvents = () => {
    if (!props.allowEdit) return;

    window.document.addEventListener('classChange', onClassChange);
    window.document.addEventListener('styleChange', onStyleChange);
    window.document.addEventListener('contentChange', onContentChange);
    window.document.addEventListener('elementRemoved', onElementRemoved);
    window.document.addEventListener('attributeChange', onAttributeChange);
    window.document.addEventListener('editorHistoryStateRequest', onHistoryStateRequest);
    window.document.addEventListener('editorHistoryUndo', undoEditorChange);
    window.document.addEventListener('editorHistoryRedo', redoEditorChange);
};

const interserctionObserver = new IntersectionObserver((entries) => {
    for (let entry of entries) {
        if (entry.isIntersecting && !loaded.value) {
            setTimeout(() => {
                updateIframe();
            }, 100);
        }
    }
});

onMounted(() => {
    if (iframe.value && !props.allowEdit) {
        interserctionObserver.observe(iframe.value);
    }
    listenElementEvents();

    if (props.allowEdit) {
        updateIframe();
    } else {
        if (!props.html) {
            observer.subscribe(props.component, () => {
                updateIframe().then(() => resizeIframe());
            });
        }
    }
});

onBeforeUnmount(() => {
    if (iframe.value) {
        interserctionObserver.unobserve(iframe.value);
    }
});

onUnmounted(() => {
    window.document.removeEventListener('classChange', onClassChange);
    window.document.removeEventListener('styleChange', onStyleChange);
    window.document.removeEventListener('contentChange', onContentChange);
    window.document.removeEventListener('elementRemoved', onElementRemoved);
    window.document.removeEventListener('attributeChange', onAttributeChange);
    window.document.removeEventListener('editorHistoryStateRequest', onHistoryStateRequest);
    window.document.removeEventListener('editorHistoryUndo', undoEditorChange);
    window.document.removeEventListener('editorHistoryRedo', redoEditorChange);
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
