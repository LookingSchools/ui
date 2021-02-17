import React, { RefObject, FC } from "react";
import { cn } from "@bem-react/classname";

import "./Spin.scss";

export interface ISpinProps {
    /**
     * Ссылка на корневой DOM-элемент компонента.
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * Видимость индикатора загрузки.
     */
    progress?: boolean;

    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const cnSpin = cn("Spin");

/**
 * Индикатор загрузки. Отображает выполнение какого-то процесса, например загрузки сайта или медиа-файла.
 * @param {ISpinProps}
 */
export const Spin: FC<ISpinProps> = ({
    className,
    innerRef,
    progress,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // @ts-ignore
    theme: _theme,
    // @ts-ignore
    position: _position,
    // @ts-ignore
    size: _size,
    ...props
}) => <div {...props} ref={innerRef} className={cnSpin({ progress }, [className])} />;

Spin.displayName = cnSpin();
