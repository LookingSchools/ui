import { withBemMod } from '@bem-react/core';

import { cnBadge } from '../Badge';
import './Badge_type_dot.scss';

export const withTypeDot = withBemMod(cnBadge(), { type: 'dot' });
