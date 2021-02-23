import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_type-arrow.scss";

export interface IWithGlyphTypeArrowProps {
    /**
     * Символ иконки
     */
    glyph?: "type-arrow";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeArrow = withBemMod<IWithGlyphTypeArrowProps, IIconProps>(
    cnIcon(),
    { glyph: "type-arrow" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            {props.size === "xs" ? (
                <svg width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.585l4.79-4.79a1.002 1.002 0 0 1 1.42.001c.19.187.29.442.29.707 0 .265-.11.52-.29.707l-5.5 5.496a1.005 1.005 0 0 1-1.42 0L.79 2.21a1.03 1.03 0 0 1-.29-.707c0-.265.11-.52.29-.707A1.002 1.002 0 0 1 2.21.795L7 5.585z" fill="#000"/></svg>
            ) : (
                <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.585l4.79-4.79a1.002 1.002 0 0 1 1.42.001c.19.187.29.442.29.707 0 .265-.11.52-.29.707l-5.5 5.496a1.005 1.005 0 0 1-1.42 0L.79 2.21a1.03 1.03 0 0 1-.29-.707c0-.265.11-.52.29-.707A1.002 1.002 0 0 1 2.21.795L7 5.585z" fill="#000"/></svg>
            )}
        </Icon>
    )
);
