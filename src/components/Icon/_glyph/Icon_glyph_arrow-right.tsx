import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_arrow-right.scss";

export interface IWithGlyphArrowRightProps {
    /**
     * Символ иконки
     */
    glyph?: "arrow-right";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphArrowRight = withBemMod<IWithGlyphArrowRightProps, IIconProps>(
    cnIcon(),
    { glyph: "arrow-right" },
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
                    d="M8.752 4.448a1.2 1.2 0 0 1 1.696-1.696l7.977 7.975a1.8 1.8 0 0 1 0 2.546l-7.977 7.975a1.2 1.2 0 0 1-1.696-1.696L16.303 12 8.752 4.448z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
