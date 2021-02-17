import { withBemMod } from '@bem-react/core';

import { cnPrice } from '../Price';
import './Price_size_s.scss';

export interface IPriceSizeSProps {
    /**
     * Размер кнопки
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер.
 * @param {IPriceSizeSProps} props
 */
export const withSizeS = withBemMod<IPriceSizeSProps>(cnPrice(), { size: 's' });
