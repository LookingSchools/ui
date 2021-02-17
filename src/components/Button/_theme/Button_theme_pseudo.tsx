import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_theme_pseudo.scss";

export interface IButtonThemePseudoProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: "pseudo";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemePseudoProps} props
 */
export const withThemePseudo = withBemMod<IButtonThemePseudoProps>(cnButton(), {
    theme: "pseudo",
});
