import React, { FC, PropsWithChildren, ReactNode, useEffect, useMemo, useState } from "react";

import { IPopupProps } from "../Popup/Popup";
import { Popup } from "../Popup/Popup.bundle";

import { useLockBodyScroll, useSpring, useClientHeight } from "./Drawer.utils";
import { DrawerContent } from "./Content/Drawer-Content";
import { cnDrawer } from "./Drawer.const";
import "./Drawer.scss";

type PartialPopupProps = Pick<IPopupProps, "keepMounted" | "className" | "innerRef" | "zIndex" | "visible" | "scope">;

export interface IDrawerAnimationParams {
    /**
     * Основные параметры анимации для rebound
     * @see https://github.com/facebook/rebound-js
     */
    tension: number;
    friction: number;

    /**
     * Отключает спринговые анимации (напр. для прогонов автотестов)
     */
    disabled?: boolean;

    /**
     * Отключает анимации на момент перетаскивания шторки пальцем (таким образом делая их отзывчивее)
     */
    dragImmediate?: boolean;
}

export interface IDrawerProps extends PropsWithChildren<PartialPopupProps> {
    /**
     * Функция, которая будет вызвана при попытке закрытия шторки.
     */
    onClose?: () => void;

    /**
     * Компонент шапки шторки.
     */
    titleComponent?: ReactNode;

    /**
     * Делает шторку "статичной"
     */
    dragDisabled?: boolean;

    /**
     * Меняет внешний вид для режима "шторка внутри шторки".
     */
    nested?: boolean;

    /**
     * Направление, откуда появляется шторка.
     */
    direction?: "bottom" | "left" | "right";

    /**
     * Максимальный размер шторки (ширина или высота в зависимости от direction).
     * Принимает любое валидное CSS значение.
     */
    maxSize?: string;

    /**
     * Параметры анимации шторки.
     */
    animation: IDrawerAnimationParams;
}

/**
 * Используется для создания шторки.
 * @param {IDrawerProps} props
 */
export const Drawer: FC<IDrawerProps> = (props) => {
    const { className, visible, nested, direction = "bottom", innerRef, animation } = props;

    // прогресс открытия шторки от 0 до 1
    const [progress, setProgress] = useState<number>(0);

    // признак того, что анимация временно отключена (напр. на время drag жеста)
    const [springDisabled, setSpringDisabled] = useState<boolean>(false);

    // спринговое значение прогресса и его производные
    const springImmediate = (animation.dragImmediate && springDisabled) || animation.disabled;
    const springValue = useSpring(progress, animation.tension, animation.friction, springImmediate);
    const springVisible = springValue > 0;

    // решает баг в iOS: в альбомной ориентации fixed элементы с
    // height: 100% показываются некорректно если виден navigation bar
    const clientHeight = useClientHeight();
    const popupStyle = useMemo(() => ({ height: clientHeight && clientHeight + "px" }), [clientHeight]);

    useLockBodyScroll(springVisible);

    useEffect(() => {
        setSpringDisabled(false);
        setProgress(visible ? 1 : 0);
    }, [visible, animation]);

    return (
        <Popup
            className={cnDrawer({ visible: springVisible, direction, nested }, [className])}
            visible={springVisible}
            innerRef={innerRef}
            style={popupStyle}
            keepMounted={props.keepMounted}
            zIndex={props.zIndex}
            scope={props.scope}
        >
            <DrawerContent
                {...props}
                springValue={springValue}
                setProgress={setProgress}
                setSpringDisabled={setSpringDisabled}
            />
        </Popup>
    );
};

Drawer.displayName = cnDrawer();
