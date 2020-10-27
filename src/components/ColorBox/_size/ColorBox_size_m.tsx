import { withBemMod } from "@bem-react/core";

import { cnColorBox } from "../ColorBox";
import "./ColorBox_size_m.scss";

export interface IColorBoxSizeMProps {
  /**
   * Размер радио-бокса
   */
  size?: "m";
}

/**
 * Модификатор, отвечающий за размер радио-бокса.
 * @param {IColorBoxSizeMProps} props
 */
export const withSizeM = withBemMod<IColorBoxSizeMProps>(cnColorBox(), {
  size: "m"
});
