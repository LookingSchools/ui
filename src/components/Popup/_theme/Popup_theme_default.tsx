import { withBemMod } from '@bem-react/core';

import { cnPopup } from '../Popup';
import './Popup_theme_default.scss';

export interface IPopupThemeDefaultProps {
    /**
     * Внешний вид попапа
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид попапа.
 * @param {IPopupThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IPopupThemeDefaultProps>(cnPopup(), { theme: 'default' });
