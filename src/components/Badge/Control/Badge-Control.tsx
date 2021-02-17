import React, { FC, ReactType } from "react";

import { cnBadge } from "../Badge";
import "./Badge-Control.scss";

export interface IBadgeControlProps {
    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Указание для отрисовки компонента
     */
    as?: ReactType;
}

export const BadgeControl: FC<IBadgeControlProps> = ({ className, children, as, ...props }) => {
    const Component = as || ("span" as any);

    return (
        <Component {...props} className={cnBadge("Control", null, [className])}>
            {children}
        </Component>
    );
};
