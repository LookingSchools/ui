import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_theme_secondary.scss";

export interface IButtonThemeSecondaryProps {
  /**
   * Стилевое оформление кнопки
   */
  theme?: "secondary";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeSecondaryProps} props
 */
export const withThemeSecondary = withBemMod<IButtonThemeSecondaryProps>(cnButton(), {
  theme: "secondary"
});
