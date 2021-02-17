import React, {
    KeyboardEvent,
    MouseEvent,
    ComponentClass,
    PureComponent,
    createRef,
    RefObject,
    ReactNode,
    ReactType,
    KeyboardEventHandler,
    MouseEventHandler,
} from "react";
import { cn } from "@bem-react/classname";

import { Defaultize } from "../../typings/utility-types";
import { mergeRefs } from "../../lib/mergeRefs";
import { Keys, KeyboardKeys, isKeyCode } from "../../lib/keyboard";
import { IconProvider, ButtonIcon as Icon } from "./Icon/Button-Icon";
import { ButtonText as Text } from "./Text/Button-Text";
import "./Button.scss";

export type ContainerElement = HTMLButtonElement | HTMLAnchorElement;

export interface IButtonProps {
    /**
     * Дополнительный контент после `children`
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед `children`
     */
    addonBefore?: ReactNode;

    /**
     * @internal
     */
    autoComplete?: string | null;

    /**
     * Кнопка нажата
     */
    checked?: boolean;

    /**
     * Иконка на кнопке
     */
    icon?: IconProvider;

    /**
     * Иконка слева от текста кнопки
     */
    iconLeft?: IconProvider;

    /**
     * Иконка справа от текста кнопки
     */
    iconRight?: IconProvider;

    /**
     * Ссылка на корневой DOM элемент компонента
     */
    innerRef?: RefObject<HTMLElement>;

    /**
     * Ссылка на DOM элемент нативного контрола
     */
    controlRef?: RefObject<ContainerElement>;

    /**
     * Набор клавиш, при нажатии на которые выставляется состояние `pressed`
     *
     * @default [Keys.SPACE, Keys.ENTER]
     */
    pressKeys?: KeyboardKeys[];

    /**
     * Набор клавиш, при нажатии на которые прерывается событие
     *
     * @default []
     */
    prvntKeys?: KeyboardKeys[];

    /**
     * HTML-атрибут для рендера кнопки
     * @default 'button'
     */
    as?: ReactType;

    /**
     * Текст кнопки.
     */
    children?: ReactNode;

    /**
     * Тип кнопки.
     * @default 'button'
     */
    type?: string;

    /**
     * Неактивное состояние кнопки.
     * Состояние, при котором кнопка отображается, но недоступна для действий пользователя
     */
    disabled?: boolean;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * Обработчик события onKeyDown
     */
    onKeyDown?: KeyboardEventHandler<ContainerElement>;

    /**
     * Обработчик события `onKeyUp`
     */
    onKeyUp?: KeyboardEventHandler<ContainerElement>;

    /**
     * Обработчик клика на кнопку
     */
    onClick?: MouseEventHandler<ContainerElement>;

    /**
     * Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши.
     * `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`
     */
    onMouseDown?: MouseEventHandler<ContainerElement>;
}

export interface IButtonState {
    pressed?: boolean;
}

export const cnButton = cn("Button");

const defaultProps = {
    autoComplete: "off",
    pressKeys: [Keys.SPACE, Keys.ENTER],
    prvntKeys: [],
    as: "button",
    type: "button" as "button",
};

type DefaultProps = keyof typeof defaultProps;
type ButtonProps = Defaultize<IButtonProps, DefaultProps>;

/**
 * Компонент для создания кнопок.
 * @param {IButtonProps} props
 */
export const Button = class extends PureComponent<ButtonProps, IButtonState> {
    static displayName = cnButton();

    static defaultProps = defaultProps;

    readonly state = {
        pressed: false,
    };

    /**
     * Ссылка на верхний DOM узел.
     */
    private readonly internalInnerRef = createRef<ContainerElement>();

    render() {
        const {
            addonBefore,
            addonAfter,
            autoComplete,
            checked,
            children,
            className,
            disabled,
            as,
            icon,
            iconLeft,
            iconRight,
            type,
            innerRef,
            controlRef,
            // Извлекаем свойства, т.к. они не нужны на DOM узле
            pressKeys: _pressKeys,
            prvntKeys: _prvntKeys,
            // @ts-ignore
            theme: _theme,
            // @ts-ignore
            pin: _pin,
            ...props
        } = this.props as ButtonProps;

        const { pressed } = this.state;
        const Component = as;

        const refKey = typeof as === "string" ? "ref" : "innerRef";
        (props as any)[refKey] = mergeRefs(this.internalInnerRef, innerRef, controlRef);

        const iconLeftOrIcon = iconLeft || icon;

        return (
            <Component
                {...props}
                type={type as any}
                disabled={disabled}
                className={cnButton({ checked, pressed }, [className])}
                onKeyDown={this.onKeyDown}
                onKeyUp={this.onKeyUp}
                onClick={this.onClick}
                onMouseDown={this.onMouseDown}
                aria-pressed={checked}
                aria-disabled={disabled}
                autoComplete={autoComplete}
            >
                <>
                    {addonBefore}
                    {iconLeftOrIcon && (
                        <Icon provider={iconLeftOrIcon} side={children && iconLeft ? "left" : undefined} />
                    )}
                    {iconRight && <Icon provider={iconRight} side={children ? "right" : undefined} />}
                    {children && <Text>{children}</Text>}
                    {addonAfter}
                </>
            </Component>
        );
    }

    protected onKeyDown = (event: KeyboardEvent<ContainerElement>) => {
        if (isKeyCode(event.keyCode, this.props.pressKeys)) {
            this.setState({ pressed: true });

            if (isKeyCode(event.keyCode, this.props.prvntKeys)) {
                event.preventDefault();
            }
        }

        if (this.props.onKeyDown !== undefined) {
            this.props.onKeyDown(event);
        }
    };

    protected onKeyUp = (event: KeyboardEvent<ContainerElement>) => {
        if (isKeyCode(event.keyCode, this.props.prvntKeys)) {
            event.preventDefault();
        }

        if (isKeyCode(event.keyCode, this.props.pressKeys)) {
            this.setState({ pressed: false });
        }

        if (this.props.onKeyUp !== undefined) {
            this.props.onKeyUp(event);
        }
    };

    protected onClick = (event: MouseEvent<ContainerElement>) => {
        if (this.internalInnerRef.current !== null) {
            // Выставляем программно focus, т.к. в браузерах Safari и Firefox
            // клик по кнопке не выставляет фокус автоматически.
            this.internalInnerRef.current.focus();
        }

        if (this.props.onClick !== undefined) {
            this.props.onClick(event);
        }
    };

    protected onMouseDown = (event: MouseEvent<ContainerElement>) => {
        // Нельзя делать preventDefault для всех браузеров, т.к. в Firefox перестает работать active состояние.
        if (navigator.userAgent.match(/safari/i)) {
            // Предотвращаем всплытие события, т.к. в браузерах Safari происходит blur после нажатия на кнопку.
            event.preventDefault();
        }

        if (this.props.onMouseDown !== undefined) {
            this.props.onMouseDown(event);
        }
    };
} as ComponentClass<IButtonProps>;
