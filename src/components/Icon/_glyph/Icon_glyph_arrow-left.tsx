import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_arrow-left.scss";

export interface IWithGlyphArrowLeftProps {
    /**
     * Символ иконки
     */
    glyph?: "arrow-left";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphArrowLeft = withBemMod<IWithGlyphArrowLeftProps, IIconProps>(
    cnIcon(),
    { glyph: "arrow-left" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg
                focusable="false"
                width="0"
                height="0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.248 4.448a1.2 1.2 0 0 0-1.696-1.696l-7.977 7.975a1.8 1.8 0 0 0 0 2.546l7.977 7.975a1.2 1.2 0 0 0 1.696-1.696L7.697 12l7.551-7.552z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
