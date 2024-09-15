import { SupportedTags } from "../constants/HtmlTagsMappings";
import { ElementInterface } from "./ElementInterface";
import { AncordFactory } from "./AncordFactory";
import { ContainerFactory } from "./ContainerFactory";
import { ParagraphFactory } from "./ParagaphFactory";

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

    throw new Error('Invalid type');
}
