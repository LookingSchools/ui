import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_edit.scss";

export interface IWithGlyphEditProps {
    /**
     * Символ иконки
     */
    glyph?: "edit";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphEdit = withBemMod<IWithGlyphEditProps, IIconProps>(
    cnIcon(),
    { glyph: "edit" },
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.441 17.218l-1.39 3.71a.794.794 0 0 0 1.022 1.021l3.709-1.391c.424-.159.81-.407 1.13-.727L18.656 9.087s-.375-1.123-1.497-2.246c-1.123-1.123-2.247-1.497-2.247-1.497L4.17 16.087c-.321.32-.569.706-.728 1.13zm12.97-13.373l1.463-1.464c.264-.262.613-.43.98-.368.515.084 1.304.34 2.047 1.085.745.744 1 1.532 1.087 2.048.06.366-.106.716-.37.979l-1.465 1.464s-.374-1.122-1.497-2.244c-1.123-1.126-2.245-1.5-2.245-1.5z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
