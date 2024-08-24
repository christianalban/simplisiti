import { ref } from "vue";
import { createFactory } from "../factories/ElementFactory";
import { SupportedTags } from "../constants/HtmlTagsMappings";

let placeHolderBox: HTMLDivElement | null = null;

export const isElementAddingMode = ref(false);
export const isPopUpOpened = ref(false);
export const element = ref<HTMLElement | null>(null);
export const toAddElementPlaceholder = ref<HTMLElement | null>(null);

export const selectElement = (event: Event, node: Node) => {
    if (!isPopUpOpened.value) {
            isPopUpOpened.value = true;
            element.value = node as HTMLElement;
            (node as HTMLElement).classList.add('sp-element__active');
        }
        event.preventDefault();
        event.stopPropagation();
}

export const activateElement = (event: Event, node: Node) => {
    if (!isPopUpOpened.value) {
        (node as HTMLElement).classList.add('sp-element__active');
    }
    event.preventDefault();
    event.stopPropagation();
}

export const deactivateElement = (event: Event, node: Node) => {
    if (!isPopUpOpened.value) {
        (node as HTMLElement).classList.remove('sp-element__active');
    }

    event.preventDefault();
    event.stopPropagation();
}

export const dropElementOnContainer = (event: Event, node: Node) => {
    const element = (node as HTMLElement);

    if (toAddElementPlaceholder.value !== null) {
        placeHolderBox?.replaceWith(toAddElementPlaceholder.value);
    }

    if (element.innerHTML.startsWith('-empty-')) {
        element.innerHTML = element.innerHTML.replace('-empty-', '');
    }

    window.parent.document.dispatchEvent(new CustomEvent('elementRemoved', {
        detail: {
            simplisitiId: toAddElementPlaceholder.value?.dataset.simplisitiid,
        },
    }));

    window.parent.document.dispatchEvent(new CustomEvent('contentChange', {
        detail: {
            simplisitiId: element.dataset.simplisitiid,
            content: element.innerHTML,
        },
    }));

    isElementAddingMode.value = false;
    toAddElementPlaceholder.value = null;

    event.preventDefault();
    event.stopPropagation();
}

const displayToAddElementPlaceholder = (event: Event, node: Node) => {
    if (placeHolderBox === null) {
        placeHolderBox = document.createElement('div');
        placeHolderBox.id = 'sp-element__placeholder';
        placeHolderBox.classList.add('sp-element__placeholder');
    }
    
    const childNodes = Array.from(node.childNodes).filter((item) => item.nodeName != '#text');
    const insertIndex = getClousestElementPosition(event as MouseEvent, node);
    if (childNodes[insertIndex] !== undefined) {
        node.insertBefore(placeHolderBox, childNodes[insertIndex]);
    } else {
        node.appendChild(placeHolderBox);
    }
}

export const displayPlaceholder = (event: Event, node: Node) => {
    activateElement(event, node);

    if (isElementAddingMode.value && node.nodeName !== 'DIV') {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

    if (isElementAddingMode.value && toAddElementPlaceholder.value !== null) {
        displayToAddElementPlaceholder(event, node);
    }
}

export const moveElement = (event: Event, node: Node) => {
    if (isElementAddingMode.value) {
        return;
    }
    isElementAddingMode.value = true;
    toAddElementPlaceholder.value = node as HTMLElement;
    event.preventDefault();
    event.stopPropagation();
}

export const enableElementAddingMode = (tagName: SupportedTags) => {
    isElementAddingMode.value = true;
    const elementFactory = createFactory(tagName);
    toAddElementPlaceholder.value = elementFactory.create();
};

const getClousestElementPosition = (event: MouseEvent, node: Node): number => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const items = node.childNodes.values();
    const elements = Array.from(items).filter((item) => item.nodeName != '#text');

    for (let i = 0; i < elements.length; i++) {
        const rect = (elements[i] as HTMLElement).getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;

        const elementClassList = (node as HTMLElement).classList;
        if (mouseX < itemX && elementClassList.contains('sp-style__layout-flex-direction__row')) {
            return i;
        }
        if (mouseY < itemY && elementClassList.contains('sp-style__layout-flex-direction__column')) {
            return i;
        }
    };

    return elements.length;
}
