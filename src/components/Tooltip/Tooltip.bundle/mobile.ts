import { compose, composeU } from '@bem-react/core';

// base
import { Tooltip as TooltipTouchPhone, TooltipStateful as TooltipStatefulTouchPhone } from '../Tooltip@mobile';

// _size
import { withSizeM } from '../_size/Tooltip_size_m';
import { withSizeS } from '../_size/Tooltip_size_s';
import { withSizeL } from '../_size/Tooltip_size_l';
import { withThemeDefault } from '../_theme/Tooltip_theme_default';

export * from '../Tooltip@mobile';

const enhance = compose(
    withThemeDefault,
    composeU(withSizeM, withSizeS, withSizeL),
);

export const Tooltip = enhance(TooltipTouchPhone);
export const TooltipStateful = enhance(TooltipStatefulTouchPhone);
