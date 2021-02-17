import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.scss';
import './Icon_glyph_sort.scss';

export interface IWithGlyphSortProps {
    /**
     * Символ иконки
     */
    glyph?: 'sort';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphSort = withBemMod<IWithGlyphSortProps, IIconProps>(
    cnIcon(),
    { glyph: 'sort' },
    Icon => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="24" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 20v-2h6v2H1zM1 6V4h22v2H1zm0 7v-2h14v2H1z"
                    fill="#000000"
                    stroke="none"
                    strokeWidth="1"
                    fillRule="evenodd"
                ></path>
            </svg>
        </Icon>
    )
);
