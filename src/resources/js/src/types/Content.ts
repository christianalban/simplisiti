import { ComponentContent } from "./Component";

export interface ContentSubscriptions {
    [key: number]: (content: ComponentContent) => void;
}
