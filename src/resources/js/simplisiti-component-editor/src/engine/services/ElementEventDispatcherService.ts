const dispatchElementEvent = (eventName: string, detail: any): void => {
    window.parent.document.dispatchEvent(new CustomEvent(eventName, { detail }));
}

export const dispatchElementRemoved = (simplisitiId: string | null): void => {
    dispatchElementEvent('elementRemoved', { simplisitiId });
}

export const dispatchContentChange = (simplisitiId: string | undefined, content: string): void => {
    dispatchElementEvent('contentChange', { simplisitiId, content });
}

export const dispatchElementChange = (simplisitiId: string, spClassList: string[]): void => {
    dispatchElementEvent('elementChange', { simplisitiId, spClassList });
}
