import { compose, composeU } from '@bem-react/core';

// base
import { Popup as PopupTouchPhone } from '../Popup@mobile';
// _nonvisual
import { withNonvisual } from '../_nonvisual/Popup_nonvisual';
// _target
import { withTargetAnchor } from '../_target/Popup_target_anchor';
// _theme
import { withThemeClear } from '../_theme/Popup_theme_clear';
import { withThemeNormal } from '../_theme/Popup_theme_normal';
import { withThemeDefault } from '../_theme/Popup_theme_default';

export * from '../Popup@mobile';

export const Popup = compose(
    withNonvisual,
    withTargetAnchor,
    composeU(withThemeClear, withThemeNormal, withThemeDefault),
)(PopupTouchPhone);
