import { withBemMod } from '@bem-react/core';

import { cnDrawer } from '../Drawer.const';
import './Drawer_theme_default.scss';

export interface IDrawerThemeDefaultProps {
    theme?: 'default';
}

export const withThemeDefault = withBemMod<IDrawerThemeDefaultProps>(cnDrawer(), {
    theme: 'default',
});