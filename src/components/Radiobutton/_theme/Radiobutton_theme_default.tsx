import { withBemMod } from "@bem-react/core";

import { cnRadiobutton } from "../Radiobutton";
import "./Radiobutton_theme_default.scss";

export interface IRadiobuttonThemeDefaultProps {
    /**
     * Стилевое оформление радио-бокса
     */
    theme?: "default";
}

/**
 * Модификатор, отвечающий за стилевое оформление радио-бокса.
 * @param {IRadiobuttonThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<IRadiobuttonThemeDefaultProps>(cnRadiobutton(), { theme: "default" });
