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
}
