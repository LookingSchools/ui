import { withBemMod } from '@bem-react/core';

import { cnColorBox } from '../ColorBox';
import './ColorBox_theme_default.scss';

export interface IColorBoxThemeDefaultProps {
    /**
     * Внешний вид радио-бокса
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид радио-бокса.
 * @param {IColorBoxThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IColorBoxThemeDefaultProps>(cnColorBox(), { theme: 'default' });
