import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_size_s.scss';

export interface IButtonSizeSProps {
    /**
     * Размер кнопки
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер кнопки.
 * @param {IButtonSizeSProps} props
 */
export const withSizeS = withBemMod<IButtonSizeSProps>(cnButton(), {
    size: 's',
});
