import { withBemMod } from "@bem-react/core";

import { cnPrice } from "../Price";
import "./Price_size_l.scss";

export interface IPriceSizeLProps {
    /**
     * Размер кнопки
     */
    size?: "l";
}

/**
 * Модификатор, отвечающий за размер.
 * @param {IPriceSizeLProps} props
 */
export const withSizeL = withBemMod<IPriceSizeLProps>(cnPrice(), { size: "l" });
