import { HTML_TAGS } from "../types/EditorEngine";

export class EditorEngine {
    private htmlString!: string;
    private document!: Document;

    public setHtmlString(htmlString: string) {
        this.htmlString = htmlString;
    }

    private getElements(): HTMLElement[] {
        return HTML_TAGS.map((tag) => {
            return Array.from(this.document.getElementsByTagName(tag));
        }).flat();
    }

    public compose(): EditorEngine {
        const parser = new DOMParser();

        const doc = parser.parseFromString(this.htmlString, 'text/html');

        this.document = doc;

        const divs: HTMLElement[] = this.getElements();

        divs.forEach((div: HTMLElement) => {
            if (div.dataset.simplisitiid) {
                return;
            }
            div.dataset.simplisitiid = Math.random().toString(36).substring(7);
        });


        return this;
    }

    public async getComposedHtmlString(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.document.body.innerHTML);
            }, 100);
        });
    }

    public updateClassOfElementBySimplisitiId(simplisitiId: string, spClassList: string[]): void {
        const element = this.document.querySelector(`[data-simplisitiid="${simplisitiId}"]`);

        if (element === null) {
            return;
        }

        element.classList.forEach((className: string) => {
            setTimeout(() => {
                if (className.startsWith('sp-style')) {
                    element.classList.remove(className);
                }
            }, 100);
        });
        spClassList.forEach((className: string) => {
            setTimeout(() => {
                element.classList.add(className)
            }, 100);
        });
    }

    public updateContainerContentBySimplisitiId(simplisitiId: string, content: string): void {
        const element = this.document.querySelector(`[data-simplisitiid="${simplisitiId}"]`);

        if (element === null) {
            return;
        }

        element.innerHTML = content;
    }
}
