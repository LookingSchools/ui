import { CalendarI18n, CalendarI18nFormatters } from '../Calendar/Calendar.i18n';

export interface DatepickerI18nFormatters extends CalendarI18nFormatters {
    selectedDate: Intl.DateTimeFormat;
}

export const DatepickerI18n = {
    CalendarI18n,
    formatters: CalendarI18n.formatters as DatepickerI18nFormatters,
    strings: {
        'Выберите дату': 'Выбрать дату',
        // eslint-disable-next-line
        Начало: 'Начало',
        // eslint-disable-next-line
        Конец: 'Конец',
        // eslint-disable-next-line
        Выбрать: 'Выбрать',
    },
    selectedDateFormatter(date: Date) {
        if (!this.formatters.selectedDate) {
            this.formatters.selectedDate = new Intl.DateTimeFormat(this.CalendarI18n.locale, {
                weekday: 'short',
                month: 'long',
                day: 'numeric',
            });
        }

        return this.formatters.selectedDate.format(date);
    },
    setLocale(locale: string) {
        return this.CalendarI18n.setLocale(locale);
    },
};
