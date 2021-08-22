import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_bell.scss";

export interface IWithGlyphBellProps {
    /**
     * Символ иконки
     */
    glyph?: "bell";
}

export const withGlyphBell = withBemMod<IWithGlyphBellProps, IIconProps>(
    cnIcon(),
    { glyph: "bell" },
    (Icon) => ({ className, size, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true, size }, [className])}>
            <svg
                focusable="false"
                width="0"
                height="0"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M8.139.17A.753.753 0 0 1 8.615 0h.77a.75.75 0 0 1 .736.603l.142.712a1.509 1.509 0 0 0 .75 1.021l.3.164a5.587 5.587 0 0 1 3.24 4.469l.54 4.865a3.382 3.382 0 0 0 1.282 2.291l.354.275a1.498 1.498 0 0 1 .534 1.548L17.25 16a1.318 1.318 0 0 1-1.28 1H12a2.99 2.99 0 0 1-.552 1.73A2.999 2.999 0 0 1 6 17H2.03a1.32 1.32 0 0 1-1.28-1l-.013-.052A1.505 1.505 0 0 1 1.27 14.4l.354-.275a3.371 3.371 0 0 0 1.282-2.291l.54-4.864a5.59 5.59 0 0 1 3.24-4.47l.3-.165a1.493 1.493 0 0 0 .75-1.02l.142-.712a.751.751 0 0 1 .26-.433zm4.966 11.884c.122 1.1.4 2.096 1.795 2.946H3.1c1.399-.85 1.673-1.846 1.795-2.946l.54-4.864a3.587 3.587 0 0 1 7.13 0l.54 4.864z" />
            </svg>
        </Icon>
    )
);
