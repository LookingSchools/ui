import React, { FC } from "react";
import { cn } from "@bem-react/classname";
import { useComponentRegistry } from "@bem-react/di";

import { IPopupProps } from "../Popup";
import { IPopupTargetAnchorProps } from "../Popup/_target/Popup_target_anchor";
import { TooltipBackdrop as Backdrop } from "./Backdrop/Tooltip-Backdrop";
import { TooltipRegistry } from "./Tooltip.registry/interface";
import "./Tooltip.scss";

export type { Direction } from "../Popup";

export const cnTooltip = cn("Tooltip");

type PartialPopupProps = Pick<
    IPopupProps,
    "keepMounted" | "className" | "hasTail" | "innerRef" | "zIndex" | "visible" | "scope" | "onClose" | "onClick"
>;

type PartialPopupTargetAnchorProps = Pick<
    IPopupTargetAnchorProps,
    "mainOffset" | "secondaryOffset" | "tailOffset" | "anchor" | "direction"
>;

export type TooltipProps = PartialPopupProps &
    PartialPopupTargetAnchorProps & {
        /**
         * Визуальное состояние подсказки
         */
        state?: "warning" | "alert" | "success";

        /**
         * Уникальный id подсказки
         */
        id?: string;
    };

/**
 * Компонент используется для создания всплывающих подсказок.
 *
 * @param {TooltipProps} props Свойства компонента.
 */
export const Tooltip: FC<TooltipProps> = ({
    anchor,
    children,
    className,
    direction,
    hasTail,
    id,
    innerRef,
    keepMounted,
    mainOffset,
    scope,
    secondaryOffset,
    state,
    tailOffset,
    visible,
    zIndex,
    onClose,
    onClick,
}) => {
    const defaultMainOffset = hasTail ? 0 : 4;
    const { Popup } = useComponentRegistry<TooltipRegistry>(cnTooltip());

    return (
        <Popup
            onClose={onClose}
            onClick={onClick}
            anchor={anchor}
            className={cnTooltip({ visible, state }, [className])}
            direction={direction}
            hasTail={hasTail}
            innerRef={innerRef}
            keepMounted={keepMounted}
            mainOffset={mainOffset || defaultMainOffset}
            scope={scope}
            secondaryOffset={secondaryOffset}
            tailOffset={tailOffset}
            target="anchor"
            theme="default"
            visible={visible}
            zIndex={zIndex}
            // prettier-ignore
            unstable_onRenderTail={(tail) => (
                <Backdrop>{hasTail && tail}</Backdrop>
            )}
        >
            <div role="tooltip" id={id} className={cnTooltip("Content")}>
                {children}
            </div>
        </Popup>
    );
};

if (process.env.NODE_ENV !== 'production') {
    Tooltip.displayName = "Tooltip";
}