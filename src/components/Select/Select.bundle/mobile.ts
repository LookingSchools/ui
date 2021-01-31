import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

// Registry dependencies
import { Button } from '../../Button/Button.bundle';
import { Icon } from '../../Icon/Icon.bundle';
import { withTogglable } from '../../../hocs/withTogglable/withTogglable';

// base
import { Select as SelectMobile, cnSelect } from '../Select@mobile';
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
)(SelectMobile);