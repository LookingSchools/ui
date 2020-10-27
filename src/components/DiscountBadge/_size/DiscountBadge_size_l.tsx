import { withBemMod } from "@bem-react/core";

import { cnDiscountBadge } from "../DiscountBadge";
import "./DiscountBadge_size_l.scss";

export interface IDiscountBadgeSizeLProps {
  /**
   * Размер
   */
  size?: "l";
}

/**
 * Модификатор, отвечающий за размер.
 * @param {IDiscountBadgeSizeLProps} props
 */
export const withSizeL = withBemMod<IDiscountBadgeSizeLProps>(
  cnDiscountBadge(),
  { size: "l" }
);
