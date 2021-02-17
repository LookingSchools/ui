import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.scss';
import './Icon_glyph_minus.scss';

export interface IWithGlyphMinusProps {
    /**
     * Символ иконки
     */
    glyph?: 'minus';
}

export const withGlyphMinus = withBemMod<IWithGlyphMinusProps, IIconProps>(
    cnIcon(),
    { glyph: 'minus' },
    Icon => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="0" height="0" viewBox="0 0 24 24">
                <path fill="#000" d="M4 13h16v-2H4z" fillRule="evenodd" />
            </svg>
        </Icon>
    )
);
