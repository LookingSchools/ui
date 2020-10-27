import React, { FC } from "react";
import { cn } from "@bem-react/classname";

import "./Separator.scss";

export enum Thickness {
  Thin = "thin",
  Thick = "thick"
}

export enum Width {
  Short = "short",
  Middle = "middle",
  Long = "long"
}

export interface ISeparatorProps {
  /**
   * Дополнительный класс.
   */
  className?: string;
  /**
   * Толщина.
   */
  thickness: Thickness;
  /**
   * Ширина.
   */
  width: Width;
  /**
   * Цвет.
   */
  color: string;
  anchorHash?: string;
}

const cnSeparator = cn("Separator");

export const Separator: FC<ISeparatorProps> = ({
  className,
  thickness,
  width,
  color,
  ...props
}) => {
  return (
    <div {...props} className={cnSeparator(null, [className])}>
      <div
        style={{ backgroundColor: color }}
        className={cnSeparator("Line", { thickness, width })}
      />
    </div>
  );
};

Separator.displayName = cnSeparator();
