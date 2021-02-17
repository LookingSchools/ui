import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_theme_default.scss';

export interface ITextinputThemeDefaultProps {
    /**
     * Внешний вид текстового поля.
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид текстового поля.
 * @param {ITextinputThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<ITextinputThemeDefaultProps>(cnTextinput(), { theme: 'default' });
