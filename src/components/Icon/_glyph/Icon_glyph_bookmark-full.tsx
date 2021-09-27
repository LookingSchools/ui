import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_bookmark-full.scss";

export interface IWithGlyphBookmarkFullProps {
    /**
     * Символ иконки
     */
    glyph?: "bookmark-full";
}

export const withGlyphBookmarkFull = withBemMod<IWithGlyphBookmarkFullProps, IIconProps>(
    cnIcon(),
    { glyph: "bookmark-full" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="0" height="0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="black"/>
            </svg>
        </Icon>
    )
);
