import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_theme_raised.scss";

export interface IButtonThemeRaisedProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: "raised";
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeRaisedProps} props
 */
export const withThemeRaised = withBemMod<IButtonThemeRaisedProps>(cnButton(), {
    theme: "raised",
});
