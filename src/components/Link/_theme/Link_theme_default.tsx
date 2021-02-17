import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_default.scss';

export interface ILinkThemeDefaultProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'default';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<ILinkThemeDefaultProps>(
    cnLink(),
    { theme: 'default' },
    Link => ({ theme, ...props }) => <Link {...props} />
);
