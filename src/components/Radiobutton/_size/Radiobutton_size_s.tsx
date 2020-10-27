import { withBemMod } from "@bem-react/core";

import { cnRadiobutton } from "../Radiobutton";
import "./Radiobutton_size_s.scss";

export interface IRadiobuttonSizeSProps {
  /**
   * Размер радио-бокса
   */
  size?: "s";
}

/**
 * Модификатор, отвечающий за размер радио-бокса.
 * @param {IRadiobuttonSizeSProps} props
 */
export const withSizeS = withBemMod<IRadiobuttonSizeSProps>(cnRadiobutton(), {
  size: "s"
});
