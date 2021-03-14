import { compose, composeU } from '@bem-react/core';

// base
import { Tooltip as TooltipDesktop, TooltipStateful as TooltipStatefulDesktop } from '../Tooltip@desktop';

// _size
import { withSizeM } from '../_size/Tooltip_size_m';
import { withSizeS } from '../_size/Tooltip_size_s';
import { withSizeL } from '../_size/Tooltip_size_l';
import { withThemeDefault } from '../_theme/Tooltip_theme_default';

export * from '../Tooltip@desktop';

const enhance = compose(
    withThemeDefault,
    composeU(withSizeM, withSizeS, withSizeL),
);

export const Tooltip = enhance(TooltipDesktop);
export const TooltipStateful = enhance(TooltipStatefulDesktop);
