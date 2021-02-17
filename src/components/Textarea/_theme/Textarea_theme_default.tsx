import { withBemMod } from '@bem-react/core';

import { cnTextarea } from '../Textarea';
import './Textarea_theme_default.scss';

export interface ITextareaThemeDefaultProps {
    /**
     * Стилевое оформление текстового поля.
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за стилевое оформление текстового поля.
 * @param {ITextareaThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<ITextareaThemeDefaultProps>(cnTextarea(), { theme: 'default' });
