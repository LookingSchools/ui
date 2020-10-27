import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_favorite.scss";

export interface IWithGlyphFavoriteProps {
  /**
   * Символ иконки
   */
  glyph?: "favorite";
}

export const withGlyphFavorite = withBemMod<
  IWithGlyphFavoriteProps,
  IIconProps
>(cnIcon(), { glyph: "favorite" }, Icon => ({ className, ...props }) => (
  <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
    <svg focusable="false" width="0" height="0" viewBox="0 0 27 24">
      <path d="M13.406 23.489L2.084 12.166c-2.779-2.778-2.779-7.3 0-10.078A7.08 7.08 0 0 1 7.124 0c1.903 0 3.693.742 5.039 2.088l1.243 1.243 1.244-1.243A7.081 7.081 0 0 1 19.69 0c1.903 0 3.692.742 5.039 2.088a7.079 7.079 0 0 1 2.087 5.04 7.08 7.08 0 0 1-2.087 5.038L13.406 23.489zM7.129.835a5.99 5.99 0 0 0-4.305 1.82C.45 5.076.45 9.017 2.824 11.439l10.584 10.796 10.583-10.796a6.233 6.233 0 0 0 1.783-4.392c0-1.66-.634-3.22-1.783-4.393a5.988 5.988 0 0 0-4.306-1.82 5.991 5.991 0 0 0-4.306 1.82l-1.972 2.012-1.972-2.012A5.991 5.991 0 0 0 7.129.834v.001z" />
    </svg>
  </Icon>
));
