import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_arrow-bottom.scss";

export interface IWithGlyphArrowBottomProps {
    /**
     * Символ иконки
     */
    glyph?: "arrow-bottom";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphArrowBottom = withBemMod<IWithGlyphArrowBottomProps, IIconProps>(
    cnIcon(),
    { glyph: "arrow-bottom" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" width="0" height="0" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8l12.28 4.861c.46.185.98.185 1.44 0L28 8" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>    
        </Icon>
    )
);
