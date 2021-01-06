export interface CalendarI18nFormatters {
    month: Intl.DateTimeFormat;
    weekday: Intl.DateTimeFormat;
}

export const CalendarI18n = {
    locale: 'ru-RU',
    formatters: {} as CalendarI18nFormatters,
    getMonthName(date: Date) {
        if (!this.formatters.month) {
            this.formatters.month = new Intl.DateTimeFormat(this.locale, { month: 'long' });
        }

        return this.formatters.month.format(date);
    },
    getWeekDayName(date: Date) {
        if (!this.formatters.weekday) {
            this.formatters.weekday = new Intl.DateTimeFormat(this.locale, { weekday: 'short' });
        }

        return this.formatters.weekday.format(date);
    },
    setLocale(locale: string) {
        if (Intl.DateTimeFormat.supportedLocalesOf(locale).length === 0) {
            throw new Error(`Locale ${locale} - not supported`);
        }

        this.locale = locale;
    },
};
