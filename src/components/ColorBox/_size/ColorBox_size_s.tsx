import { withBemMod } from "@bem-react/core";

import { cnColorBox } from "../ColorBox";
import "./ColorBox_size_s.scss";

export interface IColorBoxSizeSProps {
  /**
   * Размер радио-бокса
   */
  size?: "s";
}

/**
 * Модификатор, отвечающий за размер радио-бокса.
 * @param {IColorBoxSizeSProps} props
 */
export const withSizeS = withBemMod<IColorBoxSizeSProps>(cnColorBox(), {
  size: "s"
});
