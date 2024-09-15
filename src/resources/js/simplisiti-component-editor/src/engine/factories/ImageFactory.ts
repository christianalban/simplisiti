import { ElementInterface } from "./ElementInterface";

export class ImageFactory extends ElementInterface {
    createElement(): HTMLElement {
        const container = document.createElement('img');
        container.src = 'https://via.placeholder.com/150';
        return container;
    }
}
