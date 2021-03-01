import React, { FC } from 'react';

import { cnTooltip } from '../Tooltip';
import './Tooltip-Backdrop.scss';

// prettier-ignore
export const TooltipBackdrop: FC<{}> = ({ children }) => (
    <div className={cnTooltip('Backdrop')}>{children}</div>
);
