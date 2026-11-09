import { HTML_ALIAS } from "../constants/HtmlTagsMappings";
import { AvailableWizard, WizardComponent, WizardViews } from "../constants/WizardPages";
import { initializeElementInteractionLayer } from "../services/ElementManagerService";

export const aliasFromTagName = (tagName: string): WizardComponent[] => {
    const alias = HTML_ALIAS[tagName];
    const availableWizard = AvailableWizard[alias];

    return availableWizard.map((wizard) => {
        return {
            tab: wizard,
            ...WizardViews[wizard],
        };
    });
}

export const propagateClassGroup = <T>(group: string, spClassList: string[]) => {
    return spClassList.find(item => item.startsWith(group)) as T
}

const componentToHex = (c: number) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}


export const rgbaToHex = (rgba: string): string => {
    if (rgba === '') {
        return '';
    }
    if (rgba.match(/#[0-9A-Fa-f]{6}/)) {
        return rgba;
    }
    const rgbaValues = rgba.match(/\d+/g) as unknown as string[];
    const r = parseInt(rgbaValues[0]);
    const g = parseInt(rgbaValues[1]);
    const b = parseInt(rgbaValues[2]);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const previewSelector = '[data-simplisitiid="simplisiti-component-preview"]';

export const getComponentPreview = (documentRoot: Document = document): HTMLElement | null => {
    return documentRoot.querySelector<HTMLElement>(previewSelector);
};

export const waitForComponentPreview = (
    documentRoot: Document = document,
    timeout = 5000,
): Promise<HTMLElement> => {
    const existingPreview = getComponentPreview(documentRoot);

    if (existingPreview) {
        return Promise.resolve(existingPreview);
    }

    return new Promise((resolve, reject) => {
        const observationRoot = documentRoot.body ?? documentRoot.documentElement;
        const observer = new MutationObserver(() => {
            const preview = getComponentPreview(documentRoot);

            if (preview) {
                window.clearTimeout(timeoutId);
                observer.disconnect();
                resolve(preview);
            }
        });
        const timeoutId = window.setTimeout(() => {
            observer.disconnect();
            reject(new Error('The component preview was not found in the editor iframe.'));
        }, timeout);

        observer.observe(observationRoot, { childList: true, subtree: true });
    });
};

export const initSupportedElements = (componentPreview: HTMLElement): (() => void) => {
    return initializeElementInteractionLayer(componentPreview);
};
