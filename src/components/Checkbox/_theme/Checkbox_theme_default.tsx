import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_theme_default.scss';

export interface ICheckboxThemeDefaultProps {
    /**
     * Внешний вид переключателя
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид переключателя.
 * @param {ICheckboxThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<ICheckboxThemeDefaultProps>(cnCheckbox(), { theme: 'default' });
