import { defineAsyncComponent } from "vue";

export interface ElementTab {
    icon: string;
    component: ReturnType<typeof defineAsyncComponent>;
}

export const ElementsTabs: ElementTab[] = [
    {
        icon: 'cube',
        component: defineAsyncComponent(() => import('../../components/element-floating-panel/ElementsPanel.vue')),
    },
    {
        icon: 'comment-dots',
        component: defineAsyncComponent(() => import('../../components/element-floating-panel/CodeGeneratorPanel.vue')),
    },
];
