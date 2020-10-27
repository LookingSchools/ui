import React, { FC } from "react";

import { cnRadiobutton as cn } from "../Radiobutton";

import "./Radiobutton-Text.scss";

export interface RadiobuttonTextProps {
  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Уникальный `id` компонента
   */
  id?: string;
}

export const RadiobuttonText: FC<RadiobuttonTextProps> = ({
  children,
  className,
  ...props
}) => (
  <span {...props} className={cn("Text", null, [className])} aria-hidden="true">
    {children}
  </span>
);
