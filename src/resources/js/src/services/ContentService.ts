import { DataTableValue } from "../types/DataTable";
import { DataSourceValue } from "../types/DataSource";
import { Variable, VariableType } from "../types/Variable"
import { useResources } from "./ResourceService";

const { resourceFromId } = useResources();

export const valueOfTextType = (content: string|number|DataTableValue): string => {
    if (typeof content === 'string') {
        return content;
    }
    return '';
}

export const valueOfResourceType = (content: string|number|DataTableValue): string => {
    if (typeof content === 'number' || typeof content === 'string') {
        return resourceFromId(+content).url || '';
    }
    return '';
}

export const getValueOfType = (type: VariableType, content: string|number|DataTableValue): string|number|DataTableValue => {
    switch (type) {
        case 'text':
            return valueOfTextType(content);
        case 'resource':
            return valueOfResourceType(content);
        case 'datatable':
            return content;
        case 'textarea':
            return valueOfTextType(content);
        default:
            return '';
    }
}

export const replaceTextContentWithValues = (content: string, variable: Variable, value: string|number|DataTableValue): string => {
    return content.replace(`{{ $${variable.name} }}`, valueOfTextType(value));
} 

export const replaceBucleContentWithValues = (content: string, variable: Variable, value: DataSourceValue): string => {
    const match = [...content.matchAll(new RegExp(`<x-simplisiti::list-render.*${variable.name}.*?</x-simplisiti::list-render>`, 'gs'))];

    return match.reduce((acc, html) => {
        const htmlContent = html[0];
        const rawReplace = htmlContent
            ? htmlContent
                .replace(new RegExp(/<x-simplisiti::list-render.*items.*>/, 'm'), '')
                .replace(new RegExp(/<\/x-simplisiti::list-render>/, 'm'), '')
            : '';

        const attribute = [...rawReplace.matchAll(new RegExp(/\@{[{!]+\$dt->(.*.)(!!|})+}/g, ))];

        const variableValue = value || variable.value as DataSourceValue;

        const renderedBucle = variableValue.reduce((accBucle: string, valueBucle: any) => {
            return accBucle + attribute.reduce((accAttribute: string, attribute: string[]) => {
                const attributeToReplace = attribute[1];
                const valueForReplace = attribute[0];
                return accAttribute.replaceAll(valueForReplace, valueBucle[attributeToReplace]);
            }, rawReplace);
        }, '');

        return acc.replace(htmlContent, renderedBucle);
    }, content);
}

export const replaceContentWithValues = (html: string, variable: Variable, content: string|number|DataTableValue): string => {
    switch (variable.type) {
        case 'text':
            return replaceTextContentWithValues(html, variable, content);
        case 'resource':
            return html;
        case 'datatable':
            return html;
        case 'textarea':
            return html;
        case 'datasource':
            return replaceBucleContentWithValues(html, variable, content as DataSourceValue);
        default:
            return html;
    }
}
