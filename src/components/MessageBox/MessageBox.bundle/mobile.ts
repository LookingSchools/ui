import { compose, composeU } from '@bem-react/core';

import { MessageBox as MessageBoxCommon, MessageBoxPopup as MessageBoxPopupCommon } from '../MessageBox@mobile';
import { withThemeDefault } from '../_theme/MessageBox_theme_default';
import { withThemePromo } from '../_theme/MessageBox_theme_promo';
import { withThemeInverse } from '../_theme/MessageBox_theme_inverse';
import { withSizeL } from '../_size/MessageBox_size_l';
import { withSizeM } from '../_size/MessageBox_size_m';
import { withSizeS } from '../_size/MessageBox_size_s';

export * from '../MessageBox@mobile';

const enhance = compose(
    composeU(withThemeDefault, withThemePromo, withThemeInverse),
    composeU(withSizeL, withSizeM, withSizeS),
);

export const MessageBox = enhance(MessageBoxCommon);
export const MessageBoxPopup = enhance(MessageBoxPopupCommon);
