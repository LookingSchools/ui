import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_course.scss";

export interface IWithGlyphCourseProps {
    /**
     * Символ иконки
     */
    glyph?: "course";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphCourse = withBemMod<IWithGlyphCourseProps, IIconProps>(
    cnIcon(),
    { glyph: "course" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="0" height="0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.745 3H4.934C3.848 3 2.96 3.9 2.96 5v14c0 1.1.888 2 1.973 2h13.813c1.085 0 1.973-.9 1.973-2V5c0-1.1-.888-2-1.974-2zm-4.933 14H6.907v-2h6.907v2zm2.96-4H6.906v-2h9.866v2zm0-4H6.906V7h9.866v2z" fill="#000"/></svg>
        </Icon>
    )
);
