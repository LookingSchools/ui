import React, { ReactNode, useCallback } from "react";
import { cn } from "@bem-react/classname";

import "./BottomBar.scss";

export type Tab = {
    text: string;
    icon?: ReactNode;
    activeIcon?: ReactNode;
    tip?: number;
    isActive?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>, index: number) => void;
    linkComponent?: React.ComponentType;
};

export type BottomBarProps = {
    tabs: Array<Tab>;
};

const cnBottomBar = cn("BottomBar");

const BottomBarTab: React.FC<Tab & { index: number }> = (props) => {
    const { tip, text, icon, isActive, onClick, index, linkComponent } = props;
    const onTabClick = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            onClick && onClick(e, index);
        },
        [onClick, index]
    );

    const Component = linkComponent || "div";

    return (
        <div className={cnBottomBar("Tab", { active: isActive })}>
            <div className={cnBottomBar("Link")} onClick={onTabClick}>
                <Component>
                    {icon && <div className={cnBottomBar("Icon")}>{icon}</div>}
                    {tip === undefined ? null : <div className={cnBottomBar("Tip")}>{tip}</div>}
                    <div className={cnBottomBar("Text")}>{text}</div>
                </Component>
            </div>
        </div>
    );
};

export const BottomBar: React.FC<BottomBarProps> = ({ tabs }) => {
    return (
        <div className={cnBottomBar()}>
            {tabs.map((tab, i) => (
                <BottomBarTab {...tab} key={tab.text} index={i} />
            ))}
        </div>
    );
};

BottomBar.displayName = "BottomBar";
