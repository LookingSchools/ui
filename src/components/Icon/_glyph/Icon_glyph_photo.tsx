import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_photo.scss";

export interface IWithGlyphPhotoProps {
    /**
     * Символ иконки
     */
    glyph?: "photo";
}

export const withGlyphPhoto = withBemMod<IWithGlyphPhotoProps, IIconProps>(
    cnIcon(),
    { glyph: "photo" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg xmlns="http://www.w3.org/2000/svg" height="0" viewBox="0 0 52 46" width="0"><path d="m0 14.625c0-2.6923975 2.18261225-4.875 4.875-4.875h4.4914025c1.2310025 0 2.3563475-.6955 2.906865-1.7965675l2.629315-5.2585975c.8257925-1.651585 2.51381-2.694835 4.36033-2.694835h13.4740125c1.84665 0 3.5347 1.04325 4.360525 2.694835l2.62925 5.2585975c.55055 1.1010675 1.676025 1.7965675 2.9068 1.7965675h4.4915c2.6923 0 4.875 2.1826025 4.875 4.875v26c0 2.6923-2.1827 4.875-4.875 4.875h-42.25c-2.69238775 0-4.875-2.1827-4.875-4.875zm26 24.375c7.179575 0 13-5.820425 13-13 0-7.179705-5.820425-13-13-13-7.179705 0-13 5.820295-13 13 0 7.179575 5.820295 13 13 13zm7.475-13c0 4.128475-3.346655 7.475-7.475 7.475s-7.475-3.346525-7.475-7.475c0-4.128345 3.346655-7.475 7.475-7.475s7.475 3.346655 7.475 7.475z" fill="#fff" fillRule="evenodd"/></svg>
        </Icon>
    )
);
