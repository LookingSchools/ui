import { withBemMod } from '@bem-react/core';

import { cnMessageBox } from '../MessageBox';
import './MessageBox_theme_default.scss';

export type MessageBoxThemeDefaultProps = {
    theme?: 'default';
};

/**
 * Модификатор, отвечающий за внешний вид компонента.
 * @param {MessageBoxThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<MessageBoxThemeDefaultProps>(cnMessageBox(), { theme: 'default' });
