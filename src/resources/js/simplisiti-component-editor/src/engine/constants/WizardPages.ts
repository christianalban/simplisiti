import { AsyncComponentLoader, Component, FunctionalComponent } from 'vue';
import { ContentTypeValue } from './Content';

export interface WizardComponentImported {
    tab?: AvailableWizards;
    icon: string;
    title: string;
    component: Component | FunctionalComponent;
    spClassList: string[];
    spStyleList: StyleValue;
    spContent: ContentTypeValue;
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
    'content': {
        title: 'Contenido',
        icon: 'paragraph',
        component: () => import('../../components/wizard/views/content/Content.vue')
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
        'content',
    ],
};

export type AvailableWizards = 'layout' | 'spacing' | 'font' | 'content';

export interface StyleValue {
    [key: string]: string;
}

export type StylesProperties = 'color';

export const StylesPropertiesList: StylesProperties[] = [
    'color',
];
