import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_favorite-full.scss";

export interface IWithGlyphfavoriteFullProps {
    /**
     * Символ иконки
     */
    glyph?: "favorite-full";
}

export const withGlyphfavoriteFull = withBemMod<IWithGlyphfavoriteFullProps, IIconProps>(
    cnIcon(),
    { glyph: "favorite-full" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" width="0" height="0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </Icon>
    )
);
