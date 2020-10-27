import { withBemMod } from "@bem-react/core";

import { cnRadiobutton } from "../Radiobutton";
import "./Radiobutton_size_m.scss";

export interface IRadiobuttonSizeMProps {
  /**
   * Размер радио-бокса
   */
  size?: "m";
}

/**
 * Модификатор, отвечающий за размер радио-бокса.
 * @param {IRadiobuttonSizeMProps} props
 */
export const withSizeM = withBemMod<IRadiobuttonSizeMProps>(cnRadiobutton(), {
  size: "m"
});
