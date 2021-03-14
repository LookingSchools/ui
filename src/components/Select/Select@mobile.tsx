import { withRegistry } from '@bem-react/di';
import { Wrapper, compose } from '@bem-react/core';

import { ISelectProps, Select as SelectCommon } from './Select';
import { selectRegistry } from './Select.registry/mobile';
import { withNativeControl } from './Select.hocs/withNativeControl';
import './Control/Select-Control.scss';

export * from './Select';

export const Select = compose(
    withRegistry(selectRegistry),
    withNativeControl as Wrapper<ISelectProps>,
)(SelectCommon);
