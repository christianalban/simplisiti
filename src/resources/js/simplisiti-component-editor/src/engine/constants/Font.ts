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

export const fontSizeItems = (callback: (step: string) => string): SelectOption[] => {
    return FontSizeSteps.map((step) => ({
        value: callback(step).replace('.', '_'),
        label: step,
    }))
}
