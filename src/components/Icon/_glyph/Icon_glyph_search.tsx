import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_search.scss";

export interface IWithGlyphCartProps {
  /**
   * Символ иконки
   */
  glyph?: "search";
}

export const withGlyphSearch = withBemMod<IWithGlyphCartProps, IIconProps>(
  cnIcon(),
  { glyph: "search" },
  Icon => ({ className, ...props }) => (
    <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
      <svg width="0" height="0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          fill="#000000"
        ></path>
      </svg>
    </Icon>
  )
);
