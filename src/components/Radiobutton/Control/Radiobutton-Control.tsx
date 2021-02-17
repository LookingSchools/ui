import React, { RefObject, ChangeEventHandler, MouseEventHandler, FC } from 'react';

import { cnRadiobutton as cn } from '../Radiobutton';
import './Radiobutton-Control.scss';

export interface IRadiobuttonControlProps {
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
     * Значение контрола
     */
    value: string;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * Обработчик изменения значения
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /**
     * Имя компонента
     */
    name?: string;
}

export const RadiobuttonControl: FC<IRadiobuttonControlProps> = ({ controlRef, className, ...props }) => (
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
