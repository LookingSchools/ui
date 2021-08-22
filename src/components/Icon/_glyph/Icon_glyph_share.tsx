import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_share.scss";

export interface IWithGlyphShareProps {
    /**
     * Символ иконки
     */
    glyph?: "share";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphShare = withBemMod<IWithGlyphShareProps, IIconProps>(
    cnIcon(),
    { glyph: "share" },
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
                <path
                    d="M14.444 7.889V3L23 11.556l-8.556 8.555V15.1C8.334 15.1 4.056 17.056 1 21.333 2.222 15.223 5.889 9.111 14.444 7.89z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
