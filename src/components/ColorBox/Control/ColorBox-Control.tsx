import React, { RefObject, ChangeEventHandler, MouseEventHandler, FC } from 'react';

import { cnColorBox as cn } from '../ColorBox';
import './ColorBox-Control.scss';

export interface IColorBoxControlProps {
    /**
     * Ссылка на DOM элемент нативного инпута
     */
    controlRef?: RefObject<HTMLInputElement>;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Обработчик клика
     */
    onClick?: MouseEventHandler<HTMLInputElement>;

    /**
     * HTML-атрибут `disabled`
     */
    disabled?: boolean;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * Обработчик изменения значения
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const ColorBoxControl: FC<IColorBoxControlProps> = ({ controlRef, className, ...props }) => (
    <input
        {...props}
        className={cn('Control', null, [className])}
        // Отключаем autoComplete, чтобы в FireFox
        // не сохранялось значение при перезагрузке страницы.
        autoComplete="off"
        ref={controlRef}
        type="radio"
    />
);
