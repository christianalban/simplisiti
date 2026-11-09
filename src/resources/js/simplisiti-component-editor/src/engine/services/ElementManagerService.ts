import { ref } from "vue";
import { SupportedTags, SupportedTagsList } from "../constants/HtmlTagsMappings";
import { createFactory } from "../factories/ElementFactory";
import { dispatchContentChange } from "./ElementEventDispatcherService";

let placeHolderBox: HTMLDivElement | null = null;
let draggedElement: HTMLElement | null = null;
let dropTarget: HTMLElement | null = null;
let pointerGesture: {
    node: HTMLElement | null;
    dragged: boolean;
} = {
    node: null,
    dragged: false,
};

interface DragSession {
    type: 'add' | 'move';
    sourceContainer: HTMLElement | null;
    sourceIndex: number;
    targetContainer: HTMLElement | null;
    targetIndex: number;
    placeholderWidth: number;
    placeholderHeight: number;
    originalStyle: string | null;
    pendingPosition: {
        container: HTMLElement;
        clientX: number;
        clientY: number;
    } | null;
    frameId: number | null;
    lastPointer: {
        clientX: number;
        clientY: number;
    } | null;
}

let dragSession: DragSession | null = null;

export const isElementAddingMode = ref(false);
export const isElementMovingMode = ref(false);
export const isPopUpOpened = ref(false);
export const element = ref<HTMLElement | null>(null);
export const elementToInsert = ref<HTMLElement | null>(null);

const previewRootId = 'simplisiti-component-preview';
const placeholderClass = 'sp-element__placeholder';
const newElementPlaceholderHeight = 32;
const interactionLayers = new WeakMap<HTMLElement, () => void>();
const editorInteractionClasses = [
    'sp-element__active',
    'sp-element__hover',
    'sp-element__dragging',
    'sp-element__drop-target',
];
const supportedSelector = SupportedTagsList.join(',');

const isSupportedElement = (node: Node | null): node is HTMLElement => {
    return node instanceof HTMLElement
        && SupportedTagsList.includes(node.tagName.toLowerCase() as SupportedTags);
};

const isPreviewRoot = (node: HTMLElement, root: HTMLElement): boolean => {
    return node === root && node.dataset.simplisitiid === previewRootId;
};

const isInteractionPlaceholder = (node: HTMLElement | null): boolean => {
    return node?.classList.contains(placeholderClass) ?? false;
};

const isInsideRoot = (node: HTMLElement, root: HTMLElement): boolean => {
    return node === root || root.contains(node);
};

type HighlightState = 'active' | 'hover' | null;

const setElementHighlight = (node: HTMLElement | null, state: HighlightState) => {
    if (!node || !isSupportedElement(node)) {
        return;
    }

    node.classList.remove('sp-element__active', 'sp-element__hover');

    if (state === 'active') {
        node.classList.add('sp-element__active');
    } else if (state === 'hover') {
        node.classList.add('sp-element__hover');
    }
};

const findSupportedElement = (target: EventTarget | null, root: HTMLElement): HTMLElement | null => {
    if (!(target instanceof Element)) {
        return null;
    }

    const candidate = target.closest<HTMLElement>(supportedSelector);

    if (!candidate || !isInsideRoot(candidate, root) || isPreviewRoot(candidate, root) || isInteractionPlaceholder(candidate)) {
        return null;
    }

    return isSupportedElement(candidate) ? candidate : null;
};

const findContainerElement = (target: EventTarget | null, root: HTMLElement): HTMLElement | null => {
    if (!(target instanceof Element)) {
        return null;
    }

    let candidate = target.closest<HTMLElement>('div');

    if (candidate && isInteractionPlaceholder(candidate)) {
        candidate = candidate.parentElement?.closest<HTMLElement>('div') ?? null;
    }

    if (!candidate || !isInsideRoot(candidate, root)) {
        return null;
    }

    return isSupportedElement(candidate) ? candidate : null;
};

const clearDropTarget = () => {
    dropTarget?.classList.remove('sp-element__drop-target');
    dropTarget = null;
};

