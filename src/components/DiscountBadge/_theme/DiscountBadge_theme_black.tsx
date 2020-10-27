import { withBemMod } from "@bem-react/core";

import { cnDiscountBadge } from "../DiscountBadge";
import "./DiscountBadge_theme_black.scss";

export interface IDiscountBadgeThemeBlackProps {
  /**
   * Стилевое оформление кнопки
   */
  theme?: "black";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IDiscountBadgeThemeBlackProps} props
 */
export const withThemeBlack = withBemMod<IDiscountBadgeThemeBlackProps>(
  cnDiscountBadge(),
  { theme: "black" }
);
