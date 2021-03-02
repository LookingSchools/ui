import { withBemMod } from "@bem-react/core";

import { cnTooltip } from "../Tooltip";
import "./Tooltip_theme_default.scss";

export type TooltipThemeDefaultProps = {
    /**
     * Стилевое оформление тултипа.
     */
    theme?: "default";
};

/**
 * Модификатор, отвечающий за внешний вид тултипа.
 * @param {TooltipThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<TooltipThemeDefaultProps>(cnTooltip(), { theme: "default" });
