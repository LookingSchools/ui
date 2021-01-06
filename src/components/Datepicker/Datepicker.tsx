import React, { FC, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './Datepicker.scss';
import { CalendarProps } from '../Calendar/Calendar';

export const cnDatepicker = cn('Datepicker');

export interface DatepickerProps extends CalendarProps {
    /*
     * Дополнительный CSS-класс
     */
    className?: string;
    /*
     * Заголовок
     */
    header?: ReactNode;
    /*
     * Футер
     */
    footer?: ReactNode;
    /*
     * Обработчик при выборе даты
     */
    onChange?: (selected: Date | Date[]) => void;
    /*
     * Обработчик отмены выбора
     */
    onClose?: () => void;
}

export type DatepickerSelectedDate = Date | undefined;

export const Datepicker: FC<DatepickerProps> = props => {
    const { className, header, footer, children } = props;

    return (
        <div className={cnDatepicker(null, [className])}>
            {header && <div className={cnDatepicker('Header')}>{header}</div>}
            <div className={cnDatepicker('Calendar')}>{children}</div>
            {footer && <div className={cnDatepicker('Bottom')}>{footer}</div>}
        </div>
    );
};

export { DatepickerI18n } from './Datepicker.i18n';
