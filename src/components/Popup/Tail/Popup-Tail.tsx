import React, { RefObject, CSSProperties } from "react";

import { cnPopup } from "../Popup";
import "./Popup-Tail.scss";

export interface IPopupTailProps {
  /**
   * Ссылка на хвостик
   */
  innerRef?: RefObject<HTMLDivElement>;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Пользовательские стили
   */
  style?: CSSProperties;
}

export const PopupTail = ({
  className,
  innerRef,
  ...props
}: IPopupTailProps) => (
  <div
    {...props}
    className={cnPopup("Tail", null, [className])}
    ref={innerRef}
  />
);
