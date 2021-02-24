import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_arrow-forward.scss";

export interface IWithGlyphArrowForwardProps {
    /**
     * Символ иконки
     */
    glyph?: "arrow-forward";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphArrowForward = withBemMod<IWithGlyphArrowForwardProps, IIconProps>(
    cnIcon(),
    { glyph: "arrow-forward" },
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
                    d="M21.096 13.058a1.495 1.495 0 0 0 0-2.116A41511.89 41511.89 0 0 0 15.463 5.3c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l2.716 2.717a9.994 9.994 0 0 0 1.768 1.406l.342.214-.208.207a10 10 0 0 0-2.24-.254H2.5a1 1 0 1 0 0 2h13.922a10 10 0 0 0 2.24-.254l.207.207-.342.214c-.641.4-1.233.872-1.768 1.406l-2.716 2.717a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0l5.633-5.642z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
