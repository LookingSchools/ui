import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_theme_tretiary.scss";

export interface IButtonThemeTretiaryProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: "tretiary";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeTretiaryProps} props
 */
export const withThemeTretiary = withBemMod<IButtonThemeTretiaryProps>(cnButton(), { theme: "tretiary" });
