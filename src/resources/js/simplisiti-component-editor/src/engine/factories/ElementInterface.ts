export abstract class ElementInterface {
    abstract createElement(): HTMLElement;

    create(): HTMLElement {
        return this.createElement();
    }
}
    
