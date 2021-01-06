import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Calendar.scss';

export type CalendarSelected = Date | undefined;

export interface CalendarProps {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Выбранная дата или даты
     */
    selected?: CalendarSelected | CalendarSelected[];
    /**
     * Границы выбора даты
     * TODO: переименовать в maxDate и minDate
     */
    borders?: Date[];
}

export const cnCalendar = cn('Calendar');

export const Calendar: FC<CalendarProps> = ({ className, children }) => {
    return (
        <div className={cnCalendar(null, [className])}>
            {children}
        </div>
    );
};

export { CalendarI18n } from './Calendar.i18n';
