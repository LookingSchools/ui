import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_default.scss';

export interface IButtonThemeDefaultProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IButtonThemeDefaultProps>(cnButton(), { theme: 'default' });