const clearPlaceholder = () => {
    placeHolderBox?.remove();
    placeHolderBox = null;
    clearDropTarget();
};

const clearEditorInteractionClasses = (html: string): string => {
    const classPattern = editorInteractionClasses.join('|');

    return html.replace(new RegExp(`\\b(?:${classPattern})\\b`, 'g'), '');
};

const dispatchContainerChange = (container: HTMLElement | null) => {
    const simplisitiId = container?.dataset.simplisitiid;

    if (container && simplisitiId) {
        dispatchContentChange(simplisitiId, clearEditorInteractionClasses(container.innerHTML));
    }
};

const getDirectChildren = (node: HTMLElement): HTMLElement[] => {
    return Array.from(node.children).filter(
        (child): child is HTMLElement => child !== placeHolderBox && child !== draggedElement,
    );
};

const insertAtPosition = (container: HTMLElement, node: HTMLElement, index: number) => {
    const children = getDirectChildren(container);
    const reference = children[index] ?? null;

    if (reference) {
        container.insertBefore(node, reference);
    } else {
        container.appendChild(node);
    }
};

const measureNewElementWidth = (container: HTMLElement): number => {
    const sourceElement = elementToInsert.value;
    const view = container.ownerDocument.defaultView;

    if (!sourceElement || !view) {
        return 0;
    }

    const sourceStyle = view.getComputedStyle(sourceElement);
    const containerStyle = view.getComputedStyle(container);
    const paddingWidth = parseFloat(containerStyle.paddingLeft || '0')
        + parseFloat(containerStyle.paddingRight || '0');
    const availableWidth = Math.max(container.clientWidth - paddingWidth, 32);
    const blockDisplays = new Set(['block', 'flex', 'grid', 'table', 'list-item']);
    const isBlockElement = blockDisplays.has(sourceStyle.display);
    const probe = sourceElement.cloneNode(true) as HTMLElement;

    probe.classList.remove(...editorInteractionClasses);
    probe.removeAttribute('data-simplisitiid');
    probe.removeAttribute('draggable');
    probe.style.position = 'absolute';
    probe.style.left = '-100000px';
    probe.style.top = '-100000px';
    probe.style.visibility = 'hidden';
    probe.style.pointerEvents = 'none';
    probe.style.width = isBlockElement ? `${availableWidth}px` : 'max-content';
    probe.style.maxWidth = 'none';
    probe.style.height = 'auto';
    probe.style.minHeight = '0';
    probe.style.margin = '0';

    container.appendChild(probe);
    const measuredWidth = Math.ceil(probe.getBoundingClientRect().width);
    probe.remove();

    if (measuredWidth > 0) {
        return measuredWidth;
    }

    if (isBlockElement) {
        return availableWidth;
    }

    if (sourceElement instanceof HTMLImageElement) {
        return sourceElement.width || 150;
    }

    return 64;
};

const updatePlaceholderDimensions = (container: HTMLElement) => {
    if (!dragSession || dragSession.type !== 'add') {
        return;
    }

    dragSession.placeholderWidth = measureNewElementWidth(container);
    dragSession.placeholderHeight = newElementPlaceholderHeight;

    if (!placeHolderBox) {
        return;
    }

    placeHolderBox.style.width = `${dragSession.placeholderWidth}px`;
    placeHolderBox.style.height = `${dragSession.placeholderHeight}px`;
};

const createPlaceholder = (container: HTMLElement): HTMLDivElement => {
    if (placeHolderBox) {
        return placeHolderBox;
    }

    placeHolderBox = container.ownerDocument.createElement('div');
    placeHolderBox.id = placeholderClass;
    placeHolderBox.classList.add(placeholderClass);

    if (dragSession?.type === 'add') {
        placeHolderBox.classList.add('sp-element__placeholder--new');
    }

    return placeHolderBox;
};

const cancelPendingPlaceholderUpdate = () => {
    if (dragSession?.frameId !== null && dragSession?.frameId !== undefined) {
        cancelAnimationFrame(dragSession.frameId);
        dragSession.frameId = null;
    }

    if (dragSession) {
        dragSession.pendingPosition = null;
    }
};

