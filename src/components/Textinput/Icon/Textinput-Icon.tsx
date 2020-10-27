import { cloneElement, ReactElement } from "react";

import { IIconProps } from "../../Icon/Icon";
import { cnTextinput } from "../Textinput";
import "./Textinput-Icon.scss";
import "./_side/Textinput-Icon_side_left.scss";
import "./_side/Textinput-Icon_side_right.scss";

export interface ITextinputIconProps {
  /**
   * Компонент иконки для отображения.
   */
  component: ReactElement<IIconProps>;

  /**
   * Расположение иконки.
   */
  side?: "left" | "right";
}

export const TextinputIcon = ({
  component,
  side,
  ...props
}: ITextinputIconProps) =>
  cloneElement(component, {
    ...props,
    className: cnTextinput("Icon", { side }, [component.props.className])
  });
