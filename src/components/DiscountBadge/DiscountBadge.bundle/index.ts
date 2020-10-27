import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  IDiscountBadgeProps as IDiscountBadgeBaseProps,
  DiscountBadge as DiscountBadgeBase
} from "../DiscountBadge";

// _size
import { withSizeL } from "../_size/DiscountBadge_size_l";
import { withSizeM } from "../_size/DiscountBadge_size_m";
import { withSizeS } from "../_size/DiscountBadge_size_s";

// _theme
import { withThemeDefault } from "../_theme/DiscountBadge_theme_default";
import { withThemeBlack } from "../_theme/DiscountBadge_theme_black";

export * from "../DiscountBadge";

export interface IDiscountBadgeProps extends IDiscountBadgeBaseProps {
  size?: "l" | "m" | "s";
  theme?: "black" | "default";
}

export const DiscountBadge = compose(
  composeU(withSizeL, withSizeM, withSizeS),
  composeU(withThemeDefault, withThemeBlack)
)(DiscountBadgeBase) as FC<IDiscountBadgeProps>;
