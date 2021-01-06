export const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const getFirstDayInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const addMonth = (date: Date, value: number) => {
    const month = date.getMonth();
    const newDate = new Date(date.getTime());
    newDate.setMonth(month + value);

    return newDate;
};

export const getMonthsBeetweenDates = (borders: Date[]): Date[] => {
    const [start, end] = borders;
    const current = getFirstDayInMonth(start);
    let next = addMonth(current, 1);

    const result: Date[] = [current];

    while (end.getTime() > next.getTime()) {
        result.push(next);
        next = addMonth(next, 1);
    }

    return result;
};

export const getNormalizedDayWeek = (date: Date) => {
    // 0 исправляем на 7
    const dayWeek = date.getDay() || 7;

    return dayWeek;
};

export const isWeekendByIndex = (index: number) => {
    return index > 5;
};

export const isWeekend = (date: Date) => {
    const dayWeek = getNormalizedDayWeek(date);

    return isWeekendByIndex(dayWeek);
};

export const normalizeDate = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export type DateItem = {
    date: Date;
    isCurrentMonth: boolean;
    isFirstDay: boolean;
    isLastDay: boolean;
    isWeekend: boolean;
};

export const getMonthTable = (date: Date) => {
    const result: DateItem[] = [];
    const daysCount = getDaysInMonth(date);

    // если 1, то первый день в месяце ПН
    // 0 исправляем на 7
    const firstDayInMonth = getNormalizedDayWeek(new Date(date.getFullYear(), date.getMonth(), 1));
    const lastDayInMonth = getNormalizedDayWeek(new Date(date.getFullYear(), date.getMonth(), daysCount));

    const beforeCount = firstDayInMonth - 1;
    const afterCount = 7 - lastDayInMonth;

    const total = beforeCount + daysCount + afterCount;

    for (let index = 1; index <= total; index++) {
        const currentDay = index - beforeCount;

        const dateItem = new Date(date.getFullYear(), date.getMonth(), currentDay);

        result.push({
            date: dateItem,
            isCurrentMonth: index > beforeCount && index <= beforeCount + daysCount,
            isLastDay: index === beforeCount + daysCount,
            isFirstDay: index === beforeCount + 1,
            isWeekend: isWeekend(dateItem),
        });
    }

    return result;
};
