import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_clear.scss';

export interface IButtonThemeClearProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'clear';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeClearProps} props
 */
export const withThemeClear = withBemMod<IButtonThemeClearProps>(cnButton(), {
    theme: 'clear',
});
