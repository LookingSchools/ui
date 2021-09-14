import React, { FC, RefObject, ReactNode } from "react";
import { cn } from "@bem-react/classname";

import { useUniqId } from "../../hooks/useUniqId";
import { Omit } from "../typings/utility-types";
import { RadioboxBox as Box } from "./Box/Radiobox-Box";
import { RadioboxControl as Control } from "./Control/Radiobox-Control";
import { RadioboxRadio as Radio } from "./Radio/Radiobox-Radio";
import { RadioboxText as Text } from "./Text/Radiobox-Text";
import { IRadioboxControlProps } from "./Control/Radiobox-Control";
import "./Radiobox.scss";

export const cnRadiobox = cn("Radiobox");

export interface IOption extends IRadioboxControlProps {
    label: ReactNode;
}

export interface IRadioboxProps extends Omit<IRadioboxControlProps, "size" | "controlRef"> {
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
}

/**
 * Компонент для создания радиопереключателя.
 * @param {IRadioboxProps} props
 */
export const Radiobox: FC<IRadioboxProps> = ({
    disabled,
    innerRef,
    options,
    value,
    className,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useUniqId("xuniq"),
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
    ...props
}) => {
    return (
        <span className={cnRadiobox(null, [className])} ref={innerRef}>
            {options
                .map((option, index) => {
                    const nextOption = typeof option === "string" ? { label: option, value: option } : option;

                    return {
                        ...nextOption,
                        disabled: disabled || nextOption.disabled,
                        checked: value === nextOption.value,
                        "aria-checked": value === nextOption.value,
                        "aria-labelledby": `label-${index}-${id}`,
                    };
                })
                .map(({ label, ...option }) => (
                    <Radio checked={option.checked} disabled={option.disabled} htmlFor={option.id} key={option.value}>
                        <Box>
                            <Control {...option} {...props} />
                        </Box>
                        <Text id={option["aria-labelledby"]}>{label}</Text>
                    </Radio>
                ))}
        </span>
    );
};

if (process.env.NODE_ENV !== 'production') {
    Radiobox.displayName = cnRadiobox();
}