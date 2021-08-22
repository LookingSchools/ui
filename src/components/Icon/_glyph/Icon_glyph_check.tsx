import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_check.scss";

export interface IWithGlyphCheckProps {
    /**
     * Символ иконки
     */
    glyph?: "check";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphCheck = withBemMod<IWithGlyphCheckProps, IIconProps>(
    cnIcon(),
    { glyph: "check" },
    (Icon) => ({ className, size, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true, size }, [className])}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="10">
                <path d="M7.207 7.506L3.629 3.81 2.343 4.939l4.841 5.002 8.462-8.428L14.382.362z" />
            </svg>
        </Icon>
    )
);
