import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Textarea as TextareaTouchPhone } from '../Textarea@mobile';
import { withDebounceInput } from '../../withDebounceInput';
// _hasClear
import { withHasClear } from '../_hasClear/Textarea_hasClear@mobile';
// _size
import { withSizeM } from '../_size/Textarea_size_m';
import { withSizeS } from '../_size/Textarea_size_s';
// _theme
import { withThemeDefault } from '../_theme/Textarea_theme_default';

export * from '../Textarea@mobile';

export const Textarea = compose(
    withDebounceInput,
    withHasClear,
    withThemeDefault,
    composeU(withSizeM, withSizeS),
)(TextareaTouchPhone);

export type ITextareaProps = ExtractProps<typeof Textarea>;
