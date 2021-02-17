import React, { FC, MouseEventHandler } from "react";
import { compose } from "@bem-react/core";

import { Icon as IconPresenter } from "../../Icon/Icon";
import { withGlyphCross } from "../../Icon/_glyph/Icon_glyph_cross";
import { withGlyphXSign } from "../../Icon/_glyph/Icon_glyph_x-sign";

import { cnGallery } from "../Gallery";
import "./Gallery-Close.scss";

const Icon = compose(withGlyphXSign, withGlyphCross)(IconPresenter);

const getIconType = (theme?: string): any => {
    if (theme === "default") {
        return { glyph: "x-sign" };
    }

    return { glyph: "cross" };
};

export interface IGalleryCloseProps {
    /**
     * Тема крестика
     */
    theme?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Обработчик клика
     */
    onClick?: MouseEventHandler<HTMLSpanElement>;

    /**
     * Обработчик события `onMouseDown`
     */
    onMouseDown?: MouseEventHandler<HTMLSpanElement>;
}

export const GalleryClose: FC<IGalleryCloseProps> = ({ className, theme, ...props }) => {
    return <Icon {...getIconType(theme)} {...props} size="m" className={cnGallery("Close", [className])} />;
};
