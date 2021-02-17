import { withBemMod } from '@bem-react/core';

import { cnBadge } from '../Badge';
import './Badge_direction_top-right.scss';

export const withDirectionTopRight = withBemMod(cnBadge(), {
    direction: 'top-right',
});
