import { withBemMod } from "@bem-react/core";

import { cnDiscountBadge } from "../DiscountBadge";
import "./DiscountBadge_size_s.scss";

export interface IDiscountBadgeSizeSProps {
  /**
   * Размер
   */
  size?: "s";
}

/**
 * Модификатор, отвечающий за размер.
 * @param {IDiscountBadgeSizeSProps} props
 */
export const withSizeS = withBemMod<IDiscountBadgeSizeSProps>(
  cnDiscountBadge(),
  { size: "s" }
);