const restoreDraggedElementStyle = (session: DragSession | null, node: HTMLElement | null) => {
    if (!node || !session) {
        return;
    }

    if (session.originalStyle === null) {
        node.removeAttribute('style');
    } else {
        node.setAttribute('style', session.originalStyle);
    }
};

const finishDrag = (restoreSource = true) => {
    const session = dragSession;
    const currentDraggedElement = draggedElement;

    cancelPendingPlaceholderUpdate();

    if (currentDraggedElement) {
        currentDraggedElement.classList.remove('sp-element__dragging');
        restoreDraggedElementStyle(session, currentDraggedElement);
    }

    if (
        restoreSource
        && session?.type === 'move'
        && session.sourceContainer
        && currentDraggedElement
        && !currentDraggedElement.isConnected
    ) {
        clearPlaceholder();
        insertAtPosition(session.sourceContainer, currentDraggedElement, session.sourceIndex);
    } else {
        clearPlaceholder();
    }

    draggedElement = null;
    dragSession = null;
    elementToInsert.value = null;
    isElementAddingMode.value = false;
    isElementMovingMode.value = false;
};

const cancelBlockedDrag = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (dragSession) {
        finishDrag();
    } else if (placeHolderBox) {
        clearPlaceholder();
    }
};

const resetPointerGesture = () => {
    pointerGesture = {
        node: null,
        dragged: false,
    };
};

const deactivateAllElements = (root: HTMLElement) => {
    root.querySelectorAll<HTMLElement>('.sp-element__active, .sp-element__hover').forEach((activeElement) => {
        setElementHighlight(activeElement, null);
    });
};

export const selectElement = (event: Event, node: Node) => {
    if (
        event.type !== 'click'
        || !isSupportedElement(node)
        || isElementAddingMode.value
        || isElementMovingMode.value
    ) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

    const previousElement = element.value;
    const root = node.closest<HTMLElement>(`[data-simplisitiid="${previewRootId}"]`);

    if (root) {
        deactivateAllElements(root);
    } else {
        setElementHighlight(previousElement, null);
    }

    element.value = node;
    setElementHighlight(node, 'active');
    isPopUpOpened.value = true;

    event.preventDefault();
    event.stopPropagation();
};

export const activateElement = (_event: Event, node: Node) => {
    if (!isSupportedElement(node) || node === element.value) {
        return;
    }

    setElementHighlight(node, 'hover');
};

export const deactivateElement = (_event: Event, node: Node) => {
    if (isSupportedElement(node) && node !== element.value) {
        setElementHighlight(node, null);
    }
};

export const dropElementOnContainer = (event: DragEvent, node: Node) => {
    const container = isSupportedElement(node) ? node : null;
    const insertedElement = elementToInsert.value ?? draggedElement;
    const session = dragSession;

    event.preventDefault();
    event.stopPropagation();

    if (!container || !insertedElement || !session) {
        finishDrag();
        return;
    }

    const targetContainer = placeHolderBox?.parentElement ?? container;
    const pendingPosition = session.pendingPosition;
    const pointerChanged = !session.lastPointer
        || session.lastPointer.clientX !== event.clientX
        || session.lastPointer.clientY !== event.clientY;

    cancelPendingPlaceholderUpdate();

    if (pendingPosition) {
        updatePlaceholderPosition(pendingPosition);
    } else if (pointerChanged || !placeHolderBox?.parentNode) {
        updatePlaceholderPosition({
            container,
            clientX: event.clientX,
            clientY: event.clientY,
        });
    }

    const sourceContainer = session.sourceContainer;

    if (placeHolderBox?.parentNode) {
        placeHolderBox.replaceWith(insertedElement);
    } else {
        container.appendChild(insertedElement);
    }

    if (insertedElement.innerHTML.startsWith('-empty-')) {
        insertedElement.innerHTML = insertedElement.innerHTML.replace('-empty-', '');
    }

    insertedElement.setAttribute('draggable', 'true');
    finishDrag(false);

    if (sourceContainer && sourceContainer !== targetContainer) {
        dispatchContainerChange(sourceContainer);
    }
    dispatchContainerChange(targetContainer);
};

