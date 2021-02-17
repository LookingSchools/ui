import { withBemMod } from "@bem-react/core";

import { cnPrice } from "../Price";
import "./Price_empty.scss";

export interface IPriceEmptyProps {
    empty?: boolean;
}

/**
 * Модификатор, отвечающий за стилевое оформление.
 * @param {IPriceEmptyProps} props
 */
export const withEmpty = withBemMod<IPriceEmptyProps>(cnPrice(), {
    empty: true,
});
