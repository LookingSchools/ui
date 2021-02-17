import React, { FC, ReactNode } from "react";

import { cnGrid } from "../Grid";

import "./Grid-Item.scss";

export type GridItemProps = {
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
};

export const GridItem: FC<GridItemProps> = ({ children, className, fullWidth = false }) => {
    return <div className={cnGrid("Item", { fullWidth }, [className])}>{children}</div>;
};

GridItem.displayName = "GridItem";
