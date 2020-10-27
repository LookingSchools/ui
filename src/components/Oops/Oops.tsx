import React, { ReactNode, FC } from "react";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";
import { Typography } from "../Typography/Typography";
import { Button as ButtonBase } from "../Button/Button.bundle";
import { Separator, Thickness, Width } from "../Separator/Separator";
import { Socials } from "../Socials/Socials.bundle";

// _size
import { withSizeM } from "../Button/_size/Button_size_m";
// _theme
import { withThemeDefault } from "../Button/_theme/Button_theme_default";

const Button = compose(withSizeM, withThemeDefault)(ButtonBase);

import "./Oops.scss";

export const cnOops = cn("Oops");

export interface IOopsProps {
  /**
   * Дополнительный класс.
   */
  className?: string;

  /**
   * Текст кнопки.
   */
  children?: ReactNode;

  /**
   * Заголовок.
   */
  title?: string;

  /**
   * Подзаголовок.
   */
  subtitle?: string;

  /**
   * Текст на кнопке.
   */
  button?: string;
}

export const Oops: FC<IOopsProps> = ({
  children,
  className,
  title,
  subtitle,
  button,
  ...props
}) => {
  return (
    <div {...props} className={cnOops(null, [className])}>
      <Typography tag="h1">{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Button size="m" theme="default" className="Oops-Button">
        {button}
      </Button>
      <Separator
        thickness={Thickness.Thin}
        width={Width.Short}
        color="#D9D9D9"
        className="Oops-Separator"
      />
      <Socials
        icons={[
          "twitter",
          "facebook",
          "vk",
          "telegram",
          "youtube",
          "github",
          "rss"
        ]}
        className="Oops-Socials"
      />
      <Typography size="s">
        Подпишитесь на нас, чтобы всегда быть в курсе акций и конкурсов
      </Typography>
    </div>
  );
};

Oops.displayName = cnOops();
