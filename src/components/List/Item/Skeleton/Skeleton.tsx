import React from "react";
import { cn } from "@bem-react/classname";

import { Rect } from "../../../Skeleton/Skeleton";

import "./Skeleton.scss";

const cnListItemSkeleton = cn("ListItemSkeleton");

export type ListItemSkeletonProps = {
    className?: string;
};

export const ListItemSkeleton: React.FC<ListItemSkeletonProps> = ({ className }) => {
    return (
        <div className={cnListItemSkeleton(null, [className])}>
            <Rect className={cnListItemSkeleton("Rect")} />
        </div>
    );
};

ListItemSkeleton.displayName = "ListItemSkeleton";
