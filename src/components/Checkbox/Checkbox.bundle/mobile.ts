import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

// base
import { ICheckboxProps as ICheckboxTouchPhoneProps, Checkbox as CheckboxTouchPhone } from '../Checkbox@mobile';
// _lines
import { withLinesMulti } from '../_lines/Checkbox_lines_multi';
import { withLinesOne } from '../_lines/Checkbox_lines_one';
// _size
import { withSizeM } from '../_size/Checkbox_size_m';
import { withSizeS } from '../_size/Checkbox_size_s';
// _theme
import { withThemeDefault } from '../_theme/Checkbox_theme_default';

// _indeterminate
import { withIndeterminate } from '../_indeterminate/Checkbox_indeterminate';

export * from '../Checkbox@mobile';

export interface ICheckboxProps extends ICheckboxTouchPhoneProps {
    lines?: 'multi' | 'one';
    size?: 'm' | 's';
    theme?: 'normal' | 'pseudo' | 'default';
    indeterminate?: boolean;
}

export const Checkbox = compose(
    withThemeDefault,
    withIndeterminate,
    composeU(withLinesMulti, withLinesOne),
    composeU(withSizeM, withSizeS),
)(CheckboxTouchPhone) as FC<ICheckboxProps>;