export const disableElementAddingMode = () => {
    if (dragSession?.type === 'add') {
        finishDrag();
        return;
    }

    isElementAddingMode.value = false;
    elementToInsert.value = null;

    if (!isElementMovingMode.value) {
        clearPlaceholder();
    }
};

const updatePlaceholderPosition = (position: {
    container: HTMLElement;
    clientX: number;
    clientY: number;
}) => {
    const { container, clientX, clientY } = position;

    updatePlaceholderDimensions(container);

    const placeholder = createPlaceholder(container);

    if (dragSession?.placeholderWidth) {
        placeholder.style.width = `${dragSession.placeholderWidth}px`;
    }
    if (dragSession?.placeholderHeight) {
        placeholder.style.height = `${dragSession.placeholderHeight}px`;
    }

    const childNodes = getDirectChildren(container);
    const insertIndex = getClosestElementPosition(clientX, clientY, container);
    const reference = childNodes[insertIndex] ?? null;
    const isAlreadyInPosition = placeholder.parentElement === container
        && dragSession?.targetContainer === container
        && dragSession.targetIndex === insertIndex
        && (reference ? placeholder.nextElementSibling === reference : container.lastElementChild === placeholder);

    if (!isAlreadyInPosition) {
        if (reference) {
            container.insertBefore(placeholder, reference);
        } else {
            container.appendChild(placeholder);
        }
    }

    if (dragSession) {
        dragSession.targetContainer = container;
        dragSession.targetIndex = insertIndex;
    }
};

const schedulePlaceholderUpdate = (event: DragEvent, node: HTMLElement): boolean => {
    if (!dragSession) {
        return false;
    }

    const pointerChanged = !dragSession.lastPointer
        || dragSession.lastPointer.clientX !== event.clientX
        || dragSession.lastPointer.clientY !== event.clientY;

    dragSession.lastPointer = {
        clientX: event.clientX,
        clientY: event.clientY,
    };

    if (!pointerChanged) {
        return false;
    }

    dragSession.pendingPosition = {
        container: node,
        clientX: event.clientX,
        clientY: event.clientY,
    };

    if (dragSession.frameId !== null) {
        return true;
    }

    dragSession.frameId = requestAnimationFrame(() => {
        if (!dragSession?.pendingPosition) {
            if (dragSession) {
                dragSession.frameId = null;
            }
            return;
        }

        const position = dragSession.pendingPosition;
        dragSession.pendingPosition = null;
        dragSession.frameId = null;
        updatePlaceholderPosition(position);
    });

    return true;
};

const setDropTarget = (node: HTMLElement) => {
    if (dropTarget === node) {
        return;
    }

    clearDropTarget();
    dropTarget = node;
    dropTarget.classList.add('sp-element__drop-target');
};

const prepareDropTarget = (event: DragEvent, node: Node) => {
    if (
        (!isElementAddingMode.value && !isElementMovingMode.value)
        || !isSupportedElement(node)
        || !dragSession
    ) {
        return;
    }

    event.preventDefault();
    event.stopPropagation();
    setDropTarget(node);
};

