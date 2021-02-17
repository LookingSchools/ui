import React, { FC, MouseEventHandler, useMemo } from "react";

import { CalendarProps, cnCalendar } from "../Calendar";
import "./CalendarMonth.scss";
import { getFirstDayInMonth, addMonth } from "../utils";
import { CalendarI18n } from "../Calendar.i18n";

interface CalendarMonthProps {
    month: Date;
    monthsNames?: string[];
    borders?: CalendarProps["borders"];
    changeableMonth?: boolean;
    prevMonthHandler: MouseEventHandler<HTMLElement>;
    nextMonthHandler: MouseEventHandler<HTMLElement>;
}

export const CalendarMonth: FC<CalendarMonthProps> = ({
    month,
    changeableMonth = true,
    borders,
    prevMonthHandler,
    nextMonthHandler,
}) => {
    const monthName = useMemo(() => CalendarI18n.getMonthName(month), [month]);

    const leftDisabled = borders && borders[0] > getFirstDayInMonth(month);
    const rightDisabled = borders && borders[1] < getFirstDayInMonth(addMonth(month, 1));

    return (
        <div className={cnCalendar("Month", { changeable: changeableMonth })}>
            {changeableMonth && (
                <button
                    onClick={prevMonthHandler}
                    className={cnCalendar("MonthArrow", { left: true, disabled: leftDisabled })}
                />
            )}
            <span className={cnCalendar("MonthName")}>{monthName}</span>
            {changeableMonth && (
                <button
                    onClick={nextMonthHandler}
                    className={cnCalendar("MonthArrow", { right: true, disabled: rightDisabled })}
                />
            )}
        </div>
    );
};
