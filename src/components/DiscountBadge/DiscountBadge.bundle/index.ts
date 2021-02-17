import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  IDiscountBadgeProps as IDiscountBadgeBaseProps,
  DiscountBadge as DiscountBadgeBase
} from "../DiscountBadge";

// _size
import { withSizeL } from "../_size/DiscountBadge_size_l";
import { withSizeM } from "../_size/DiscountBadge_size_m";

// _theme
import { withThemeDefault } from "../_theme/DiscountBadge_theme_default";
import { withThemeBlack } from "../_theme/DiscountBadge_theme_black";

export * from "../DiscountBadge";

export interface IDiscountBadgeProps extends IDiscountBadgeBaseProps {
  size?: "l" | "m";
  theme?: "black" | "default";
}

export const DiscountBadge = compose(
  composeU(withSizeL, withSizeM),
  composeU(withThemeDefault, withThemeBlack)
)(DiscountBadgeBase) as FC<IDiscountBadgeProps>;
