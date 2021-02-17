import React, {
    FC,
    RefObject,
    ReactNode,
    useState,
    useCallback,
    useRef,
    FocusEventHandler,
    MouseEventHandler,
    KeyboardEventHandler,
} from 'react';

import { cn } from '@bem-react/classname';
import { compose } from '@bem-react/core';

import { TextareaWrap as Wrap } from './Wrap/Textarea-Wrap';
import { TextareaControl as Control } from './Control/Textarea-Control';
import { TextareaBox as Box } from './Box/Textarea-Box';
import { TextareaHint as Hint } from './Hint/Textarea-Hint';

import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { IWithControlProps, withControl } from '../../hocs/withControl/withControl';
import { IWithControlProps as IWithControlPropsDesktop } from '../../hocs/withControl/withControl';
import { ITextareaControlProps } from './Control/Textarea-Control';
import { withAutoFocus } from '../../hocs/withAutoFocus/withAutoFocus';

import './Textarea.scss';

export interface ITextareaProps
    extends IWithControlProps<HTMLTextAreaElement>,
        IWithControlPropsDesktop<HTMLTextAreaElement>,
        ITextareaControlProps {
    /**
     * Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана
     */
    onBlur?: FocusEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии на компонент
     */
    onClick?: MouseEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии клавиш клавиатуры
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;

    /**
     * Событие, которое возникает при получении компонентом фокуса
     */
    onFocus?: FocusEventHandler<HTMLElement>;

    /**
     * Событие по своему действию похоже на `onClick` и возникает в момент нажатия на кнопку мыши.
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
     * Состояние нажатия на компоненте
     */
    pressed?: boolean;

    /**
     * Неактивное состояние компонента.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;

    /**
     * Состояние, которое возникает при наведении на компонент курсором
     */
    hovered?: boolean;

    /**
     * Дополнительный контент после контрола.
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед контролом.
     */
    addonBefore?: ReactNode;

    /**
     * Ссылка на корневой DOM элемент компонента.
     */
    innerRef?: RefObject<HTMLSpanElement>;
    /**
     * Текст-подсказка, появляющаяся после компонента.
     * Может иметь различное визуальное оформление в зависимости от свойства `state`.
     */
    hint?: string;

    /**
     * Визуальное состояние компонента.
     * Может использоваться при проверке формы на корректность.
     */
    state?: 'error';
}

export const cnTextarea = cn('Textarea');

/**
 * Многострочное текстовое поле.
 * @param {ITextareaProps} props
 */
const TextareaBase: FC<ITextareaProps> = ({
    addonAfter,
    addonBefore,
    disabled,
    focused,
    hovered,
    onMouseEnter,
    onMouseLeave,
    innerRef,
    className: textareaClassName,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    pressed: _pressed,
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
    hint: htmlHint,
    state,
    ...props
}) => {
    const className = cnTextarea(
        {
            hovered,
            focused,
            disabled,
            state,
        },
        [textareaClassName]
    );

    const [hint, setHint] = useState(htmlHint);
    const [hintLeave, setHintLeave] = useState(false);
    const prevHint = useRef(htmlHint);

    useUpdateEffect(() => {
        if (htmlHint !== '') {
            setHint(htmlHint);
        } else if (prevHint.current !== '') {
            setHintLeave(true);
        }

        prevHint.current = htmlHint;
    }, [htmlHint]);

    const onAnimationEnd = useCallback(() => {
        if (htmlHint === '') {
            setHint('');
            setHintLeave(false);
        }
    }, [htmlHint]);

    return (
        <span ref={innerRef} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {addonBefore}
            <Wrap>
                <Control {...props} aria-invalid={state === 'error'} disabled={disabled} />
                <Box />
            </Wrap>
            {addonAfter}
            {hint && (
                <Hint leave={hintLeave} onAnimationEnd={onAnimationEnd}>
                    {hint}
                </Hint>
            )}
        </span>
    );
};

TextareaBase.displayName = cnTextarea();

export const Textarea = compose(withControl, withAutoFocus)(TextareaBase);
