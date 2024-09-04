import { AsyncComponentLoader, Component, FunctionalComponent } from 'vue';

export interface WizardComponentImported {
    tab?: AvailableWizards;
    icon: string;
    title: string;
    component: Component | FunctionalComponent;
    spClassList: string[];
}

export interface WizardComponent {
    tab?: AvailableWizards;
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
        component: () => import('../../components/wizard/views/layout/Layout.vue')
    },
    'spacing': {
        title: 'Espaciado',
        icon: 'expand',
        component: () => import('../../components/wizard/views/spacing/Spacing.vue')
    },
    'font': {
        title: 'Fuente',
        icon: 'font',
        component: () => import('../../components/wizard/views/font/Font.vue')
    },
}

export interface AvailableWizardViews {
    [key: string]: AvailableWizards[];
}

export const AvailableWizard: AvailableWizardViews = {
    'container': [
        'layout',
        'spacing',
    ],
    'ancord': [
        'spacing',
        'font',
    ],
};

export type AvailableWizards = 'layout' | 'spacing' | 'font';
