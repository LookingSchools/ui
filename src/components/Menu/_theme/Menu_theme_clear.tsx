import { withBemMod } from "@bem-react/core";

import { cnMenu } from "../Menu";
import "./Menu_theme_clear.scss";

export interface IMenuThemeClearProps {
    /**
     * Стилевое оформление меню
     */
    theme?: "clear";
}

/**
 * Модификатор отвечающий за стилевое оформление меню.
 * @param {IMenuThemeClearProps} props
 *
 */
export const withThemeClear = withBemMod<IMenuThemeClearProps>(cnMenu(), { theme: "clear" });
