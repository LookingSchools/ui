import { withBemMod } from '@bem-react/core';

import { cnRadiobox } from '../Radiobox';
import './Radiobox_theme_default.scss';

export interface IRadioboxThemeDefaultProps {
    /**
     * Внешний вид радио-бокса
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид радио-бокса.
 * @param {IRadioboxThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IRadioboxThemeDefaultProps>(cnRadiobox(), { theme: 'default' });
