import { HTML_ALIAS } from "../constants/HtmlTagsMappings";
import { AvailableWizard, WizardComponent, WizardViews } from "../constants/WizardPages";

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
