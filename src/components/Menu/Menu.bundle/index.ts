import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

// base
import { IMenuProps as IMenuDesktopProps, Menu as MenuDesktop } from '../Menu';
// _size
import { withSizeM } from '../_size/Menu_size_m';
import { withSizeS } from '../_size/Menu_size_s';
// _theme
import { withThemeClear } from '../_theme/Menu_theme_clear';
// _theme
import { withThemeDefault } from '../_theme/Menu_theme_default';
// _width
import { withWidthAuto } from '../_width/Menu_width_auto';
import { withWidthMax } from '../_width/Menu_width_max';

export * from '../Menu';

export interface IMenuProps extends IMenuDesktopProps {
    size?: 'm' | 's';
    theme?: 'default' | 'clear';
    width?: 'auto' | 'max';
}

export const Menu = compose(
    composeU(withSizeM, withSizeS),
    composeU(withWidthAuto, withWidthMax),
    composeU(withThemeClear, withThemeDefault),
)(MenuDesktop) as FC<IMenuProps>;
