import React from 'react';
import { IClassNameProps } from '@bem-react/core';
import { RatingStars } from './Stars/Rating-Stars';
import { cn } from '@bem-react/classname';

import './Rating.scss';

export const cnRating = cn('Rating');

export interface IRatingProps extends IClassNameProps {
    value: number;
    base: number;
    hint?: string;
    starSize?: number;
    size: 's' | 'm' | 'l';
    type?: string;
}

export class Rating extends React.Component<IRatingProps> {
    render() {
        const { value, base, starSize = 12, className, children } = this.props;

        return (
            <span className={cnRating(null, [className])}>
                <RatingStars value={value} base={base} size={starSize} />
                {children}
            </span>
        );
    }
}
