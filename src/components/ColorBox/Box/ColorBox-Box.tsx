import React, { FC, CSSProperties } from "react";

import { cnColorBox as cn } from "../ColorBox";
import "./ColorBox-Box.scss";

export interface ColorBoxBoxProps {
    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Уникальный `id` компонента
     */
    id?: string;

    /**
     * Дополнительный inline-стиль
     */
    style?: CSSProperties;
}

export const ColorBoxBox: FC<ColorBoxBoxProps> = ({ children, style, className, ...props }) => (
    <span {...props} style={style} className={cn("Box", null, [className])}>
        {children}
    </span>
);
