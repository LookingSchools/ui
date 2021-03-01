import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

// Registry dependencies
import { Button } from '../../Button/Button.bundle';
import { Popup } from '../../Popup/Popup.bundle';
import { Menu } from '../../Menu/Menu.bundle';
import { Icon } from '../../Icon/Icon.bundle';
import { withTogglable } from '../../../hocs/withTogglable/withTogglable';
import { withZIndex } from '../../withZIndex';

// base
import { Select as SelectDesktop, cnSelect } from '../Select@desktop';
// _baseline
import { withBaseline } from '../_baseline/Select_baseline';
import { withWidthMax } from '../_width/Select_width_max';

const registry = new Registry({ id: cnSelect() })
    .set('Trigger', Button)
    .set('Popup', compose(withZIndex)(Popup))
    .set('Menu', Menu)
    .set('Icon', Icon);

export * from '../Select@desktop';

export const Select = compose(
    withTogglable,
    withBaseline,
    withWidthMax,
    withRegistry(registry),
)(SelectDesktop);
