<script setup lang="ts">
import { ref, onMounted, PropType, onUnmounted, onBeforeUnmount } from 'vue';
import { getComponentPreview, getResourceEditorEngine } from "../../services/PageService.ts";
import { useContentObserver, parseComponentContent } from "../../services/ContentService.ts";
import { Component } from "../../types/Component.ts";
import { EditorEngine } from '../../editor-engine/EditorEngine.ts';
import { EditorHistoryService } from '../../services/EditorHistoryService.ts';
import { loadPreviewResources } from '../../utils/helpers.ts';

const observer = useContentObserver();

const loaded = ref(false);

const editorEngine = new EditorEngine();
const history = new EditorHistoryService(50);
const previewRootSelector = '[data-simplisitiid="simplisiti-component-preview"]';
let isApplyingHistory = false;
let updateQueue = Promise.resolve();
let updateSequence = 0;
let isUnmounted = false;

type IframeRuntime = {
    document: Document;
    preview: HTMLDivElement;
    componentStyle: HTMLStyleElement | null;
    componentScript: HTMLScriptElement | null;
    componentScriptKey: string;
    globalScriptsLoaded: boolean;
    editorLoaded: boolean;
};

let iframeRuntime: IframeRuntime | null = null;

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

const componentClassName = (name: string): string => {
    const normalized = name.replace(/[^A-Za-z0-9_-]+/g, '-').replace(/^[-_]+|[-_]+$/g, '');

    return `component-${normalized || 'unnamed'}`;
};

const componentStyleContent = (): string => {
    const styles = props.component.styles?.trim();

    if (!styles) {
        return '';
    }

    return `.${componentClassName(props.component.name)} {\n${styles}\n}`;
};

