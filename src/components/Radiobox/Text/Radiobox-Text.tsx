import React, { FC } from "react";

import { cnRadiobox as cn } from "../Radiobox";

export interface RadioboxTextProps {
    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Уникальный `id` компонента
     */
    id?: string;
}

export const RadioboxText: FC<RadioboxTextProps> = ({ children, className, ...props }) => (
    <span {...props} className={cn("Text", null, [className])} aria-hidden="true">
        {children}
    </span>
);
