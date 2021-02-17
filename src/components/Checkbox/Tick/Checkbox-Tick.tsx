import React, { FC } from 'react';
import { composeU } from '@bem-react/core';
import { Icon as IconPresenter } from '../../Icon/Icon';
import { withGlyphTick } from '../../Icon/_glyph/Icon_glyph_tick';

import { cnCheckbox } from '../Checkbox';
import './Checkbox-Tick.scss';

export const Icon = composeU(withGlyphTick)(IconPresenter);

export interface ICheckboxTickProps {
    theme?: string;
    className?: string;
}

export const CheckboxTick: FC<ICheckboxTickProps> = ({ className, theme, ...props }) => {
    return (
        <span {...props} className={cnCheckbox('Tick', null, [className])}>
            {theme && <Icon glyph="tick" />}
        </span>
    );
};
