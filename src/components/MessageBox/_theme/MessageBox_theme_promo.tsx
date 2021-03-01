import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_theme_promo.scss';

export type MessageBoxThemePromoProps = {
    theme?: 'promo';
};

/**
 * Модификатор, отвечающий за внешний вид компонента.
 * @param {MessageBoxThemePromoProps} props
 */
export const withThemePromo = withBemMod<MessageBoxThemePromoProps>(cnMessageBox(), { theme: 'promo' });
