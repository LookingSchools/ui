import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_size_l.scss';

export interface ITextinputSizeLProps {
    /**
     * Размер текстового поля.
     */
    size?: 'l';
}

/**
 * Модификатор, отвечающий за размер текстового поля.
 * @param {ITextinputSizeLProps} props
 */
export const withSizeL = withBemMod<ITextinputSizeLProps>(cnTextinput(), {
    size: 'l',
});
