import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

// Registry dependencies
import { Button } from '../../Button/Button.bundle';
import { Icon } from '../../Icon/Icon.bundle';
// TODO
// import { Button } from '../../Button/Button.bundle/mobile';
// import { Icon } from '../../Icon/Icon.bundle/mobile';
import { withTogglable } from '../../withTogglable/withTogglable';

// base
import { Select as SelectTouchPhone, cnSelect } from '../Select@mobile';
// _baseline
import { withBaseline } from '../_baseline/Select_baseline';
import { withWidthMax } from '../_width/Select_width_max';

const registry = new Registry({ id: cnSelect() })
    .set('Trigger', Button)
    .set('Icon', Icon);

export * from '../Select@mobile';

export const Select = compose(
    withTogglable,
    withBaseline,
    withWidthMax,
    withRegistry(registry),
)(SelectTouchPhone);