export const displayPlaceholder = (event: DragEvent, node: Node) => {
    if (
        (!isElementAddingMode.value && !isElementMovingMode.value)
        || !isSupportedElement(node)
        || !dragSession
    ) {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (schedulePlaceholderUpdate(event, node)) {
        setDropTarget(node);
    }
};

export const moveElement = (event: DragEvent, node: Node) => {
    if (!isSupportedElement(node) || isElementAddingMode.value || isPopUpOpened.value || dragSession) {
        return;
    }

    const sourceContainer = node.parentElement;

    if (!sourceContainer) {
        return;
    }

    const sourceIndex = getDirectChildren(sourceContainer).indexOf(node);
    const rect = node.getBoundingClientRect();

    draggedElement = node;
    dragSession = {
        type: 'move',
        sourceContainer,
        sourceIndex,
        targetContainer: sourceContainer,
        targetIndex: sourceIndex,
        placeholderWidth: rect.width,
        placeholderHeight: rect.height,
        originalStyle: node.getAttribute('style'),
        pendingPosition: null,
        frameId: null,
        lastPointer: null,
    };
    isElementMovingMode.value = true;
    draggedElement.classList.add('sp-element__dragging');
    draggedElement.style.position = 'fixed';
    draggedElement.style.left = '-100000px';
    draggedElement.style.top = '-100000px';
    draggedElement.style.width = `${rect.width}px`;
    draggedElement.style.height = `${rect.height}px`;
    draggedElement.style.visibility = 'hidden';
    draggedElement.style.pointerEvents = 'none';
    const placeholder = createPlaceholder(sourceContainer);

    placeholder.style.width = `${rect.width}px`;
    placeholder.style.height = `${rect.height}px`;
    insertAtPosition(sourceContainer, placeholder, sourceIndex);
    event.dataTransfer?.setData('text/plain', draggedElement.dataset.simplisitiid || draggedElement.tagName);

    if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move';
    }
};

export const enableElementAddingMode = (tagName: SupportedTags, event?: DragEvent) => {
    if (dragSession) {
        finishDrag();
    }

    isElementAddingMode.value = true;
    const elementFactory = createFactory(tagName);
    elementToInsert.value = elementFactory.create();
    dragSession = {
        type: 'add',
        sourceContainer: null,
        sourceIndex: -1,
        targetContainer: null,
        targetIndex: -1,
        placeholderWidth: 0,
        placeholderHeight: newElementPlaceholderHeight,
        originalStyle: null,
        pendingPosition: null,
        frameId: null,
        lastPointer: null,
    };

    event?.dataTransfer?.setData('text/plain', `new:${tagName}`);
    if (event?.dataTransfer) {
        event.dataTransfer.effectAllowed = 'copy';
    }
};

const getClosestElementPosition = (clientX: number, clientY: number, node: HTMLElement): number => {
    const elements = getDirectChildren(node);
    const computedStyle = node.ownerDocument.defaultView?.getComputedStyle(node);
    const isRow = node.classList.contains('sp-style__layout-flex-direction__row')
        || computedStyle?.flexDirection === 'row'
        || computedStyle?.flexDirection === 'row-reverse';

    for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        const midpoint = isRow
            ? rect.left + rect.width / 2
            : rect.top + rect.height / 2;
        const pointer = isRow ? clientX : clientY;

        if (pointer < midpoint) {
            return i;
        }
    }

    return elements.length;
};

const setDraggableElements = (root: HTMLElement) => {
    if (isSupportedElement(root) && !isPreviewRoot(root, root)) {
        root.setAttribute('draggable', 'true');
    }

    root.querySelectorAll<HTMLElement>(supportedSelector).forEach((supportedElement) => {
        if (!isInteractionPlaceholder(supportedElement)) {
            supportedElement.setAttribute('draggable', 'true');
        }
    });
};

const clearInteractionState = (root: HTMLElement) => {
    root.querySelectorAll<HTMLElement>('.sp-element__active, .sp-element__hover, .sp-element__dragging, .sp-element__drop-target')
        .forEach((activeElement) => {
            activeElement.classList.remove(...editorInteractionClasses);
        });

    finishDrag(false);

    root.querySelectorAll<HTMLElement>(supportedSelector).forEach((supportedElement) => {
        supportedElement.removeAttribute('draggable');
    });

    clearPlaceholder();

    if (element.value && isInsideRoot(element.value, root)) {
        element.value = null;
        isPopUpOpened.value = false;
    }

    dropTarget = null;
    elementToInsert.value = null;
    isElementAddingMode.value = false;
    isElementMovingMode.value = false;
};

