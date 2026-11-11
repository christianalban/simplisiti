import { SelectOption } from "./Select";

export type SpacingType = 'margin' | 'padding';

export type SpacingBorder = 'top' | 'bottom' | 'left' | 'right';

export type SizingType = 'width' | 'height';

export type SizingPreset = 'auto' | 'full' | 'screen';

export type ViewportStep =
    '0' |
    '10' |
    '20' |
    '30' |
    '40' |
    '50' |
    '60' |
    '70' |
    '80' |
    '90' |
    '100';

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
    return SpacingSteps.map((step) => {
        return ({
            value: callback(step).replace('.', '_'),
            label: step,
        })
    })
}

export const SizingSteps = SpacingSteps;

export const ViewportSteps: ViewportStep[] = [
    '0',
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
];

export interface SizingConfig {
    width?: string;
    height?: string;
}

export const sizingItems = (type: SizingType): SelectOption[] => {
    const viewportUnit = type === 'width' ? 'vw' : 'vh';

    return [
        ...SizingSteps.map((step) => ({
            value: `sp-style__sizing-${type}__${step}`.replace('.', '_'),
            label: step,
        })),
        {
            value: `sp-style__sizing-${type}__auto`,
            label: 'Auto',
        },
        {
            value: `sp-style__sizing-${type}__full`,
            label: 'Full (100%)',
        },
        {
            value: `sp-style__sizing-${type}__screen`,
            label: `Screen (100${viewportUnit})`,
        },
        ...ViewportSteps.map((step) => ({
            value: `sp-style__sizing-${type}__viewport-${step}`,
            label: `${step}% (${viewportUnit})`,
        })),
    ];
};

export interface SpacingConfig {
    top?: Spacings;
    bottom?: Spacings;
    left?: Spacings;
    right?: Spacings;
}
