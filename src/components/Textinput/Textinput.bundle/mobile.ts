import { compose, composeU, ExtractProps } from '@bem-react/core';

import {
    Textinput as TextinputTouchPhone,
} from '../Textinput@mobile';
import { withDebounceInput } from '../../withDebounceInput';
// _size
import { withSizeL } from '../_size/Textinput_size_l';
import { withSizeM } from '../_size/Textinput_size_m';
import { withSizeS } from '../_size/Textinput_size_s';
// _theme
import { withThemeDefault } from "../_theme/Textinput_theme_default";
import { withThemeSearch } from "../_theme/Textinput_theme_search";

// _hasClear
import { withHasClear } from '../_hasClear/Textinput_hasClear@mobile';
// _pin
import { withPinBrickRound } from '../_pin/Textinput_pin_brick-round';
import { withPinClearClear } from '../_pin/Textinput_pin_clear-clear';
import { withPinClearRound } from '../_pin/Textinput_pin_clear-round';
import { withPinRoundBrick } from '../_pin/Textinput_pin_round-brick';
import { withPinRoundClear } from '../_pin/Textinput_pin_round-clear';
import { withPinRoundRound } from '../_pin/Textinput_pin_round-round';
// _baseline
import { withBaseline } from '../_baseline/Textinput_baseline';

export * from '../Textinput@mobile';

export const Textinput = compose(
    withDebounceInput,
    composeU(withSizeL, withSizeM, withSizeS),
    composeU(withThemeDefault,withThemeSearch),
    composeU(
        composeU(
            withPinBrickRound,
            withPinClearClear,
            withPinClearRound,
        ),
        withPinRoundBrick,
        withPinRoundClear,
        withPinRoundRound,
    ),
    withBaseline,
    withHasClear,
)(TextinputTouchPhone);

export type ITextinputProps = ExtractProps<typeof Textinput>;
