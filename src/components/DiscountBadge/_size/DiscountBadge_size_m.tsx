import { withBemMod } from "@bem-react/core";

import { cnDiscountBadge } from "../DiscountBadge";
import "./DiscountBadge_size_m.scss";

export interface IDiscountBadgeSizeMProps {
  /**
   * Размер
   */
  size?: "m";
}

/**
 * Модификатор, отвечающий за размер.
 * @param {IDiscountBadgeSizeMProps} props
 */
export const withSizeM = withBemMod<IDiscountBadgeSizeMProps>(
  cnDiscountBadge(),
  { size: "m" }
);
