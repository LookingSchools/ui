import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_profile.scss";

export interface IWithGlyphProfileProps {
    /**
     * Символ иконки
     */
    glyph?: "profile";
}

export const withGlyphProfile = withBemMod<IWithGlyphProfileProps, IIconProps>(
    cnIcon(),
    { glyph: "profile" },
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
                    d="M16.796 7.476c0-2.5-2.024-4.524-4.524-4.524a4.523 4.523 0 0 0-4.524 4.524c0 2.5 2.025 4.524 4.524 4.524 2.5 0 4.524-2.025 4.524-4.524zM3.225 18.786v1.125c0 .628.509 1.136 1.136 1.136h15.822c.628 0 1.137-.508 1.137-1.136v-1.125c0-3.959-6.028-5.09-9.048-5.09-3.02 0-9.047 1.131-9.047 5.09z"
                    fill="#000"
                />
            </svg>
        </Icon>
    )
);
