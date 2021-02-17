import { withBemMod } from "@bem-react/core";

import { cnPrice } from "../Price";
import "./Price_with-old-price.scss";

export interface IPriceWithOldPriceProps {
    "with-old-price"?: boolean;
}

/**
 * Модификатор, отвечающий за отображение старой цены.
 * @param {IPriceWithOldPriceProps} props
 */
export const withWithOldPrice = withBemMod<IPriceWithOldPriceProps>(cnPrice(), {
    "with-old-price": true,
});
