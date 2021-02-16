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
      <svg width="24" height="24" fill="none"><path d="M2 7a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h18a1 1 0 100-2H3z" fill="#000"></path></svg>
    </Icon>
  )
);
