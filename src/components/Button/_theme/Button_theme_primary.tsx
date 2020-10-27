import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_theme_primary.scss";

export interface IButtonThemePrimaryProps {
  /**
   * Стилевое оформление кнопки
   */
  theme?: "primary";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemePrimaryProps} props
 */
export const withThemePrimary = withBemMod<IButtonThemePrimaryProps>(
  cnButton(),
  { theme: "primary" }
);
