import React, { PureComponent } from 'react';
import { cn } from '@bem-react/classname';
import './DiscountBadge.scss';

export const cnDiscountBadge = cn('DiscountBadge');

export interface IDiscountBadgeProps {
    className?: string;
    percent: number;
}

export const DiscountBadge = class extends PureComponent<IDiscountBadgeProps> {
    render() {
        const {
            className,
            percent,
            // Извлекаем свойства, т.к. они не нужны на DOM узле
            // @ts-ignore
            theme: _theme,
            // @ts-ignore
            size: _size,
            ...props
        } = this.props as IDiscountBadgeProps;

        return (
            <span {...props} className={cnDiscountBadge(null, [className])}>
                <span className={cnDiscountBadge('Discount')}>{percent}</span>
            </span>
        );
    }
};
