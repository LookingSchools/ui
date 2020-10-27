import React, { FC, ReactNode, ReactType } from "react";
import { cn } from "@bem-react/classname";
import {
  BadgeControl as Control,
  IBadgeControlProps
} from "./Control/Badge-Control";

import "./Badge.scss";

export const cnBadge = cn("Badge");

export interface IBadgeProps extends IBadgeControlProps {
  /**
   * Дополнительный класс.
   */
  className?: string;
  /**
   * The color of the component.
   * It supports those theme colors that make sense for this component.
   */
  color?: string;
  /**
   * Цвет фона.
   */
  background?: string;
  /**
   * The content rendered within the badge.
   */
  badgeContent?: ReactNode;
  /**
   * The badge will be added relative to this node.
   */
  children?: ReactNode;
  /**
   * If `true`, the badge will be invisible.
   */
  invisible?: boolean;
  /**
   * Max count to show.
   */
  max?: number;
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   */
  showZero?: boolean;

  /**
   * The type to use.
   */
  type?: "standard" | "dot";

  /**
   * HTML-атрибут для рендера
   * @default 'span'
   */
  as?: ReactType;
}

export const Badge: FC<IBadgeProps> = ({
  className,
  badgeContent,
  children,
  invisible: invisibleProp,
  max = 99,
  showZero = false,
  type = "standard",
  color,
  background,
  as = "span",
  ...props
}) => {
  let invisible = invisibleProp;
  const Component = as;

  if (
    invisibleProp == null &&
    ((badgeContent === 0 && !showZero) ||
      (badgeContent == null && type !== "dot"))
  ) {
    invisible = true;
  }

  let displayValue;

  if (type !== "dot" && badgeContent) {
    displayValue = badgeContent > max ? `${max}+` : badgeContent;
  }

  const cnName = cnBadge({ invisible: invisible }, [
    "Badge_direction_top-right"
  ]);

  const badgeStyle = {
    color: color,
    backgroundColor: background
  };
  return (
    <Control {...props}>
      {children}
      <Component
        className={cnBadge(null, [cnName, className])}
        style={badgeStyle}
      >
        {displayValue}
      </Component>
    </Control>
  );
};

Badge.displayName = cnBadge();
