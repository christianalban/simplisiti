import { ElementInterface } from "./ElementInterface";

export class ContainerFactory extends ElementInterface {
    createElement(): HTMLElement {
        const container = document.createElement('div');
        container.classList.add(
            'sp-style__layout-display__flex',
            'sp-style__layout-flex-direction__column',
            'sp-style__spacing-padding-top__1',
            'sp-style__spacing-padding-bottom__1',
            'sp-style__spacing-padding-left__1',
            'sp-style__spacing-padding-right__1',
        );
        container.innerHTML = '-empty-';
        return container;
    }
}
