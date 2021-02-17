import { withBemMod } from '@bem-react/core';

import { cnPopup } from '../Popup';
import './Popup_theme_default.scss';

export interface IPopupThemeDefaultProps {
    /**
     * Стилевое оформление попапа
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за стилевое оформление попапа.
 * @param {IPopupThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IPopupThemeDefaultProps>(cnPopup(), {
    theme: 'default',
});
