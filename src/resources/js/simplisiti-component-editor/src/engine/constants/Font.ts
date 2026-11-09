import { SelectOption } from "./Select";

export type FontSize =
    '12' |
    '14' |
    '16' |
    '18' |
    '20' |
    '24' |
    '30' |
    '36' |
    '48' |
    '60' |
    '72' |
    '96' |
    '128';

export type FontStyle = 'normal' | 'line-through' | 'underline';

export type FontWeight = 'thin' | 'normal' | 'bold';

export const FontSizeSteps: FontSize[] = [
    '12',
    '14' ,
    '16' ,
    '18' ,
    '20' ,
    '24' ,
    '30' ,
    '36' ,
    '48',
    '60',
    '72',
    '96',
    '128',
];

export const FontStyleSteps: FontStyle[] = [
    'normal',
    'line-through',
    'underline',
];

export const FontWeightSteps: FontWeight[] = [
    'thin',
    'normal',
    'bold',
];

export const fontSizeItems = (callback: (step: string) => string): SelectOption[] => {
    return FontSizeSteps.map((step) => ({
        value: callback(step).replace('.', '_'),
        label: step,
    }))
}

export const fontStyleItems = (callback: (step: string) => string): SelectOption[] => {
    return FontStyleSteps.map((step) => ({
        value: callback(step),
        label: {
            'normal': 'Normal',
            'line-through': 'Tachado',
            'underline': 'Subrayado',
        }[step],
    }))
}

export const fontWeightItems = (callback: (step: string) => string): SelectOption[] => {
    return FontWeightSteps.map((step) => ({
        value: callback(step),
        label: {
            'thin': 'Delgado',
            'normal': 'Normal',
            'bold': 'Bold',
        }[step],
    }))
}
