import React from 'react';
import { cnRating } from '../Rating';

export interface IRatingHintProps {
    hint: string;
}

export const RatingHint = (props: IRatingHintProps) => <span className={cnRating('Hint')}>{props.hint}</span>;
