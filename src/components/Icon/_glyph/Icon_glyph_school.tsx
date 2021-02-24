import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_school.scss";

export interface IWithGlyphSchoolProps {
    /**
     * Символ иконки
     */
    glyph?: "school";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphSchool = withBemMod<IWithGlyphSchoolProps, IIconProps>(
    cnIcon(),
    { glyph: "school" },
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
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#000" />
            </svg>
        </Icon>
    )
);
