import React, { RefObject, ReactNode } from "react";
import { cn } from "@bem-react/classname";

import { useUniqId } from "../../hooks/useUniqId";
import { Omit } from "../typings/utility-types";
import { IRadiobuttonControlProps } from "./Control/Radiobutton-Control";
import { RadiobuttonRadio as Radio } from "./Radio/Radiobutton-Radio";
import { RadiobuttonControl as Control } from "./Control/Radiobutton-Control";
import { RadiobuttonText as Text } from "./Text/Radiobutton-Text";

import "./Radiobutton.scss";

export const cnRadiobutton = cn("Radiobutton");

export interface IOption extends IRadiobuttonControlProps {
    label: ReactNode;
}

export interface IRadiobuttonProps extends Omit<IRadiobuttonControlProps, "size" | "controlRef"> {
    /**
     * Набор опций
     */
    options: Array<IOption | string>;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLSpanElement>;

    /**
     * Неактивное состояние кнопки.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;

    /**
     * Длинна Radiobutton.
     *
     * @internal
     */
    length?: number;
}

/**
 * Компонент для создания радиопереключателя.
 * @param {IRadiobuttonProps} props
 */
export const Radiobutton = ({
    disabled,
    innerRef,
    options,
    value,
    className,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useUniqId("xuniq"),
    length = options.length,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
    ...props
}: IRadiobuttonProps) => {
    return (
        <span className={cnRadiobutton(null, [className])} ref={innerRef}>
            {options
                .map((option, index) => {
                    const nextOption = typeof option === "string" ? { label: option, value: option } : option;

                    return {
                        ...nextOption,
                        disabled: disabled || nextOption.disabled,
                        checked: value === nextOption.value,
                        side: index === 0 ? "left" : index == length - 1 ? "right" : "both",
                        "aria-checked": value === nextOption.value,
                        "aria-labelledby": `label-${index}-${id}`,
                    };
                })
                .map(({ label, ...option }) => (
                    <Radio
                        checked={option.checked}
                        disabled={option.disabled}
                        side={option.side}
                        htmlFor={option.id}
                        key={option.value}
                    >
                        <Control {...option} {...props} />
                        <Text id={option["aria-labelledby"]}>{label}</Text>
                    </Radio>
                ))}
        </span>
    );
};