const loadScript = (doc: Document, source: string, resourceKey: string): Promise<HTMLScriptElement> => {
    return new Promise((resolve, reject) => {
        const existing = doc.querySelector<HTMLScriptElement>(`script[data-simplisiti-resource="${resourceKey}"]`);

        if (existing) {
            resolve(existing);
            return;
        }

        const script = doc.createElement('script');
        script.src = source;
        script.dataset.simplisitiResource = resourceKey;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Unable to load editor resource: ${source}`));
        doc.body.appendChild(script);
    });
};

const loadStylesheet = (root: ShadowRoot | HTMLElement, source: string, resourceKey: string): Promise<HTMLLinkElement> => {
    return new Promise((resolve, reject) => {
        const existing = root.querySelector<HTMLLinkElement>(`link[data-simplisiti-resource="${resourceKey}"]`);

        if (existing) {
            resolve(existing);
            return;
        }

        const link = root.ownerDocument.createElement('link');
        link.rel = 'stylesheet';
        link.href = source;
        link.dataset.simplisitiResource = resourceKey;
        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error(`Unable to load editor stylesheet: ${source}`));
        root.appendChild(link);
    });
};

const createInlineStyle = (doc: Document, content: string, resourceKey: string): HTMLStyleElement => {
    const style = doc.createElement('style');
    style.textContent = content;
    style.dataset.simplisitiResource = resourceKey;
    return style;
};

const createInlineScript = (doc: Document, content: string, resourceKey: string): HTMLScriptElement => {
    const script = doc.createElement('script');
    script.textContent = content;
    script.dataset.simplisitiResource = resourceKey;
    return script;
};

const loadEditor = async (doc: Document): Promise<void> => {
    const editorHost = doc.createElement('div');
    editorHost.id = 'simplisiti-component-editor-host';
    editorHost.style.cssText = 'all: initial; display: block; position: relative; z-index: 1;';

    const editorShadowRoot = editorHost.attachShadow({ mode: 'open' });
    doc.body.appendChild(editorHost);

    const scriptVueUrl = 'https://unpkg.com/vue@3/dist/vue.global.js';
    const scriptEditorUrl = getResourceEditorEngine('script');
    const appContainer = doc.createElement('div');
    appContainer.id = 'simplisiti-component-editor-app';
    appContainer.innerHTML = '<simplisiti-component-editor></simplisiti-component-editor>';

    const editorStyleUrl = getResourceEditorEngine('style');
    await loadStylesheet(editorShadowRoot, editorStyleUrl, 'editor-ui-style');
    editorShadowRoot.appendChild(appContainer);

    await loadScript(doc, scriptVueUrl, 'editor-vue-script');
    await loadScript(doc, scriptEditorUrl, 'editor-engine-script');

    const mountScript = createInlineScript(doc, `
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
    `, 'editor-mount-script');
    doc.body.appendChild(mountScript);
};

const updateComponentStyle = (runtime: IframeRuntime): void => {
    const content = componentStyleContent();

    if (!content) {
        runtime.componentStyle?.remove();
        runtime.componentStyle = null;
        return;
    }

    if (!runtime.componentStyle) {
        runtime.componentStyle = createInlineStyle(runtime.document, content, 'component-style');
        runtime.document.head.appendChild(runtime.componentStyle);
        return;
    }

    runtime.componentStyle.textContent = content;
};

const updateComponentScript = async (runtime: IframeRuntime): Promise<void> => {
    const content = props.component.scripts?.trim() || '';

    if (runtime.componentScriptKey === content) {
        return;
    }

    runtime.componentScript?.remove();
    runtime.componentScript = null;
    runtime.componentScriptKey = content;

    if (!content) {
        return;
    }

    runtime.componentScript = createInlineScript(runtime.document, content, 'component-script');
    runtime.document.body.appendChild(runtime.componentScript);
};

const createIframeRuntime = async (
    doc: Document,
    resources: Awaited<ReturnType<typeof loadPreviewResources>>,
): Promise<IframeRuntime> => {
    doc.open();
    doc.write('<!doctype html><html><head></head><body></body></html>');
    doc.close();

    if (!doc.body || !doc.head) {
        throw new Error('Unable to initialize the component preview document.');
    }

    const metaViewport = doc.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    doc.head.appendChild(metaViewport);

    doc.head.appendChild(createInlineStyle(doc, resources.global.style, 'global-style'));
    doc.head.appendChild(createInlineStyle(doc, resources.plugin.style, 'plugin-style'));

    const componentStyle = componentStyleContent();
    const componentStyleElement = componentStyle
        ? createInlineStyle(doc, componentStyle, 'component-style')
        : null;

    if (componentStyleElement) {
        doc.head.appendChild(componentStyleElement);
    }

    if (props.allowEdit) {
        await loadStylesheet(doc.head, getResourceEditorEngine('content-style'), 'editor-content-style');
    }

    const preview = doc.createElement('div');
    preview.dataset.simplisitiid = 'simplisiti-component-preview';
    preview.className = componentClassName(props.component.name);
    doc.body.appendChild(preview);

    return {
        document: doc,
        preview,
        componentStyle: componentStyleElement,
        componentScript: null,
        componentScriptKey: '',
        globalScriptsLoaded: false,
        editorLoaded: false,
    };
};

const renderIframe = async (sequence: number): Promise<void> => {
    if (isUnmounted || !props.component.id || !iframe.value) {
        return;
    }

    editorEngine.setHtmlString(props.html || props.component.html);

    let content = props.component.html;

    if (props.lazy) {
        const componentContent = parseComponentContent(props.component, props.component.content);
        content = (await getComponentPreview(props.component.id, componentContent)).data;
    } else {
        content = await editorEngine.compose().getComposedHtmlString();
    }

    if (isUnmounted || sequence !== updateSequence || !iframe.value) {
        return;
    }

    const resources = await loadPreviewResources();

    if (isUnmounted || sequence !== updateSequence || !iframe.value) {
        return;
    }

    const doc = iframe.value.contentDocument;

    if (!doc) {
        throw new Error('Unable to access the component preview document.');
    }

    if (!iframeRuntime || iframeRuntime.document !== doc) {
        iframeRuntime = await createIframeRuntime(doc, resources);
    }

    if (isUnmounted || sequence !== updateSequence || !iframeRuntime) {
        return;
    }

    const runtime = iframeRuntime;
    runtime.preview.className = componentClassName(props.component.name);
    updateComponentStyle(runtime);
    runtime.preview.innerHTML = content;

    if (!runtime.globalScriptsLoaded) {
        runtime.document.body.appendChild(createInlineScript(runtime.document, resources.global.script, 'global-script'));
        runtime.document.body.appendChild(createInlineScript(runtime.document, resources.plugin.script, 'plugin-script'));
        runtime.globalScriptsLoaded = true;
    }

    await updateComponentScript(runtime);

    if (props.allowEdit && !runtime.editorLoaded) {
        await loadEditor(runtime.document);
        runtime.editorLoaded = true;
        initializeHistory(content);
    }

    if (isUnmounted || sequence !== updateSequence) {
        return;
    }

    loaded.value = true;

    if (!props.allowEdit) {
        resizeIframe();
    }
};

const updateIframe = (): Promise<void> => {
    const sequence = ++updateSequence;

    updateQueue = updateQueue
        .then(() => renderIframe(sequence))
        .catch((error) => {
            if (!isUnmounted && sequence === updateSequence) {
                loaded.value = false;
                console.error('Unable to render the component preview.', error);
            }
        });

    return updateQueue;
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
    isUnmounted = true;
    updateSequence++;

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
