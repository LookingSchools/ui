import React, { FC, ReactElement } from "react";
import { cn } from "@bem-react/classname";

import { GridItem, GridItemProps } from "./Item/Grid-Item";

import "./Grid.scss";

export type GridProps = {
    children: ReactElement<GridItemProps> | ReactElement<GridItemProps>[];
    className?: string;
};

export const cnGrid = cn("Grid");

export const Grid: FC<GridProps> = ({ children, className }) => {
    return (
        <div className={cnGrid(null, [className])}>
            <div className={cnGrid("Items")}>{children}</div>
        </div>
    );
};

if (process.env.NODE_ENV !== 'production') {
    Grid.displayName = cnGrid();
}

export { GridItem, GridItemProps };
