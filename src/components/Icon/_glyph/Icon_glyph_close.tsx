import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_close.scss";

export interface IWithGlyphCloseProps {
  /**
   * Символ иконки
   */
  glyph?: "close";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphClose = withBemMod<IWithGlyphCloseProps, IIconProps>(
  cnIcon(),
  { glyph: "close" },
  Icon => ({ className, ...props }) => (
    <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
      <svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
      >
        <polygon points="10,0.714 9.287,0 5,4.286 0.714,0 0,0.714 4.286,5 0,9.285 0.714,10 5,5.714 9.287,10 10,9.285 5.714,5" />
      </svg>
    </Icon>
  )
);
