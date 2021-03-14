import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Textarea as TextareaDesktop } from '../Textarea@desktop';
import { withDebounceInput } from '../../withDebounceInput';
// _hasClear
import { withHasClear } from '../_hasClear/Textarea_hasClear@desktop';
// _size
import { withSizeM } from '../_size/Textarea_size_m';
import { withSizeS } from '../_size/Textarea_size_s';
// _theme
import { withThemeDefault } from '../_theme/Textarea_theme_default@desktop';

// _autoResize
import { withAutoResize } from '../_autoResize/Textarea_autoResize';

export * from '../Textarea@desktop';

export const Textarea = compose(
    withDebounceInput,
    withHasClear,
    withThemeDefault,
    composeU(withSizeM, withSizeS),
)(TextareaDesktop);

export const TextareaWithAutoResize = withAutoResize(Textarea);

export type ITextareaProps = ExtractProps<typeof Textarea>;
