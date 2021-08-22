import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_authentic-account.scss";

export interface IWithGlyphAuthenticAccountProps {
    /**
     * Символ иконки
     */
    glyph?: "authentic-account";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphAuthenticAccount = withBemMod<IWithGlyphAuthenticAccountProps, IIconProps>(
    cnIcon(),
    { glyph: "authentic-account" },
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        </Icon>
    )
);
