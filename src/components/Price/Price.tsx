import React, { PureComponent } from 'react';
import { cn } from '@bem-react/classname';
import './Price.scss';

export const cnPrice = cn('Price');

export const NOWRAP_SPACE = '\u00a0';

interface IPriceIntProps {
    price: string;
    currency: string;
    type: 'CurrentPrice' | 'OldPrice';
}

const PriceInt = ({ price, currency, type }: IPriceIntProps) => (
    <span className={cnPrice(type)}>
        {price}
        {NOWRAP_SPACE}
        <span className={cnPrice('Currency')}>{currency}</span>
    </span>
);

export interface IPriceProps {
    price: number;
    className?: string;
    oldPrice?: number;
    size?: 's' | 'm' | 'l';
    theme?: 'responsive' | 'clear';
}

const convertPrice = (price: number): string =>
    price
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${NOWRAP_SPACE}`)
        .replace('.', ',');

export const Price = class extends PureComponent<IPriceProps> {
    static displayName = cnPrice();

    render() {
        const {
            price,
            oldPrice = 0,
            className,
            size = 'l',
            // Не выводим старую цену и размеры если тема "responsive".
            // Она задает вывод обычной цены с размерами наследуемыми от контейнера.
            // Для остальных тем нет таких ограничений.
            theme,
            ...props
        } = this.props as IPriceProps;

        if (price === 0) {
            return <div className={cnPrice({ empty: true, size })}>&nbsp;</div>;
        }

        const currency = '\u20BD';
        const withOldPrice = oldPrice > 0 && theme !== 'responsive';
        const blockClassName = cnPrice({
            'with-old-price': withOldPrice,
            theme: theme || false,
            size: theme !== 'responsive' ? size : false,
        });

        return (
            <span {...props} className={blockClassName}>
                <PriceInt price={convertPrice(price)} currency={currency} type={'CurrentPrice'} />

                {withOldPrice && <PriceInt price={convertPrice(oldPrice)} currency={currency} type={'OldPrice'} />}
            </span>
        );
    }
};
