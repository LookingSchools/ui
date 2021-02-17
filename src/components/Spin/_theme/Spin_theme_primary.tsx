import { withBemMod } from "@bem-react/core";

import { cnSpin } from "../Spin";
import "./Spin_theme_primary.scss";

export interface ISpinThemePrimaryProps {
    /**
     * Внешний вид индикатора загрузки.
     */
    theme?: "primary";
}

/**
 * Модификатор, отвечающий за внешний вид индикатора загрузки.
 * @param {ISpinThemePrimaryProps} props
 */
export const withThemePrimary = withBemMod<ISpinThemePrimaryProps>(cnSpin(), {
    theme: "primary",
});
