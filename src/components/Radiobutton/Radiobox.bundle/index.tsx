import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  IRadiobuttonProps as IRadiobuttonBaseProps,
  Radiobutton as RadiobuttonBase
} from "../Radiobutton";
// _size
import { withSizeM } from "../_size/Radiobutton_size_m";
import { withSizeS } from "../_size/Radiobutton_size_s";
// _theme
import { withThemeDefault } from "../_theme/Radiobutton_theme_default";

export * from "../Radiobutton";

export interface IRadiobuttonProps extends IRadiobuttonBaseProps {
  size?: "m" | "s";
  theme?: "default" | "primary";
}

export const Radiobutton = compose(
  composeU(withSizeM, withSizeS),
  composeU(withThemeDefault)
)(RadiobuttonBase) as FC<IRadiobuttonProps>;
