import { Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

import { Popup as PopupTouchPhone } from '../../Popup/Popup@mobile';
import { withThemeDefault } from '../../Popup/_theme/Popup_theme_default';
import { withTargetAnchor } from '../../Popup/_target/Popup_target_anchor';
import { cnTooltip } from '../Tooltip';

const Popup = compose(
    withThemeDefault,
    withTargetAnchor,
)(PopupTouchPhone);

export const registry = new Registry({ id: cnTooltip() });

registry.set('Popup', Popup);
