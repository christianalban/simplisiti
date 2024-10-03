import { ElementInterface } from "./ElementInterface";
import { SupportedTags } from "../constants/HtmlTagsMappings";
import { AncordFactory } from "./AncordFactory";
import { ContainerFactory } from "./ContainerFactory";
import { ParagraphFactory } from "./ParagaphFactory";
import { Header1Factory } from "./Header1Factory";
import { ImageFactory } from "./ImageFactory";

export const createFactory = (type: SupportedTags): ElementInterface => {
    if (type === 'div') {
        return new ContainerFactory();
    }

    if (type === 'a') {
        return new AncordFactory();
    }

    if (type === 'p') {
        return new ParagraphFactory();
    }

    if (type === 'h1') {
        return new Header1Factory();
    }

    if (type === 'img') {
        return new ImageFactory();
    }

    throw new Error('Invalid type');
}
