import { ComponentType } from 'react';

import { IPopupProps } from '../../Popup/Popup';
import { IPopupThemeDefaultProps } from '../../Popup/_theme/Popup_theme_default';
import { IPopupTargetAnchorProps } from '../../Popup/_target/Popup_target_anchor';
import { IPopupNonvisualProps } from '../../Popup/_nonvisual/Popup_nonvisual';

export type MessageBoxRegistry = {
    Popup: ComponentType<IPopupProps & IPopupThemeDefaultProps & IPopupTargetAnchorProps & IPopupNonvisualProps>;
};
