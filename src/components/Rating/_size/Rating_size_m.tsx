import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnRating } from '../Rating';

import './Rating_size_m.scss';
import { IRatingProps } from '../Rating';

export interface IRatingSizeM {
    size?: 'm';
}

export const withSizeM = withBemMod<IRatingSizeM, IRatingProps>(
    cnRating(),
    { size: 'm' },
    WrappedComponent => withBemModprops => <WrappedComponent starSize={16} {...withBemModprops} />
);
