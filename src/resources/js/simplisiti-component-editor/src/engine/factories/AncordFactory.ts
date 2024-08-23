import { ElementInterface } from "./ElementInterface";

export class AncordFactory extends ElementInterface {
    createElement(): HTMLElement {
        const container = document.createElement('a');
        container.innerHTML = 'Enlace';
        return container;
    }
}
