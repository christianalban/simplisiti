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
