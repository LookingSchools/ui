import React, { Component, RefObject, ComponentClass, createRef } from "react";
import { cn } from "@bem-react/classname";

import { Omit, Defaultize } from "../typings/utility-types";
import { mergeRefs } from "../lib/mergeRefs";
import { ColorBoxBox as Box } from "./Box/ColorBox-Box";
import { Typography } from "../Typography/Typography.bundle";
import { ColorBoxControl as Control } from "./Control/ColorBox-Control";
import { ColorBoxRadio as Radio, IColorBoxRadioProps } from "./Radio/ColorBox-Radio";
import "./ColorBox.scss";

type PartialRadioProps = Omit<IColorBoxRadioProps, "size" | "controlRef">;

export type RadioColorProps = PartialRadioProps & {
    /**
     * Текущее выбранное значениее в группе
     */
    value?: string;

    /**
     * Имя переключателя
     */
    name?: string;

    /**
     * Неактивное состояние.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;
};

export type IColorBoxProps = {
    /**
     * Набор цветов.
     */
    colors: RadioColorProps[];

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLElement>;

    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Текущее выбранное значениее в группе
     */
    value?: string;

    /**
     * Идентификатор
     */
    id?: string;

    /**
     * Неактивное состояние.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;
};

export const cnColorBox = cn("ColorBox");

const defaultProps = {
    value: "",
};

type DefaultProps = keyof typeof defaultProps;
type ColorBoxProps = Defaultize<IColorBoxProps, DefaultProps>;

export const ColorBox = class extends Component<ColorBoxProps> {
    static displayName = cnColorBox();

    static defaultProps = defaultProps;

    readonly state = { colorText: "" };

    private readonly innerRef = createRef<HTMLDivElement>();

    componentDidMount() {
        this.forwardRefs();
        this.setColorText();
    }

    componentDidUpdate(prevProps: ColorBoxProps) {
        this.forwardRefs();

        if (prevProps.value !== this.props.value || prevProps.colors !== this.props.colors) {
            this.setColorText();
        }
    }

    render() {
        const {
            disabled,
            className,
            innerRef,
            value,
            colors = [],
            // @ts-ignore
            size: _size,
            // @ts-ignore
            theme: _theme,
            ...props
        } = this.props;

        return (
            <div {...props} className={cnColorBox(null, [className])} ref={this.innerRef} role="radiogroup">
                <fieldset>
                    <legend>
                        <Typography>
                            Цвет — <span>{this.state.colorText}</span>
                        </Typography>
                    </legend>
                    <div className={cnColorBox("Colors")}>
                        {colors
                            .map((color, index) => {
                                const nextOption = typeof color === "string" ? { name: color, value: color } : color;

                                return {
                                    ...nextOption,
                                    disabled: disabled || nextOption.disabled,
                                    checked: value === nextOption.value,
                                    "aria-checked": value === nextOption.value,
                                    "aria-labelledby": `label-${index}-${this.generateUniqID(index)}`,
                                };
                            })
                            .map(({ name, ...color }) => (
                                <Radio
                                    checked={color.checked}
                                    disabled={color.disabled}
                                    htmlFor={color.id}
                                    key={color.value}
                                >
                                    <Control {...color} {...props} />
                                    <Box id={color["aria-labelledby"]} style={{ backgroundColor: `#${color.value}` }} />
                                </Radio>
                            ))}
                    </div>
                </fieldset>
            </div>
        );
    }

    /**
     * Копирует ссылки на DOM узлы для дальнейшего использования.
     */
    private forwardRefs() {
        mergeRefs(this.innerRef, this.props.innerRef);
    }

    private generateUniqID(index: number) {
        let rand = Math.pow(index + 1, 2) + 77;
        return `tuiniq${Math.floor(rand)}`;
    }

    private setColorText() {
        const { value, colors } = this.props;
        let colorText = colors
            .filter((color) => color.value === value)
            .map((item) => item.name)
            .join("");

        this.setState({ colorText });
    }

    // Приводим компонент к типу, в котором свойства имеющие значения по умолчанию остаются optional.
} as ComponentClass<IColorBoxProps>;
