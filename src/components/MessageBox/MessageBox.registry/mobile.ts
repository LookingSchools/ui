import { Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

import { Popup as PopupMobile } from '../../Popup/Popup@mobile';
import { withThemeDefault } from '../../Popup/_theme/Popup_theme_default';
import { withTargetAnchor } from '../../Popup/_target/Popup_target_anchor';
import { withNonvisual } from '../../Popup/_nonvisual/Popup_nonvisual';
import { cnMessageBox } from '../MessageBox';

const Popup = compose(
    withThemeDefault,
    withTargetAnchor,
    withNonvisual,
)(PopupMobile);

export const registry = new Registry({ id: cnMessageBox() });

registry.set('Popup', Popup);
