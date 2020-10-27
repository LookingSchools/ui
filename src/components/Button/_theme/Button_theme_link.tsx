import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_theme_link.scss";

export interface IButtonThemeLinkProps {
  /**
   * Стилевое оформление кнопки
   */
  theme?: "link";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeLinkProps} props
 */
export const withThemeLink = withBemMod<IButtonThemeLinkProps>(cnButton(), {
  theme: "link"
});
