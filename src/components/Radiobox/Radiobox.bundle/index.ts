import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  IRadioboxProps as IRadioboxDesktopProps,
  Radiobox as RadioboxDesktop
} from "../Radiobox";
// _size
import { withSizeM } from "../_size/Radiobox_size_m";
import { withSizeS } from "../_size/Radiobox_size_s";
// _theme
import { withThemeDefault } from "../_theme/Radiobox_theme_default";

export * from "../Radiobox";

export interface IRadioboxProps extends IRadioboxDesktopProps {
  size?: "m" | "s";
  theme?: "default";
}

export const Radiobox = compose(
  composeU(withSizeM, withSizeS),
  withThemeDefault
)(RadioboxDesktop) as FC<IRadioboxProps>;
