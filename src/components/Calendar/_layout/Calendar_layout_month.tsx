import React, { FC, useMemo, MouseEventHandler, useCallback, useState } from 'react';
import { withBemMod } from '@bem-react/core';

import { normalizeDate, isWeekendByIndex, DateItem, getMonthTable, addMonth } from '../utils';
import { CalendarI18n } from '../Calendar.i18n';
import { CalendarMonth } from '../Month/CalendarMonth';
import { CalendarProps, cnCalendar } from '../Calendar';

import './Calendar_layout_month.scss';

export interface DateItemExtended extends DateItem {
    isDisabled: boolean;
    text: string;
}

export interface CalendarLayoutMonthProps {
    layout?: 'month';
    month?: Date;
    isDisabledItem?: (date: Date) => boolean;
    onItemClick?: MouseEventHandler<HTMLElement>;
    onItemHover?: MouseEventHandler<HTMLElement>;
    showMonth?: boolean;
    showDayWeek?: boolean;
    showDays?: boolean;
    changeableMonth?: boolean;
}
export type SelectedTime = number | undefined;

const inRange = (selectedTime: SelectedTime[], date: number) => {
    if (!selectedTime[0] || !selectedTime[1]) return false;

    return date >= selectedTime[0] && date <= selectedTime[1];
};

const getExtendedMonthTable = (
    date: Date,
    isDisabled: CalendarLayoutMonthProps['isDisabledItem'],
    borders: CalendarProps['borders']
) => {
    const items: DateItem[] = getMonthTable(date);
    const bordersTime = borders ? borders.map(b => normalizeDate(b).getTime()) : null;

    return items.map(CalendarItem => {
        const itemInRange = bordersTime ? inRange(bordersTime, CalendarItem.date.getTime()) : true;
        // проверяем только те даты которые в диапазоне
        const disabled = isDisabled && itemInRange ? isDisabled(CalendarItem.date) : false;

        const extend = {
            isDisabled: !itemInRange || disabled,
            text: String(CalendarItem.date.getDate()),
        };

        return { ...CalendarItem, ...extend };
    });
};

export type CalendarItemHandlers = {
    onClick?: MouseEventHandler<HTMLElement>;
    onMouseOver?: MouseEventHandler<HTMLElement>;
};

const CalendarItem = (
    Item: DateItemExtended,
    selectedTime?: SelectedTime[] | SelectedTime,
    handlers?: CalendarItemHandlers
) => {
    const { text, isWeekend, isCurrentMonth, isFirstDay, isLastDay, date, isDisabled } = Item;

    let selected = false;
    let dateBeetween = false;
    let isFirstSelected = false;
    let isSecondSelected = false;

    const itemTime = normalizeDate(date).getTime();

    if (Array.isArray(selectedTime)) {
        isFirstSelected = selectedTime[0] === itemTime;
        isSecondSelected = selectedTime[1] === itemTime;

        selected = isFirstSelected || isSecondSelected;

        dateBeetween = inRange(selectedTime, itemTime);
    } else if (selectedTime) {
        selected = selectedTime === itemTime;
    }

    return (
        <div
            key={itemTime}
            data-date={date}
            className={cnCalendar('Item', {
                disabled: isDisabled,
                weekend: isWeekend,
                anotherMonth: !isCurrentMonth,
                first: isFirstDay,
                last: isLastDay,
                beetween: dateBeetween,
                selected,
                selectedFirst: isFirstSelected,
                selectedSecond: isSecondSelected,
            })}
            {...handlers}
        >
            <div className={cnCalendar('ItemContent')}>{text}</div>
        </div>
    );
};

export const CalendarLayoutMonth: FC<CalendarLayoutMonthProps & CalendarProps> = props => {
    let {
        month = new Date(),
        showMonth = true,
        showDayWeek = true,
        showDays = true,
        changeableMonth = true,
        borders,
    } = props;

    if (typeof month === 'string' || typeof month === 'number') {
        month = new Date(month);
    }

    const { onItemClick, onItemHover, isDisabledItem, selected } = props;
    const [currentMonth, setCurrentMonth] = useState(month);

    const days = useMemo(() => getExtendedMonthTable(currentMonth, isDisabledItem, borders), [
        currentMonth,
        isDisabledItem,
        borders,
    ]);
    const weekDays: string[] = useMemo(() => days.slice(0, 7).map(({ date }) => CalendarI18n.getWeekDayName(date)), [
        days,
    ]);

    const selectedTime = useMemo(() => {
        return Array.isArray(selected)
            ? selected.map(date => (date ? normalizeDate(date).getTime() : undefined))
            : selected && normalizeDate(selected).getTime();
    }, [selected]);

    const nextMonthHandler = useCallback(() => {
        setCurrentMonth(current => {
            return addMonth(current, 1);
        });
    }, []);

    const prevMonthHandler = useCallback(() => {
        setCurrentMonth(current => {
            return addMonth(current, -1);
        });
    }, []);

    return (
        <div className={cnCalendar({ layout: 'month' })}>
            {showDayWeek && (
                <div className={cnCalendar('WeekDays')}>
                    {weekDays.map((text, index) => (
                        <div key={text} className={cnCalendar('Item', { weekend: isWeekendByIndex(index + 1) })}>
                            {text}
                        </div>
                    ))}
                </div>
            )}
            {showMonth && (
                <CalendarMonth
                    month={currentMonth}
                    borders={props.borders}
                    changeableMonth={changeableMonth}
                    prevMonthHandler={prevMonthHandler}
                    nextMonthHandler={nextMonthHandler}
                />
            )}
            {showDays && (
                <div className={cnCalendar('Days')}>
                    {days.map(item =>
                        CalendarItem(item, selectedTime, { onMouseOver: onItemHover, onClick: onItemClick })
                    )}
                </div>
            )}
        </div>
    );
};

export const withLayoutMonth = withBemMod<CalendarLayoutMonthProps, CalendarProps>(
    cnCalendar(),
    { layout: 'month' },
    WrappedComponent => {
        return props => {
            return (
                <WrappedComponent {...props}>
                    <CalendarLayoutMonth {...props} />
                </WrappedComponent>
            );
        };
    }
);
