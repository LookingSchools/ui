import React, { FC } from "react";

import { cnTextarea } from "../Textarea";
import "./Textarea-Wrap.scss";

export interface TextareaWrapProps {
    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const TextareaWrap: FC<TextareaWrapProps> = ({ className, children, ...props }) => (
    <span {...props} className={cnTextarea("Wrap", null, [className])}>
        {children}
    </span>
);
