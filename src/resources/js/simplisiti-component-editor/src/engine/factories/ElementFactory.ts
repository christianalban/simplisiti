import { SupportedTags } from "../constants/HtmlTagsMappings";
import { ElementInterface } from "./ElementInterface";
import { AncordFactory } from "./AncordFactory";
import { ContainerFactory } from "./ContainerFactory";

export const createFactory = (type: SupportedTags): ElementInterface => {
    if (type === 'div') {
        return new ContainerFactory();
    }

    if (type === 'a') {
        return new AncordFactory();
    }

    throw new Error('Invalid type');
}
