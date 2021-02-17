import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_black.scss';

export interface ILinkThemeBlackProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'black';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemeBlackProps} props
 *
 */
export const withThemeBlack = withBemMod<ILinkThemeBlackProps>(
    cnLink(),
    { theme: 'black' },
    Link => ({ theme, ...props }) => <Link {...props} />
);
