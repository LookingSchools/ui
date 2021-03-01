import React, {
    KeyboardEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
    RefObject,
    FocusEventHandler,
    MouseEventHandler,
} from "react";
import { cn } from "@bem-react/classname";

import "../../polyfills/pointerfocus";
import { Omit } from "../typings/utility-types";
import { isKeyCode, Keys } from "../lib/keyboard";
import { omit } from "../lib/omit";
import { mergeRefs } from "../lib/mergeRefs";
import { useUniqId } from "../../hooks/useUniqId";
import { IWithControlProps, withControl } from "../withControl";
import { IWithControlProps as IWithControlDesktopProps } from "../withControl";
import { ICheckboxControlProps } from "./Control/Checkbox-Control";
import { CheckboxBox as Box } from "./Box/Checkbox-Box";
import { CheckboxControl as Control } from "./Control/Checkbox-Control";
import { CheckboxLabel as Label } from "./Label/Checkbox-Label";
import { CheckboxTick as Tick } from "./Tick/Checkbox-Tick";

import "./Checkbox.scss";

export const cnCheckbox = cn("Checkbox");

export type CheckboxControlProps = Omit<ICheckboxControlProps, "size">;

export interface ICheckboxProps
    extends IWithControlProps<HTMLInputElement>,
        IWithControlDesktopProps<HTMLInputElement>,
        CheckboxControlProps {
    /**
     * Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана
     */
    onBlur?: FocusEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии на компонент
     */
    onClick?: MouseEventHandler<HTMLElement>;

    /**
     * Событие, которое возникает при получении компонентом фокуса
     */
    onFocus?: FocusEventHandler<HTMLElement>;

    /**
     * Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши.
     * `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`
     */
    onMouseDown?: MouseEventHandler<HTMLElement>;

    /**
     * Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши.
     * Курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup`
     */
    onMouseUp?: MouseEventHandler<HTMLElement>;

    /**
     * Обработчик события `onMouseLeave`
     */
    onMouseLeave?: MouseEventHandler<HTMLElement>;

    /**
     * Обработчик события `onMouseEnter`
     */
    onMouseEnter?: MouseEventHandler<HTMLElement>;

    /**
     * Состояние фокуса на компоненте
     */
    focused?: boolean;

    /**
     * Неактивное состояние компонента.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;

    /**
     * Состояние нажатия на компоненте
     */
    pressed?: boolean;

    /**
     * Состояние, которое возникает при наведении на компонент курсором
     */
    hovered?: boolean;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLElement>;

    /**
     * Текст подписи к чекбоксу
     */
    label?: string;

    /**
     * Внешний вид чекбокса
     * @internal
     */
    theme?: string;

    /**
     * Состояние переключателя: включен или выключен
     */
    checked?: boolean;
}

/**
 * Компонент для создания чекбоксов различных типов.
 *
 * @param {ICheckboxProps} props
 */
const CheckboxPresenter: FC<ICheckboxProps> = ({
    checked,
    className,
    controlRef: htmlControlRef,
    disabled,
    focused,
    hovered,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useUniqId("xuniq"),
    innerRef,
    label,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    onKeyDown: htmlOnKeyDown,
    onKeyUp: htmlOnKeyUp,
    theme,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
    ...props
}) => {
    const [pressed, setPressed] = useState(props.pressed || false);
    const controlRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setPressed(props.pressed || false);
    }, [props.pressed]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (isKeyCode(event.keyCode, [Keys.SPACE])) {
                setPressed(true);
            }
            if (htmlOnKeyDown !== undefined) {
                htmlOnKeyDown(event);
            }
        },
        [htmlOnKeyDown]
    );

    const onKeyUp = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (isKeyCode(event.keyCode, [Keys.SPACE])) {
                setPressed(false);
            }
            if (htmlOnKeyUp !== undefined) {
                htmlOnKeyUp(event);
            }
        },
        [htmlOnKeyUp]
    );

    const labelId = `label-${id}`;
    // FIXME: https://github.com/bem/bem-react/issues/381
    const nextProps = omit(props as any, ["pressed", "lines", "theme", "size"]);

    return (
        <span
            className={cnCheckbox({ checked: checked || checked, pressed, focused, disabled, hovered }, [className])}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={innerRef}
        >
            <Box>
                <Control
                    {...nextProps}
                    aria-checked={checked}
                    aria-labelledby={labelId}
                    checked={checked}
                    controlRef={mergeRefs(controlRef, htmlControlRef)}
                    disabled={disabled}
                    id={id}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                />
                <Tick theme={theme} />
            </Box>
            {label && (
                <Label id={labelId} htmlFor={id}>
                    {label}
                </Label>
            )}
        </span>
    );
};

CheckboxPresenter.displayName = cnCheckbox();

export const Checkbox = withControl(CheckboxPresenter);
