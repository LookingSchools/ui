import { compose, composeU } from '@bem-react/core';

// base
import { Popup as PopupDesktop } from '../Popup@desktop';
// _nonvisual
import { withNonvisual } from '../_nonvisual/Popup_nonvisual';
// _target
import { withTargetAnchor } from '../_target/Popup_target_anchor';
// _theme
import { withThemeClear } from '../_theme/Popup_theme_clear';
import { withThemeDefault } from '../_theme/Popup_theme_default';
import { withThemeNormal } from '../_theme/Popup_theme_normal';

export * from '../Popup@desktop';

export const Popup = compose(
    withNonvisual,
    withTargetAnchor,
    composeU(withThemeClear, withThemeDefault, withThemeNormal),
)(PopupDesktop);
