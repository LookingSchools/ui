import React, { ReactNode } from 'react';

import { cnRadiobutton as cn } from '../Radiobutton';
import './Radiobutton-Radio.scss';

import { IWithControlProps, withControl } from '../../../hocs/withControl/withControl';

export interface IRadiobuttonRadioProps extends IWithControlProps<HTMLLabelElement> {
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
     * Дополнительный класс
     */
    side?: string;

    /**
     * Выбранное состояние
     */
    hovered?: boolean;
}

export const RadiobuttonRadio = withControl(
    ({ checked, children, className, disabled, hovered, side, focused, pressed, ...props }: IRadiobuttonRadioProps) => (
        <label
            {...props}
            className={cn(
                'Radio',
                {
                    checked,
                    disabled,
                    hovered,
                    side,
                    focused,
                    pressed,
                },
                [className]
            )}
        >
            {children}
        </label>
    )
);
