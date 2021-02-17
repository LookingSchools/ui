import React, { FC, memo, MouseEventHandler } from "react";
import { cn } from "@bem-react/classname";

import "./ArrowButton.scss";

export interface IClassNameProps {
    className?: string;
}

export interface IArrowButtonProps extends IClassNameProps {
    direction: "right" | "left";
    visible: boolean;
    arrowsAlignHeight?: number;
    onClick?: MouseEventHandler<HTMLElement>;
}

const cnArrowButton = cn("ArrowButton");

export const ArrowButton: FC<IArrowButtonProps> = memo((props) => {
    const { arrowsAlignHeight } = props;
    const style = arrowsAlignHeight ? { top: Math.round(arrowsAlignHeight / 2) } : undefined;

    return (
        <div
            className={cnArrowButton(
                "",
                {
                    direction: props.direction,
                    hidden: !props.visible,
                },
                [props.className]
            )}
            onClick={props.onClick}
            style={style}
        />
    );
});
