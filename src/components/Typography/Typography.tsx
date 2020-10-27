import React, { ReactNode, FC } from "react";
import { cn } from "@bem-react/classname";

import "./Typography.scss";

export const cnTypography = cn("Typography");

export interface ITypographyProps {
  /**
   * Дополнительный класс.
   */
  className?: string;

  /**
   * Текст кнопки.
   */
  children?: ReactNode;

  /**
   * Тэг
   */
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5";

  /**
   * Размер основного шрифта
   */
  size?: "s" | "m" | "l";
}

export const Typography: FC<ITypographyProps> = ({
  children,
  tag,
  size,
  className,
  ...props
}) => {
  let Wrapper = tag || "div";

  return (
    <Wrapper {...props} className={cnTypography({ tag, size }, [className])}>
      {children}
    </Wrapper>
  );
};

Typography.displayName = cnTypography();
