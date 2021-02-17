import React, { FC, RefObject, useRef, useCallback, TouchEvent, Touch } from "react";
import { cn } from "@bem-react/classname";

import "./HorizontalScroll.scss";

export type Props = {
    className?: string;
    contentClassName?: string;
    innerRef?: RefObject<HTMLDivElement>;
    onError?: (err: any) => void;
};

const cnHorizontalScroll = cn("HorizontalScroll");

export const HorizontalScroll: FC<Props> = ({ children, innerRef, contentClassName = "", className = "", onError }) => {
    const scrollStart = useRef({} as Touch);
    const scrollCompute = useRef(false);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        scrollStart.current = e.changedTouches[0];
        scrollCompute.current = true;
    }, []);

    const handleTouchMove = useCallback(
        (e: TouchEvent) => {
            /**
             * При горизонтальном скролле запрещаем жест скрытия
             */
            if (!scrollCompute.current) {
                return;
            }

            const currentEvent = e.changedTouches[0];
            const diffX = Math.abs(scrollStart.current.screenX - currentEvent.screenX);
            const diffY = Math.abs(scrollStart.current.screenY - currentEvent.screenY);

            if (diffX === diffY) {
                return;
            }

            scrollCompute.current = false;
        },
        [onError]
    );

    const handleTouchEnd = useCallback(() => {
        scrollCompute.current = false;
    }, [onError]);

    return (
        <div
            className={cnHorizontalScroll(null, [className])}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div ref={innerRef} className={cnHorizontalScroll("Content", [contentClassName])}>
                {children}
            </div>
        </div>
    );
};

HorizontalScroll.displayName = cnHorizontalScroll();
