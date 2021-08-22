import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_bookmark.scss";

export interface IWithGlyphBookmarkProps {
    /**
     * Символ иконки
     */
    glyph?: "bookmark";
}

export const withGlyphBookmark = withBemMod<IWithGlyphBookmarkProps, IIconProps>(
    cnIcon(),
    { glyph: "bookmark" },
    (Icon) => ({ className, size, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true, size }, [className])}>
            <svg
                focusable="false"
                width="0"
                height="0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
