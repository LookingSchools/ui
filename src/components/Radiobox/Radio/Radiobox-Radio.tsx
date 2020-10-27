import React, { ReactNode } from "react";

import { cnRadiobox as cn } from "../Radiobox";
import "./Radiobox-Radio.scss";

import {
  IWithControlProps,
  withControl
} from "../../../hocs/withControl/withControl";

export interface IRadioboxRadioProps
  extends IWithControlProps<HTMLLabelElement> {
  /**
   * Выбранное состояние
   */
  checked?: boolean;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Уникальный id компонента
   */
  id?: string;

  /**
   * HTML-атрибут `for`
   */
  htmlFor?: string;

  /**
   * Содержимое компонента
   */
  children?: ReactNode;
}

export const RadioboxRadio = withControl(
  ({
    checked,
    children,
    className,
    disabled,
    focused,
    pressed,
    ...props
  }: IRadioboxRadioProps) => (
    <label
      {...props}
      className={cn(
        "Radio",
        {
          checked,
          disabled,
          focused,
          pressed
        },
        [className]
      )}
    >
      {children}
    </label>
  )
);
