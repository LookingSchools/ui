import { withBemMod } from '@bem-react/core';

import { cnTooltip } from '../Tooltip';
import './Tooltip_theme_default.scss';

export type TooltipViewDefaultProps = {
    /**
     * Стилевое оформление тултипа.
     */
    theme?: 'default';
};

/**
 * Модификатор, отвечающий за внешний вид тултипа.
 * @param {TooltipViewDefaultProps} props
 */
export const withViewDefault = withBemMod<TooltipViewDefaultProps>(cnTooltip(), { view: 'default' });
