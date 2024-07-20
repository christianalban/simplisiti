import { AsyncComponentLoader, Component, FunctionalComponent } from 'vue';

export interface WizardComponentImported {
    icon: string;
    title: string;
    component: Component | FunctionalComponent;
}

export interface WizardComponent {
    title: string;
    icon: string;
    component: AsyncComponentLoader<Component | FunctionalComponent>;
}

export interface WizardViewsTabs {
    [key: string]: WizardComponent;
}

export const WizardViews: WizardViewsTabs = {
    'layout': {
        title: 'Layout',
        icon: 'object-group',
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
