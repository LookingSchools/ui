import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_theme_inverse.scss';

export type MessageBoxThemeInverseProps = {
    theme?: 'inverse';
};

/**
 * Модификатор, отвечающий за внешний вид компонента.
 * @param {MessageBoxThemeInverseProps} props
 */
export const withThemeInverse = withBemMod<MessageBoxThemeInverseProps>(cnMessageBox(), { theme: 'inverse' });
