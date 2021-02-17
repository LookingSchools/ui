import React, { useCallback, useState, useMemo, useEffect, createRef } from 'react';
import { withBemMod, compose, composeU, ExtractProps } from '@bem-react/core';
import { Button as ButtonBase } from '../../Button/Button';
import { withThemeDefault } from '../../Button/_theme/Button_theme_default';
import { withThemePrimary } from '../../Button/_theme/Button_theme_primary';
import { withSizeM as ButtonSizeM } from '../../Button/_size/Button_size_m';

import { Textinput as TextinputBase } from '../../Textinput/Textinput';
import { withThemeDefault as TextinputWithThemeDefault } from '../../Textinput/_theme/Textinput_theme_default';
import { withSizeM } from '../../Textinput/_size/Textinput_size_m';

import { cnDatepicker, DatepickerProps, DatepickerSelectedDate } from '../Datepicker';

import { Calendar as CalendarBase, CalendarSelected } from '../../Calendar/Calendar';
import { withLayoutMonth } from '../../Calendar/_layout/Calendar_layout_month';
import { getMonthsBeetweenDates } from '../../Calendar/utils';

import { ArrowIcon } from '../ArrowIcon';

import './Datepicker_type_range.scss';
import { DatepickerI18n } from '../Datepicker.i18n';

const Textinput = compose(withSizeM, TextinputWithThemeDefault)(TextinputBase);
const Calendar = compose(withLayoutMonth)(CalendarBase);
const Button = compose(composeU(withThemeDefault, withThemePrimary), ButtonSizeM)(ButtonBase);

type CalendarProps = ExtractProps<typeof Calendar>;

export interface DatepickerTypeRangeProps extends CalendarProps {
    type?: 'range';
    btnText?: React.ReactNode;
    selected?: Date[];
    dateFormatter?: (date: Date) => string;
}

const defaultDateFormatter: DatepickerTypeRangeProps['dateFormatter'] = date => {
    return DatepickerI18n.selectedDateFormatter(date);
};

enum TCurrentDateSelecting {
    First,
    Second,
}

const isShouldReplaceValues = (value: DatepickerSelectedDate[]) => {
    if (value[0] && value[1]) {
        if (value[0].getTime() > value[1].getTime()) {
            return true;
        }
    }

    return false;
};

const footer = (onSubmit: () => void, btnText: React.ReactNode, value: CalendarSelected[]) => {
    const allSelected = value && value.filter(Boolean).length === 2;

    if (!allSelected) return null;

    return (
        <div className={cnDatepicker('FooterActions')}>
            <Button
                className={cnDatepicker('FooterAction')}
                onClick={onSubmit}
                theme="primary"
                size="m"
                disabled={!allSelected}
            >
                {btnText}
            </Button>
        </div>
    );
};

export const withTypeRange = withBemMod<DatepickerTypeRangeProps, DatepickerProps>(
    cnDatepicker(),
    { type: 'range' },
    WrappedComponent => {
        return props => {
            const {
                onItemClick,
                onChange,
                header,
                selected,
                borders,
                isDisabledItem,
                btnText = DatepickerI18n.strings['Выбрать'],
                dateFormatter = defaultDateFormatter,
            } = props;
            const [value, setValue] = useState<DatepickerSelectedDate[]>(selected || []);
            const [currentSelecting, setCurrentSelecting] = useState<TCurrentDateSelecting>(
                TCurrentDateSelecting.First
            );

            const startInputRef = createRef<HTMLInputElement>();
            const endInputRef = createRef<HTMLInputElement>();

            const months = useMemo(() => {
                return borders ? getMonthsBeetweenDates(borders) : [new Date()];
            }, [borders]);

            useEffect(() => {
                currentSelecting === TCurrentDateSelecting.First
                    ? startInputRef.current && startInputRef.current.focus()
                    : endInputRef.current && endInputRef.current.focus();
            }, [startInputRef, endInputRef, currentSelecting]);

            useEffect(() => {
                setValue(selected || []);
            }, [selected]);

            const onItemClickHandler = useCallback(
                e => {
                    onItemClick && onItemClick(e);
                    const clickValue = new Date(e.currentTarget.dataset.date);

                    const newValue =
                        currentSelecting === TCurrentDateSelecting.First
                            ? [clickValue, value && value[1]]
                            : [value && value[0], clickValue];

                    if (isShouldReplaceValues(newValue)) {
                        setValue([newValue[1], newValue[0]]);
                    } else {
                        setValue(newValue);

                        setCurrentSelecting(
                            currentSelecting === TCurrentDateSelecting.First
                                ? TCurrentDateSelecting.Second
                                : TCurrentDateSelecting.First
                        );
                    }
                },
                [onItemClick, value, currentSelecting, setCurrentSelecting]
            );

            const submitHandler = useCallback(() => {
                onChange && onChange(value as Date[]);
            }, [value, onChange]);

            const firstInputClickHandler = useCallback(() => {
                setCurrentSelecting(TCurrentDateSelecting.First);
            }, []);

            const secondInputClickHandler = useCallback(() => {
                setCurrentSelecting(TCurrentDateSelecting.Second);
            }, []);

            return (
                <WrappedComponent
                    header={header ? header : DatepickerI18n.strings['Выберите дату']}
                    {...props}
                    footer={footer(submitHandler, btnText, value)}
                >
                    <div className={cnDatepicker('RangeHeader')}>
                        <div className={cnDatepicker('SelectedRange')}>
                            <Textinput
                                onClick={firstInputClickHandler}
                                controlRef={startInputRef}
                                theme="default"
                                size="m"
                                value={value && value[0] ? dateFormatter(value[0]).toLocaleLowerCase() : ''}
                                placeholder={DatepickerI18n.strings['Начало']}
                                // @ts-ignore
                                readOnly
                            />
                            <ArrowIcon className={cnDatepicker('SelectedRangeArrow')} />
                            <Textinput
                                onClick={secondInputClickHandler}
                                controlRef={endInputRef}
                                theme="default"
                                size="m"
                                value={value && value[1] ? dateFormatter(value[1]).toLocaleLowerCase() : ''}
                                placeholder={DatepickerI18n.strings['Конец']}
                                // @ts-ignore
                                readOnly
                            />
                        </div>
                        <Calendar layout="month" month={new Date()} showMonth={false} showDays={false} showDayWeek />
                    </div>
                    <div className={cnDatepicker('CalendarListWrapper')}>
                        <div className={cnDatepicker('CalendarList')}>
                            {months.map(month => {
                                return (
                                    <Calendar
                                        className={cnDatepicker('RangeItem')}
                                        key={month.getTime()}
                                        layout="month"
                                        borders={borders}
                                        isDisabledItem={isDisabledItem}
                                        month={month}
                                        selected={value}
                                        changeableMonth={false}
                                        showDayWeek={false}
                                        onItemClick={onItemClickHandler}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </WrappedComponent>
            );
        };
    }
);
