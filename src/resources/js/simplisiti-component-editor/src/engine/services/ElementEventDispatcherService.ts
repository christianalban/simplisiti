import { StyleValue } from "../constants/WizardPages";

const dispatchElementEvent = (eventName: string, detail: any): void => {
    window.parent.document.dispatchEvent(new CustomEvent(eventName, { detail }));
}

export const dispatchElementRemoved = (simplisitiId: string | null): void => {
    dispatchElementEvent('elementRemoved', { simplisitiId });
}

export const dispatchContentChange = (simplisitiId: string | undefined, content: string): void => {
    dispatchElementEvent('contentChange', { simplisitiId, content });
}

export const dispatchClassChange = (simplisitiId: string, spClassList: string[]): void => {
    dispatchElementEvent('classChange', { simplisitiId, spClassList });
}

export const dispatchStyleChange = (simplisitiId: string, spStyleList: StyleValue): void => {
    dispatchElementEvent('styleChange', { simplisitiId, spStyleList });
}
