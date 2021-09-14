import React, { ReactNode, SyntheticEvent } from "react";
import { cn } from "@bem-react/classname";

import "./Item.scss";

const cnListItem = cn("ListItem");

export enum SeparatorMode {
    none = "none",
    full = "full",
    content = "content",
}

export type ListItemProps = {
    icon?: ReactNode;
    end?: ReactNode;
    hasArrow?: boolean;
    separator?: ReactNode;
    separatorMode?: SeparatorMode;
    linkComponent?: React.ComponentType;
    className?: string;
    onClick?: (event: SyntheticEvent) => void;
};

export const ListItem: React.FC<ListItemProps> = (props) => {
    const {
        children,
        icon,
        end,
        hasArrow,
        separator,
        separatorMode = SeparatorMode.full,
        linkComponent,
        className,
        onClick,
    } = props;

    const Component = linkComponent || "div";

    const separatorComponent = (
        <div className={cnListItem("Separator")}>{separator || <div className={cnListItem("LineSeparator")} />}</div>
    );

    return (
        <li className={cnListItem({ arrow: hasArrow }, [className])} onClick={onClick}>
            <Component>
                <div className={cnListItem("Wrapper")}>
                    {icon && <div className={cnListItem("Icon")}>{icon}</div>}
                    <div className={cnListItem("ContentWrapper")}>
                        <div className={cnListItem("ArrowContent")}>
                            <div className={cnListItem("Content")}>
                                <div className={cnListItem("Start")}>{children}</div>
                                {end && <div className={cnListItem("End")}>{end}</div>}
                            </div>
                        </div>
                        {separatorMode === SeparatorMode.content && separatorComponent}
                    </div>
                </div>
                {separatorMode === SeparatorMode.full && separatorComponent}
            </Component>
        </li>
    );
};

if (process.env.NODE_ENV !== 'production') {
    ListItem.displayName = "ListItem";
}