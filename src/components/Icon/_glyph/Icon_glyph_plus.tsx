import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_plus.scss";

export interface IWithGlyphPlusProps {
    /**
     * Символ иконки
     */
    glyph?: "plus";
}

export const withGlyphPlus = withBemMod<IWithGlyphPlusProps, IIconProps>(
    cnIcon(),
    { glyph: "plus" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="0" height="0" viewBox="0 0 24 24">
                <g fill="#000" fillRule="evenodd">
                    <path d="M4 13h16v-2H4z" />
                    <path d="M11 4v16h2V4z" />
                </g>
            </svg>
        </Icon>
    )
);
