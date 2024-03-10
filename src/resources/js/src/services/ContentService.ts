import { DataTableItem, DataTableValue } from "../types/DataTable";
import { DataSourceValue } from "../types/DataSource";
import { Variable, VariableType } from "../types/Variable"
import { useResources } from "./ResourceService";

const { resourceFromId } = useResources();

export const valueOfTextType = (content: string|number|DataTableValue|DataSourceValue): string => {
    if (typeof content === 'string') {
        return content?.toString();
    }
    return '';
}

export const valueOfResourceType = (content: string|number|DataTableValue|DataSourceValue): string => {
    if (typeof content === 'number' || typeof content === 'string') {
        return resourceFromId(+content).url || '';
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
                if (!field || !fieldVariable) return accColumn;

                const valueOfType = getValueOfType(field?.type, fieldVariable);

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

export const replaceTextContentWithValues = (content: string, variable: Variable, value: string|number): string => {
    return content.replaceAll(new RegExp(`{{\\s*\\$${variable.name}\\s*}}`, 'g'), valueOfTextType(value));
} 

export const replaceBucleContentWithValues = (content: string, variable: Variable, value: DataSourceValue | DataTableValue): string => {
    const match = [...content.matchAll(new RegExp(`<x-simplisiti::list-render.*${variable.name}.*?</x-simplisiti::list-render>`, 'gs'))];

    return match.reduce((acc, html) => {
        const htmlContent = html[0];
        const rawReplace = htmlContent
            ? htmlContent
                .replace(new RegExp(/<x-simplisiti::list-render.*items.*>/, 'm'), '')
                .replace(new RegExp(/<\/x-simplisiti::list-render>/, 'm'), '')
            : '';

        const attribute = [...rawReplace.matchAll(new RegExp(/\@{[{!]+\s*\$dt->(.*.)(!!|})+}/g, ))];

        const variableValue = (value || variable.value) as DataSourceValue;

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

export const replaceContentWithValues = (html: string, variable: Variable, content: string|number|DataSourceValue|DataTableItem): string => {
    let htmlContent = html;

    htmlContent = replaceBucleContentWithValues(htmlContent, variable, content as DataSourceValue);

    htmlContent = replaceTextContentWithValues(htmlContent, variable, content as string|number);

    return htmlContent;
}
