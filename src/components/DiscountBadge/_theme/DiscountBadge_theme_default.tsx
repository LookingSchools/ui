import { withBemMod } from "@bem-react/core";

import { cnDiscountBadge } from "../DiscountBadge";
import "./DiscountBadge_theme_default.scss";

export interface IDiscountBadgeThemeDefaultProps {
  /**
   * Стилевое оформление кнопки
   */
  theme?: "default";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IDiscountBadgeThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IDiscountBadgeThemeDefaultProps>(
  cnDiscountBadge(),
  { theme: "default" }
);
