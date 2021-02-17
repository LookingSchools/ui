import { withBemMod } from '@bem-react/core';

import { cnCut } from '../Cut';
import './Cut_size_s.scss';

export interface ICutSizeSProps {
    /**
     * Размер
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер.
 * @param {ICutSizeSProps} props
 */
export const withSizeS = withBemMod<ICutSizeSProps>(cnCut(), { size: 's' });
