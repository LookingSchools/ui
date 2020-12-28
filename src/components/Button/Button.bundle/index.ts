import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  IButtonProps as IButtonBaseProps,
  Button as ButtonBase
} from "../Button";

// _size
import { withSizeL } from "../_size/Button_size_l";
import { withSizeM } from "../_size/Button_size_m";
import { withSizeS } from "../_size/Button_size_s";

// _theme
import { withThemeBlack } from "../_theme/Button_theme_black";
import { withThemeClear } from "../_theme/Button_theme_clear";
import { withThemeDefault } from "../_theme/Button_theme_default";
import { withThemeSecondary } from "../_theme/Button_theme_secondary";
import { withThemePrimary } from "../_theme/Button_theme_primary";
import { withThemePseudo } from "../_theme/Button_theme_pseudo";
import { withThemeRaised } from "../_theme/Button_theme_raised";

// _pin
import { withPinBrickCircle } from "../_pin/Button_pin_brick-circle";
import { withPinCircleBrick } from "../_pin/Button_pin_circle-brick";
import { withPinCircleCircle } from "../_pin/Button_pin_circle-circle";
import { withPinCircleClear } from "../_pin/Button_pin_circle-clear";
import { withPinClearCircle } from "../_pin/Button_pin_clear-circle";

// _type
import { withTypeLink } from "../_type/Button_type_link";
import { withTypeSubmit } from "../_type/Button_type_submit";

// _width
import { withWidthAuto } from "../_width/Button_width_auto";
import { withWidthMax } from "../_width/Button_width_max";

export * from "../Button";

export interface IButtonProps extends IButtonBaseProps {
  pin?:
    | "brick-circle"
    | "circle-brick"
    | "circle-circle"
    | "circle-clear"
    | "clear-circle";
  size?: "l" | "m" | "s";
  theme?:
    | "black"
    | "clear"
    | "secondary"
    | "default"
    | "pseudo"
    | "raised"
    | "primary";
  type?: "link" | "submit";
  width?: "max" | "auto";
}

export const Button = compose(
  composeU(withSizeL, withSizeM, withSizeS),
  composeU(
    withThemeSecondary,
    withThemeBlack,
    withThemePrimary,
    withThemeDefault,
    withThemeClear,
    withThemePseudo,
    withThemeRaised
  ),
  composeU(
    withPinBrickCircle,
    withPinCircleBrick,
    withPinCircleCircle,
    withPinCircleClear,
    withPinClearCircle
  ),
  composeU(withWidthAuto, withWidthMax),
  composeU(withTypeLink, withTypeSubmit)
)(ButtonBase) as FC<IButtonProps>;
