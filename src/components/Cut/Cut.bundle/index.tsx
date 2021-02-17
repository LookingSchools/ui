import { compose, composeU } from '@bem-react/core';

import { Cut as CutBase } from '../Cut';

// _size
import { withSizeL } from '../_size/Cut_size_l';
import { withSizeM } from '../_size/Cut_size_m';
import { withSizeS } from '../_size/Cut_size_s';

export * from '../Cut';

export const Cut = compose(composeU(withSizeL, withSizeM, withSizeS))(CutBase);
