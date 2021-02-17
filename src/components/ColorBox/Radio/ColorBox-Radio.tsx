import React, { ReactNode } from "react";

import { cnColorBox as cn } from "../ColorBox";
import "./ColorBox-Radio.scss";

import { IWithControlProps, withControl } from "../../../hocs/withControl/withControl";

export interface IColorBoxRadioProps extends IWithControlProps<HTMLLabelElement> {
    /**
     * Выбранное состояние
     */
    checked?: boolean;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * HTML-атрибут `for`
     */
    htmlFor?: string;

    /**
     * Содержимое компонента
     */
    children?: ReactNode;

    /**
     * Неактивное состояние всей группы переключетелей
     */
    disabled?: boolean;
}

export const ColorBoxRadio = withControl(
    ({ checked, children, className, disabled, focused, hovered, pressed, ...props }: IColorBoxRadioProps) => (
        <label
            {...props}
            className={cn(
                "Radio",
                {
                    checked,
                    disabled,
                    focused,
                    hovered,
                    pressed,
                },
                [className]
            )}
        >
            {children}
        </label>
    )
);
