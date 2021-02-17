import { withBemMod } from '@bem-react/core';

import { cnSpin } from '../Spin';
import './Spin_size_m.scss';

export interface ISpinSizeMProps {
    /**
     * Размер индикатора загрузки.
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер индикатора загрузки.
 * @param {ISpinSizeMProps} props
 */
export const withSizeM = withBemMod<ISpinSizeMProps>(cnSpin(), { size: 'm' });
