import React from "react";
import { cn } from "@bem-react/classname";

import "./List.scss";

const cnList = cn("List");

export type ListProps = {
    className?: string;
};

export const List: React.FC<ListProps> = ({ children, className }) => {
    return (
        <div className={cnList(null, [className])}>
            <ul className={cnList("Container")}>{children}</ul>
        </div>
    );
};

List.displayName = "List";

export * from "./Item/Item";
export * from "./Skeleton/Skeleton";
