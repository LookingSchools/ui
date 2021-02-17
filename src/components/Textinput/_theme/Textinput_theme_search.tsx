import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_theme_search.scss';

export interface ITextinputThemeSearchProps {
    /**
     * Внешний вид текстового поля.
     */
    theme?: 'search';
}

/**
 * Модификатор, отвечающий за внешний вид текстового поля.
 * @param {ITextinputThemeSearchProps} props
 */
export const withThemeSearch = withBemMod<ITextinputThemeSearchProps>(cnTextinput(), { theme: 'search' });
