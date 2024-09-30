import { addElementListeners } from "../services/ElementManagerService";

export abstract class ElementInterface {
    abstract createElement(): HTMLElement;

    create(): HTMLElement {
        const element = this.createElement();
        addElementListeners(element);
        return element;
    }
}
    
