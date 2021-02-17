import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnRating } from '../Rating';

import './Rating_type_extended.scss';
import { IRatingProps } from '../Rating';
import { RatingValue } from '../Value/RatingValue';
import { RatingHint } from '../Hint/RatingHint';

export interface IRatingTypeExtended {
    hint?: string;
    type?: 'extended';
}

export const withTypeExtended = withBemMod<IRatingTypeExtended, IRatingProps>(
    cnRating(),
    { type: 'extended' },
    WrappedComponent => withBemModprops => (
        <WrappedComponent {...withBemModprops}>
            <RatingValue base={withBemModprops.base} value={withBemModprops.value} />
            {withBemModprops.hint && <RatingHint hint={withBemModprops.hint} />}
        </WrappedComponent>
    )
);
