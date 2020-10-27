import { withBemMod } from "@bem-react/core";

import { cnTumbler } from "../Tumbler";
import "./Tumbler_size_s.scss";

export type TumblerSizeSProps = {
  /**
   * Размер переключателя
   */
  size?: "s";
};

/**
 * Модификатор, отвечающий за размер переключателя.
 *
 * @param {TumblerSizeSProps} props
 */
export const withSizeS = withBemMod<TumblerSizeSProps>(cnTumbler(), {
  size: "s"
});
