import { SelectOption } from "./Select";

export type SpacingType = 'margin' | 'padding';

export type SpacingBorder = 'top' | 'bottom' | 'left' | 'right';

export type Spacings = 
    '0' |
    '0.5' |
    '1' |
    '1.5' |
    '2' |
    '2.5' |
    '3' |
    '3.5' |
    '4' |
    '5' |
    '6' |
    '7' |
    '8' |
    '9' |
    '10' |
    '11' |
    '12' |
    '14' |
    '16' |
    '20' |
    '24' |
    '28' |
    '32' |
    '36' |
    '40' |
    '44' |
    '48' |
    '52' |
    '56' |
    '60' |
    '64' |
    '72' |
    '80' |
    '96' ;

export const SpacingSteps: Spacings[] = [
    '0',
    '0.5' ,
    '1' ,
    '1.5' ,
    '2' ,
    '2.5' ,
    '3' ,
    '3.5' ,
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '14',
    '16',
    '20',
    '24',
    '28',
    '32',
    '36',
    '40',
    '44',
    '48',
    '52',
    '56',
    '60',
    '64',
    '72',
    '80',
    '96',
];

export const spacingItems = (callback: (step: string) => string): SelectOption[] => {
    return SpacingSteps.map((step) => ({
        value: callback(step).replace('.', '_'),
        label: step,
    }))
}