export const initializeElementInteractionLayer = (root: HTMLElement): (() => void) => {
    const currentCleanup = interactionLayers.get(root);

    if (currentCleanup) {
        return currentCleanup;
    }

    root.dataset.simplisitiInteractionLayer = 'true';
    setDraggableElements(root);

    const onPointerOver = (event: PointerEvent) => {
        const node = findSupportedElement(event.target, root);
        const previousNode = findSupportedElement(event.relatedTarget, root);

        if (node && node !== previousNode) {
            activateElement(event, node);
        }
        if (previousNode && previousNode !== node) {
            deactivateElement(event, previousNode);
        }
    };

    const onPointerOut = (event: PointerEvent) => {
        const node = findSupportedElement(event.target, root);
        const nextNode = findSupportedElement(event.relatedTarget, root);

        if (node && node !== nextNode) {
            deactivateElement(event, node);
        }
    };

    const onPointerDown = (event: PointerEvent) => {
        pointerGesture = {
            node: findSupportedElement(event.target, root),
            dragged: false,
        };
    };

    const onClick = (event: MouseEvent) => {
        const node = findSupportedElement(event.target, root);

        if (pointerGesture.dragged || dragSession || isElementMovingMode.value) {
            event.preventDefault();
            event.stopPropagation();
            resetPointerGesture();
            return;
        }

        if (node) {
            selectElement(event, node);
        }

        resetPointerGesture();
    };

    const preventDefaultAction = (event: Event) => {
        if (findSupportedElement(event.target, root)) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const onKeyDown = (event: KeyboardEvent) => {
        const node = findSupportedElement(event.target, root);

        if (node && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const onDragStart = (event: DragEvent) => {
        const node = findSupportedElement(event.target, root);

        if (!node) {
            return;
        }

        pointerGesture = {
            node,
            dragged: true,
        };

        if (isPopUpOpened.value) {
            cancelBlockedDrag(event);
            return;
        }

        moveElement(event, node);
    };

    const onDragOver = (event: DragEvent) => {
        const node = findContainerElement(event.target, root);

        if (node) {
            displayPlaceholder(event, node);
        }
    };

    const onDragEnter = (event: DragEvent) => {
        const node = findContainerElement(event.target, root);

        if (node) {
            prepareDropTarget(event, node);
        }
    };

    const onDrop = (event: DragEvent) => {
        const node = findContainerElement(event.target, root);

        if (node) {
            dropElementOnContainer(event, node);
        }
    };

    const onDragEnd = () => {
        if (isElementMovingMode.value) {
            finishDrag();
        }
    };

    const observer = new MutationObserver(() => setDraggableElements(root));

    root.addEventListener('pointerover', onPointerOver);
    root.addEventListener('pointerout', onPointerOut);
    root.addEventListener('pointerdown', onPointerDown);
    root.addEventListener('click', onClick);
    root.addEventListener('contextmenu', preventDefaultAction);
    root.addEventListener('dblclick', preventDefaultAction);
    root.addEventListener('auxclick', preventDefaultAction);
    root.addEventListener('selectstart', preventDefaultAction);
    root.addEventListener('keydown', onKeyDown);
    root.addEventListener('dragstart', onDragStart);
    root.addEventListener('dragenter', onDragEnter);
    root.addEventListener('dragover', onDragOver);
    root.addEventListener('drop', onDrop);
    root.addEventListener('dragend', onDragEnd);
    observer.observe(root, { childList: true, subtree: true });

    const cleanup = () => {
        root.removeEventListener('pointerover', onPointerOver);
        root.removeEventListener('pointerout', onPointerOut);
        root.removeEventListener('pointerdown', onPointerDown);
        root.removeEventListener('click', onClick);
        root.removeEventListener('contextmenu', preventDefaultAction);
        root.removeEventListener('dblclick', preventDefaultAction);
        root.removeEventListener('auxclick', preventDefaultAction);
        root.removeEventListener('selectstart', preventDefaultAction);
        root.removeEventListener('keydown', onKeyDown);
        root.removeEventListener('dragstart', onDragStart);
        root.removeEventListener('dragenter', onDragEnter);
        root.removeEventListener('dragover', onDragOver);
        root.removeEventListener('drop', onDrop);
        root.removeEventListener('dragend', onDragEnd);
        observer.disconnect();
        clearInteractionState(root);
        resetPointerGesture();
        delete root.dataset.simplisitiInteractionLayer;
        interactionLayers.delete(root);
    };

    interactionLayers.set(root, cleanup);

    return cleanup;
};
