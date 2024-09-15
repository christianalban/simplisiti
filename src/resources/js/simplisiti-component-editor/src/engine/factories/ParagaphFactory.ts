import { ElementInterface } from "./ElementInterface";

export class ParagraphFactory extends ElementInterface {
    createElement(): HTMLElement {
        const container = document.createElement('p');
        container.innerHTML = 'Parrafo';
        return container;
    }
}
