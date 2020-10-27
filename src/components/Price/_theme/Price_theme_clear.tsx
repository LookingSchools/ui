import { withBemMod } from "@bem-react/core";

import { cnPrice } from "../Price";
import "./Price_theme_clear.scss";

export interface IPriceThemeClearProps {
  /**
   * Стилевое оформление
   */
  theme?: "clear";
}

/**
 * Модификатор, отвечающий за стилевое оформление.
 * @param {IPriceThemeClearProps} props
 */
export const withThemeClear = withBemMod<IPriceThemeClearProps>(cnPrice(), {
  theme: "clear"
});
