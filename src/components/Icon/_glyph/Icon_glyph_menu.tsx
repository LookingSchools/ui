import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_menu.scss";

export interface IWithGlyphMenuProps {
  /**
   * Символ иконки
   */
  glyph?: "menu";
}

export const withGlyphMenu = withBemMod<IWithGlyphMenuProps, IIconProps>(
  cnIcon(),
  { glyph: "menu" },
  Icon => ({ className, ...props }) => (
    <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
      <svg
        focusable="false"
        width="0"
        height="0"
        fill="#000"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M 2 6 V 4 h 20 v 2 H 2 Z m 0 7 v -2 h 20 v 2 H 2 Z m 0 7 v -2 h 20 v 2 H 2 Z"
        ></path>
      </svg>
    </Icon>
  )
);
