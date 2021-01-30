import { compose } from '@bem-react/core';

// base
import { Drawer as DrawerTouchPhone } from '../Drawer';
// _view
import { withThemeDefault } from '../_theme/Drawer_theme_default';

export * from '../Drawer';

export const Drawer = compose(withThemeDefault)(DrawerTouchPhone);