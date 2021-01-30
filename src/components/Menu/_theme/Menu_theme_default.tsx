import { withBemMod } from '@bem-react/core';

import { cnMenu } from '../Menu';
import './Menu_theme_default.scss';

export interface IMenuThemeDefaultProps {
    /**
     * Внешний вид меню
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид меню.
 * @param {IMenuThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IMenuThemeDefaultProps>(cnMenu(), { theme: 'default' });
