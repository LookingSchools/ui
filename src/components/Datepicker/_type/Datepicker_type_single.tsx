import React, { useCallback, useState, useEffect } from 'react';
import { withBemMod, compose, composeU, ExtractProps } from '@bem-react/core';

import { Button as ButtonBase } from '../../Button/Button';
import { withThemeDefault} from '../../Button/_theme/Button_theme_default';
import { withThemePrimary} from '../../Button/_theme/Button_theme_primary';
import { withSizeM as ButtonSizeM } from '../../Button/_size/Button_size_m';
import { cnDatepicker, DatepickerProps, DatepickerSelectedDate } from '../Datepicker';

import { Calendar as CalendarBase } from '../../Calendar/Calendar';
import { withLayoutMonth } from '../../Calendar/_layout/Calendar_layout_month';
import './Datepicker_type_single.scss';

const Calendar = compose(withLayoutMonth)(CalendarBase);

type CalendarProps = ExtractProps<typeof Calendar>;

export interface DatepickerTypeSingleProps extends CalendarProps {
    type?: 'single';
}

const Button = compose(composeU(withThemeDefault, withThemePrimary), ButtonSizeM)(ButtonBase);

const footer = (onChange: () => void, onClose: DatepickerProps['onClose'], value: DatepickerSelectedDate) => {
    return (
        <div className={cnDatepicker('FooterActions')}>
            <Button className={cnDatepicker('FooterAction')} onClick={onClose} theme="default" size="m">
                Отмена
            </Button>
            <Button
                className={cnDatepicker('FooterAction')}
                onClick={onChange}
                theme="primary"
                size="m"
                disabled={!value}
            >
                Выбрать
            </Button>
        </div>
    );
};

export const withTypeSingle = withBemMod<DatepickerTypeSingleProps, DatepickerProps>(
    cnDatepicker(),
    { type: 'single' },
    WrappedComponent => {
        return props => {
            const { onItemClick, onChange, onClose, header, selected } = props;
            const [value, setValue] = useState<DatepickerSelectedDate>(selected as DatepickerSelectedDate);

            const onItemClickHandler = useCallback(
                e => {
                    onItemClick && onItemClick(e);
                    const clickValue = new Date(e.currentTarget.dataset.date);

                    const newValue = value && clickValue.getTime() === value.getTime() ? undefined : clickValue;

                    setValue(newValue as Date);
                },
                [onItemClick, value],
            );

            useEffect(() => {
                setValue(selected as DatepickerSelectedDate);
            }, [selected]);

            const submitHandler = useCallback(() => {
                value && onChange && onChange(value);
            }, [value, onChange]);

            return (
                <WrappedComponent
                    header={header ? header : 'Выберите дату'}
                    {...props}
                    footer={footer(submitHandler, onClose, value)}
                >
                    <Calendar layout="month" {...props} selected={value} onItemClick={onItemClickHandler} />
                </WrappedComponent>
            );
        };
    },
);
