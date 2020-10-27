import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import { ISpinProps as ISpinBaseProps, Spin as SpinBase } from "../Spin";
// _position
import { withPositionCenter } from "../_position/Spin_position_center";
//  _size
import { withSizeL } from "../_size/Spin_size_l";
import { withSizeM } from "../_size/Spin_size_m";
import { withSizeS } from "../_size/Spin_size_s";
import { withSizeXS } from "../_size/Spin_size_xs";
import { withSizeXXS } from "../_size/Spin_size_xxs";
// _theme
import { withThemePrimary } from "../_theme/Spin_theme_primary";

export * from "../Spin";

export interface ISpinProps extends ISpinBaseProps {
  position?: "center";
  size?: "l" | "m" | "s" | "xs" | "xxs";
  theme?: "primary";
}

export const Spin = compose(
  composeU(withSizeL, withSizeM, withSizeS, withSizeXS, withSizeXXS),
  withPositionCenter,
  withThemePrimary
)(SpinBase) as FC<ISpinProps>;
