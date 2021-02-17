import React, { FC, MouseEventHandler } from "react";
import { compose } from "@bem-react/core";

import { Icon as IconBase } from "../../Icon/Icon";
import { withGlyphCross } from "../../Icon/_glyph/Icon_glyph_cross";
import { withGlyphXSign } from "../../Icon/_glyph/Icon_glyph_x-sign";
import { cnTextarea } from "../Textarea";
import "./Textarea-Clear.scss";

const Icon = compose(withGlyphXSign, withGlyphCross)(IconBase);

const getIconType = (theme?: string): any => {
    if (theme === "default") {
        return { glyph: "x-sign" };
    }

    return { glyph: "cross" };
};

export interface ITextareaClearProps {
    /**
     * Видимость крестика.
     */
    visible?: boolean;

    /**
     * Тема крестика.
     */
    theme?: string;

    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Обработчик клика.
     */
    onClick?: MouseEventHandler<HTMLSpanElement>;

    /**
     * Обработчик события `onMouseDown`
     */
    onMouseDown?: MouseEventHandler<HTMLSpanElement>;
}

export const TextareaClear: FC<ITextareaClearProps> = ({ theme, visible, ...props }) => {
    const className = cnTextarea("Clear", { visible }, [props.className]);

    return <Icon {...props} {...getIconType(theme)} className={className} />;
};
