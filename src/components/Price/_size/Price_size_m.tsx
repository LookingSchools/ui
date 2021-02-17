import { withBemMod } from "@bem-react/core";

import { cnPrice } from "../Price";
import "./Price_size_m.scss";

export interface IPriceSizeMProps {
    /**
     * Размер кнопки
     */
    size?: "m";
}

/**
 * Модификатор, отвечающий за размер.
 * @param {IPriceSizeMProps} props
 */
export const withSizeM = withBemMod<IPriceSizeMProps>(cnPrice(), { size: "m" });
