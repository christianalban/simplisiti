import { SelectOption } from './Select';
import { SpacingSteps, Spacings } from './Spacing';

export type BorderRadiusCorner = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export interface BorderRadiusConfig {
    'top-left'?: Spacings;
    'top-right'?: Spacings;
    'bottom-right'?: Spacings;
    'bottom-left'?: Spacings;
}

export const borderRadiusItems = (corner: BorderRadiusCorner): SelectOption[] => {
    return SpacingSteps.map((step) => ({
        value: `sp-style__border-radius-${corner}__${step}`.replace('.', '_'),
        label: step,
    }));
};
