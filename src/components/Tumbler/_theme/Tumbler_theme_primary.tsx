import { withBemMod } from "@bem-react/core";

import { cnTumbler } from "../Tumbler";
import "./Tumbler_theme_primary.scss";

export type TumblerThemePrimaryProps = {
    /**
     * Внешний вид переключателя
     */
    theme?: "primary";
};

/**
 * Модификатор, отвечающий за внешний вид переключателя.
 *
 * @param {TumblerThemePrimaryProps} props
 */
export const withThemePrimary = withBemMod<TumblerThemePrimaryProps>(cnTumbler(), { theme: "primary" });
