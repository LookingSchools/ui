import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_create-course.scss";

export interface IWithGlyphCreateCourseProps {
    /**
     * Символ иконки
     */
    glyph?: "create-course";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphCreateCourse = withBemMod<IWithGlyphCreateCourseProps, IIconProps>(
    cnIcon(),
    { glyph: "create-course" },
    (Icon) => ({ className, size, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true, size }, [className])}>
            <svg
                focusable="false"
                viewBox="0 0 26 26"
                width="0"
                height="0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.693 1.083C20.274 1.083 25.61 6.42 25.61 13c0 6.581-5.336 11.917-11.917 11.917C7.11 24.917 1.776 19.58 1.776 13c0-6.581 5.335-11.917 11.917-11.917zm0 5.417c-.598 0-1.083.485-1.083 1.083v4.334H8.276c-.555 0-1.013.418-1.076.957L7.193 13c0 .598.485 1.083 1.083 1.083h4.334v4.334c0 .555.418 1.013.956 1.076l.127.007c.598 0 1.083-.485 1.083-1.083v-4.334h4.334c.555 0 1.013-.418 1.076-.957l.007-.126c0-.598-.485-1.083-1.084-1.083h-4.333V7.583c0-.555-.418-1.013-.957-1.076l-.126-.007z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
