import { ComponentType } from 'react';

import { IPopupProps } from '../../Popup/Popup';
import { IPopupThemeDefaultProps } from '../../Popup/_theme/Popup_theme_default';
import { IPopupTargetAnchorProps } from '../../Popup/_target/Popup_target_anchor';

export type TooltipRegistry = {
    Popup: ComponentType<IPopupProps & IPopupThemeDefaultProps & IPopupTargetAnchorProps>;
};
