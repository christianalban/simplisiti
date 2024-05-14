import { DataTableItem, DataTableValue } from "../types/DataTable";
import { DataSourceValue } from "../types/DataSource";
import { VariableType } from "../types/Variable"
import { useResources } from "./ResourceService";

import { Component, ComponentContent, ContentValue } from "../types/Component";
import { ContentSubscriptions } from "../types/Content";

const { resourceFromId } = useResources();

export const valueOfTextType = (content: string|number|DataTableValue|DataSourceValue): string => {
    if (typeof content === 'string') {
        return content?.toString();
    }
    return '';
}

export const valueOfResourceType = (content: string|number|DataTableValue|DataSourceValue): string => {
    if (typeof content === 'number' || typeof content === 'string') {
        return resourceFromId(+content)?.url || '';
    }
    return '';
}

export const valueOfDataTableType = (content: string|number|DataTableValue|DataSourceValue): DataTableItem[] => {
    if (typeof content !== 'number' || typeof content !== 'string') {
        const dataTableValue = content as DataTableValue;
        return dataTableValue.rows.reduce((acc: DataTableItem[], row) => {
            const obj =  dataTableValue.columns.reduce((accColumn: DataTableItem, column) => {
                const field = row.find((row) => row.name === column.name);
                const fieldVariable = field?.value || field?.default;

                const valueOfType = (!field?.type || !fieldVariable)
                    ? null
                    : getValueOfType(field?.type, fieldVariable);

                accColumn[column.name] = valueOfType;

                return accColumn;
            }, {});

            return [...acc, obj];
        }, []);
    }

    return [];
}

export const getValueOfType = (type: VariableType, content: string|number|DataTableValue|DataSourceValue): string|number|DataTableItem[] => {
    switch (type) {
        case 'text':
            return valueOfTextType(content);
        case 'resource':
            return valueOfResourceType(content);
        case 'datatable':
            return valueOfDataTableType(content);
        case 'textarea':
            return valueOfTextType(content);
        default:
            return '';
    }
}

export const parseComponentContent = (component: Component, content?: ComponentContent): ContentValue => {
    const componentContent =  component.variables.reduce((carrier, variable) => {
        const contentValue = content && content[variable.name]
            ? content[variable.name]
            : component.variables.find(v => v.name === variable.name)?.default;
        const value = contentValue ? getValueOfType(variable.type, contentValue) : '';

        carrier[variable.name] = value;

        return carrier;
    }, {} as ContentValue);

    return componentContent;
};

export class ContentObserver {
    private component?: Component;
    private subscribedComponents: ContentSubscriptions = {};

    subscribe(component: Component, callback: (content: ContentValue) => void): void {
        if (component.id) {
            this.subscribedComponents[component.id] = callback;
        }
    }

    attach(component: Component): void {
        this.component = component;
    }

    detach(): void {
        this.component = undefined;
    }

    update(): void {
        if (this.component && this.component.id) {
            this.subscribedComponents[this.component.id]?.(parseComponentContent(this.component, this.component?.content) || {});
        }
    }
}

const observer = new ContentObserver();

export const useContentObserver = (): ContentObserver => {
    return observer;
}

