import { FC, MouseEventHandler } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  ITextinputProps as ITextinputDesktopProps,
  Textinput as TextinputDesktop
} from "../Textinput";
// _size
import { withSizeL } from "../_size/Textinput_size_l";
import { withSizeM } from "../_size/Textinput_size_m";
import { withSizeS } from "../_size/Textinput_size_s";
// _theme
import { withThemeDefault } from "../_theme/Textinput_theme_default";

// _hasClear
import { withHasClear } from "../_hasClear/Textinput_hasClear";
// _pin
import { withPinBrickRound } from "../_pin/Textinput_pin_brick-round";
import { withPinClearClear } from "../_pin/Textinput_pin_clear-clear";
import { withPinClearRound } from "../_pin/Textinput_pin_clear-round";
import { withPinRoundBrick } from "../_pin/Textinput_pin_round-brick";
import { withPinRoundClear } from "../_pin/Textinput_pin_round-clear";
import { withPinRoundRound } from "../_pin/Textinput_pin_round-round";
// _baseline
import { withBaseline } from "../_baseline/Textinput_baseline";

export * from "../Textinput";

export interface ITextinputProps extends ITextinputDesktopProps {
  size?: "l" | "m" | "s";
  theme?: "default";
  hasClear?: boolean;
  onClearClick?: MouseEventHandler<HTMLSpanElement>;
  pin?:
    | "brick-brick"
    | "brick-clear"
    | "brick-round"
    | "clear-brick"
    | "clear-clear"
    | "clear-round"
    | "round-brick"
    | "round-clear"
    | "round-round";
  baseline?: boolean;
}

export const Textinput = compose(
  composeU(withSizeL, withSizeM, withSizeS),
  withThemeDefault,
  composeU(
    withPinBrickRound,
    withPinClearClear,
    withPinClearRound,
    withPinRoundBrick,
    withPinRoundClear,
    withPinRoundRound
  ),
  withBaseline,
  withHasClear
)(TextinputDesktop) as FC<ITextinputProps>;
