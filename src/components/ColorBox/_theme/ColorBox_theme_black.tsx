import { withBemMod } from "@bem-react/core";

import { cnColorBox } from "../ColorBox";
import "./ColorBox_theme_black.scss";

export interface IColorBoxThemeBlackProps {
    /**
     * Внешний вид радио-бокса
     */
    theme?: "black";
}

/**
 * Модификатор, отвечающий за внешний вид радио-бокса.
 * @param {IColorBoxThemeBlackProps} props
 */
export const withThemeBlack = withBemMod<IColorBoxThemeBlackProps>(cnColorBox(), { theme: "black" });
