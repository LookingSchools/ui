import { withBemMod } from '@bem-react/core';

import { cnTumbler } from '../Tumbler';
import './Tumbler_theme_default.scss';

export type TumblerThemeDefaultProps = {
    /**
     * Внешний вид переключателя
     */
    theme?: 'default';
};

/**
 * Модификатор, отвечающий за внешний вид переключателя.
 *
 * @param {TumblerThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<TumblerThemeDefaultProps>(cnTumbler(), { theme: 'default' });
