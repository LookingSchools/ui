import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_comment.scss";

export interface IWithGlyphCommentProps {
    /**
     * Символ иконки
     */
    glyph?: "comment";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphComment = withBemMod<IWithGlyphCommentProps, IIconProps>(
    cnIcon(),
    { glyph: "comment" },
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
                    d="M11.789 19.499c-5.075 0-9.189-3.805-9.189-8.5C2.6 6.305 6.714 2.5 11.789 2.5c5.074 0 9.188 3.805 9.188 8.499 0 2.358-1.038 4.49-2.714 6.031.275 1.514 1.083 2.63 1.659 3.258.187.205.044.567-.232.54-1.211-.109-3.486-.472-5.306-1.673-.846.23-1.72.345-2.595.344z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
