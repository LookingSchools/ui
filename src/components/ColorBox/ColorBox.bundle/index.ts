import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  IColorBoxProps as IColorBoxDesktopProps,
  ColorBox as ColorBoxDesktop
} from "../ColorBox";
// _size
import { withSizeM } from "../_size/ColorBox_size_m";
import { withSizeS } from "../_size/ColorBox_size_s";
// _theme
import { withThemeDefault } from "../_theme/ColorBox_theme_default";
import { withThemeBlack } from "../_theme/ColorBox_theme_black";

export * from "../ColorBox";

export interface IColorBoxProps extends IColorBoxDesktopProps {
  size?: "m" | "s";
  theme?: "default";
}

export const ColorBox = compose(
  composeU(withSizeM, withSizeS),
  composeU(withThemeDefault, withThemeBlack)
)(ColorBoxDesktop) as FC<IColorBoxProps>;
