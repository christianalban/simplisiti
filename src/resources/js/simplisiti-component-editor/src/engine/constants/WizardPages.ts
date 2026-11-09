import { AsyncComponentLoader, Component, FunctionalComponent } from 'vue';
import { ContentTypeValue } from './Content';
import { AttributeTypeValue } from './Attribute';

export interface WizardComponentImported {
    tab?: AvailableWizards;
    icon: string;
    title: string;
    component: Component | FunctionalComponent;
    spClassList: string[];
    spStyleList: StyleValue;
    spContent: ContentTypeValue;
    spAttribute: AttributeTypeValue;
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
    'background': {
        title: 'Color de fondo',
        icon: 'fill-drip',
        component: () => import('../../components/wizard/views/background/Background.vue')
    },
    'border-radius': {
        title: 'Redondeado',
        icon: 'border-all',
        component: () => import('../../components/wizard/views/border-radius/BorderRadius.vue')
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
    'url': {
        title: 'URL',
        icon: 'link',
        component: () => import('../../components/wizard/views/url/Url.vue')
    },
    'src': {
        title: 'SRC',
        icon: 'link',
        component: () => import('../../components/wizard/views/src/Src.vue')
    },
}

export interface AvailableWizardViews {
    [key: string]: AvailableWizards[];
}

export const AvailableWizard: AvailableWizardViews = {
    'container': [
        'layout',
        'spacing',
        'background',
        'border-radius',
    ],
    'ancord': [
        'spacing',
        'background',
        'border-radius',
        'font',
        'content',
        'url',
    ],
    'paragraph': [
        'spacing',
        'background',
        'border-radius',
        'font',
        'content',
    ],
    'header1': [
        'spacing',
        'background',
        'border-radius',
        'font',
        'content',
    ],
    'image': [
        'spacing',
        'background',
        'border-radius',
        'src',
    ],
};

export type AvailableWizards = 'layout' | 'spacing' | 'background' | 'border-radius' | 'font' | 'content' | 'url' | 'src';

export interface StyleValue {
    [key: string]: string;
}

export type StylesProperties = 'color' | 'background-color';

export const StylesPropertiesList: StylesProperties[] = [
    'color',
    'background-color',
];
