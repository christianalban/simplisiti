import { activateElement, deactivateElement, displayPlaceholder, dropElementOnContainer, moveElement, selectElement } from "../services/ElementManagerService";

export abstract class ElementInterface {
    abstract createElement(): HTMLElement;

    create(): HTMLElement {
        const element = this.createElement();
        ElementInterface.addElementListeners(element);
        return element;
    }

    static addElementListeners(node: Node): void {
        node.addEventListener('click', (event: Event) => selectElement(event, node));

        node.addEventListener('mouseover', (event: Event) => activateElement(event, node));

        node.addEventListener('mouseout', (event: Event) => deactivateElement(event, node));

        const element = node as Element;
        if (element.tagName === 'DIV') {
            element.addEventListener('dragover', (event: Event) => displayPlaceholder(event, node));
            element.addEventListener('drop', (event: Event) => dropElementOnContainer(event, node));
        }

        element.setAttribute('draggable', 'true');

        node.addEventListener('drag', (event: Event) => moveElement(event, node));
    }
}
    
