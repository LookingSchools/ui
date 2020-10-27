import React, { FC, MouseEventHandler } from "react";
import { compose } from "@bem-react/core";

import { Icon as IconPresenter } from "../../Icon/Icon";
import { TextinputIcon as IconWrapper } from "../Icon/Textinput-Icon";
import { withGlyphCross } from "../../Icon/_glyph/Icon_glyph_cross";
import { withGlyphXSign } from "../../Icon/_glyph/Icon_glyph_x-sign";

import { cnTextinput } from "../Textinput";
import "./Textinput-Clear.scss";

const Icon = compose(withGlyphXSign, withGlyphCross)(IconPresenter);

const getIconType = (theme?: string): any => {
  if (theme === "default") {
    return { glyph: "x-sign" };
  }

  return { glyph: "cross" };
};

export interface ITextinputClearProps {
  /**
   * Видимость крестика
   */
  visible?: boolean;

  /**
   * Размер крестика
   */
  size?: string;

  /**
   * Тема крестика
   */
  theme?: string;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Обработчик клика
   */
  onClick?: MouseEventHandler<HTMLSpanElement>;

  /**
   * Обработчик события `onMouseDown`
   */
  onMouseDown?: MouseEventHandler<HTMLSpanElement>;
}

export const TextinputClear: FC<ITextinputClearProps> = ({
  visible,
  className,
  theme,
  ...props
}) => {
  return (
    <IconWrapper
      {...props}
      component={
        <Icon
          {...getIconType(theme)}
          className={cnTextinput("Clear", { visible }, [className])}
        />
      }
    />
  );
};
