import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnRating } from '../Rating';

import './Rating_size_s.scss';
import { IRatingProps } from '../Rating';

export interface IRatingSizeS {
    size?: 's';
}

export const withSizeS = withBemMod<IRatingSizeS, IRatingProps>(
    cnRating(),
    { size: 's' },
    WrappedComponent => withBemModprops => <WrappedComponent starSize={12} {...withBemModprops} />
);
