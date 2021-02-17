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
            <svg viewBox="0 0 20 20">
                <path
                    d="M8.293 5.707a1 1 0 0 1 1.414-1.414l6.647 6.646a1.5 1.5 0 0 1 0 2.122l-6.647 6.646a1 1 0 0 1-1.414-1.414L14.586 12 8.293 5.707z"
                    fill="#000000"
                ></path>
            </svg>
        </Icon>
    )
);
