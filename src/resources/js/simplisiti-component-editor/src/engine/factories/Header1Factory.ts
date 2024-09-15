import { ElementInterface } from "./ElementInterface";

export class Header1Factory extends ElementInterface {
    createElement(): HTMLElement {
        const container = document.createElement('h1');
        container.innerHTML = 'Cabecera 1';
        return container;
    }
}
