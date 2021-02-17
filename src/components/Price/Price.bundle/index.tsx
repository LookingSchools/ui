import { compose, composeU } from '@bem-react/core';
import { Price as PriceBase } from '../Price';

// _size
import { withSizeL } from '../_size/Price_size_l';
import { withSizeM } from '../_size/Price_size_m';
import { withSizeS } from '../_size/Price_size_s';

// _theme
import { withThemeResponsive } from '../_theme/Price_theme_responsive';
import { withThemeClear } from '../_theme/Price_theme_clear';

//_empty
import { withEmpty } from '../_empty/Price_empty';

//_with-old-price
import { withWithOldPrice } from '../_with-old-price/Price_with-old-price';

export * from '../Price';

export const Price = compose(
    composeU(withSizeL, withSizeM, withSizeS),
    composeU(withThemeResponsive, withThemeClear),
    withEmpty,
    withWithOldPrice
)(PriceBase);
