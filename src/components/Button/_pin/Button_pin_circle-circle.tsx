import { withBemMod } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button_pin_circle-circle.scss";

export interface IButtonPinCircleCircleProps {
  /**
   * Форма кнопки
   */
  pin?: "circle-circle";
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinCircleCircleProps} props
 */
export const withPinCircleCircle = withBemMod<IButtonPinCircleCircleProps>(
  cnButton(),
  { pin: "circle-circle" }
);
