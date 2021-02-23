import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_arrow-back.scss";

export interface IWithGlyphArrowBackProps {
    /**
     * Символ иконки
     */
    glyph?: "arrow-back";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphArrowBack = withBemMod<IWithGlyphArrowBackProps, IIconProps>(
    cnIcon(),
    { glyph: "arrow-back" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" width="0" height="0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.904 13.058a1.495 1.495 0 0 1 0-2.116L8.537 5.3c.39-.39 1.03-.39 1.42 0 .39.39.39 1.02 0 1.41L7.241 9.427a9.994 9.994 0 0 1-1.768 1.406l-.342.214.208.207A10 10 0 0 1 7.579 11H21.5a1 1 0 1 1 0 2H7.578a10 10 0 0 1-2.24-.254l-.207.207.342.214c.641.4 1.233.872 1.768 1.406l2.716 2.717c.39.39.39 1.02 0 1.41-.39.39-1.03.39-1.42 0l-5.633-5.642z" fill="#000"/></svg>
        </Icon>
    )
);
