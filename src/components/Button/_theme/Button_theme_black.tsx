import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_theme_black.scss";

export interface IButtonThemeBlackProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: "black";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeBlackProps} props
 */
export const withThemeBlack = withBemMod<IButtonThemeBlackProps>(cnButton(), {
    theme: "black",
});
