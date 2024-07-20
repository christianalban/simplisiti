import { Component } from 'vue';

export interface WizardComponent {
    icon: string;
    component: Component | (() => Promise<Component>);
}

export interface WizardViewsTabs {
    [key: string]: WizardComponent;
}

export const WizardViews: WizardViewsTabs = {
    'layout': {
        icon: 'square-full',
        component: () => import('../../components/wizard/views/Layout.vue')
    },
}

export interface AvailableWizardViews {
    [key: string]: AvailableWizards[];
}

export const AvailableWizard: AvailableWizardViews = {
    'container': [
        'layout',
    ],
    'ancord': [
    ],
};

export type AvailableWizards = 'layout';
