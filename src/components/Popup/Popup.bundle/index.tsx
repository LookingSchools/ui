import { compose } from '@bem-react/core';

// base
import { Popup as PopupBase } from '../Popup';
// _nonvisual
import { withNonvisual } from '../_nonvisual/Popup_nonvisual';
// _target
import { withTargetAnchor } from '../_target/Popup_target_anchor';
// _theme
import { withThemeDefault } from '../_theme/Popup_theme_default';

export * from '../Popup';

export const Popup = compose(withNonvisual, withTargetAnchor, withThemeDefault)(PopupBase);
