import React, { FC, useCallback, useRef } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from '../useIsomorphicLayoutEffect';
import { cn } from "@bem-react/classname";

import { HorizontalScroll } from "../_internal_/HorizontalScroll/HorizontalScroll";
import { SliderItem } from "./Item/Slider-Item";
import "./Slider.scss";

export const cnSlider = cn("Slider");

export type SliderProps = {
    className?: string;
    activeIndex?: number;
    children: Array<React.ReactNode>;
    onSlideChange?: (index: number) => void;
};

export const Slider: FC<SliderProps> = (props) => {
    const { className, children, activeIndex = 0, onSlideChange } = props;
    const scrollRef = useRef<HTMLDivElement>(null);

    // Метод, который вызывается, когда один из слайдов стал видимым
    const onSetVisible = useCallback<(index: number) => void>(
        (index) => {
            onSlideChange && onSlideChange(index);
        },
        [onSlideChange]
    );

    useLayoutEffect(() => {
        if (scrollRef.current) {
            const activeItem = scrollRef.current.querySelector<HTMLAnchorElement>(`div:nth-child(${activeIndex + 1})`);
            const left = activeItem ? activeItem.offsetLeft - activeItem.clientWidth / 2 : 0;

            scrollRef.current.scrollTo
                ? scrollRef.current.scrollTo({ left, behavior: "smooth" })
                : (scrollRef.current.scrollLeft = left);
        }
    }, [activeIndex, scrollRef]);

    return (
        <div className={cnSlider(null, [className])}>
            <HorizontalScroll contentClassName={cnSlider("Scroll")} innerRef={scrollRef}>
                {children.map((slide, index) => (
                    <SliderItem
                        key={`item-${index}`}
                        className={cnSlider("Item")}
                        index={index}
                        onSetVisible={onSetVisible}
                    >
                        {slide}
                    </SliderItem>
                ))}
            </HorizontalScroll>
        </div>
    );
};

Slider.displayName = "Slider";
