import { withBemMod } from '@bem-react/core';

import { cnPopup } from '../Popup';
import './Popup_theme_normal.scss';

export interface IPopupThemeNormalProps {
    /**
     * Стилевое оформление попапа
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление попапа.
 * @param {IPopupThemeNormalProps} props
 *
 */
export const withThemeNormal = withBemMod<IPopupThemeNormalProps>(cnPopup(), { theme: 'normal' });
