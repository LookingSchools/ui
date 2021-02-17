import { withBemMod } from "@bem-react/core";

import { cnPrice } from "../Price";
import "./Price_theme_responsive.scss";

export interface IPriceThemeResponsiveProps {
    /**
     * Стилевое оформление
     */
    theme?: "responsive";
}

/**
 * Модификатор, отвечающий за стилевое оформление.
 * @param {IPriceThemeResponsiveProps} props
 */
export const withThemeResponsive = withBemMod<IPriceThemeResponsiveProps>(cnPrice(), { theme: "responsive" });
