import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Button as ButtonDesktop } from '../Button@desktop';

// _size
import { withSizeL } from "../_size/Button_size_l";
import { withSizeM } from "../_size/Button_size_m";
import { withSizeS } from "../_size/Button_size_s";

// _theme
import { withThemeBlack } from "../_theme/Button_theme_black";
import { withThemeClear } from "../_theme/Button_theme_clear";
import { withThemeDefault } from "../_theme/Button_theme_default";
import { withThemeTretiary } from "../_theme/Button_theme_tretiary";
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

export * from "../Button@desktop";

export const Button = compose(
  composeU(withSizeL, withSizeM, withSizeS),
  composeU(
    withThemeSecondary,
    withThemeBlack,
    withThemePrimary,
    withThemeDefault,
    withThemeTretiary,
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
)(ButtonDesktop);

export type IButtonProps = ExtractProps<typeof Button>;
