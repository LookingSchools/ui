import { compose, composeU } from '@bem-react/core';

import { MessageBox as MessageBoxCommon, MessageBoxPopup as MessageBoxPopupCommon } from '../MessageBox@mobile';
import { withViewDefault } from '../_theme/MessageBox_theme_default';
import { withViewPromo } from '../_view/MessageBox_theme_promo';
import { withViewInverse } from '../_view/MessageBox_theme_inverse';
import { withSizeL } from '../_size/MessageBox_size_l';
import { withSizeM } from '../_size/MessageBox_size_m';
import { withSizeS } from '../_size/MessageBox_size_s';

export * from '../MessageBox@mobile';

const enhance = compose(
    composeU(withViewDefault, withViewPromo, withViewInverse),
    composeU(withSizeL, withSizeM, withSizeS),
);

export const MessageBox = enhance(MessageBoxCommon);
export const MessageBoxPopup = enhance(MessageBoxPopupCommon);
