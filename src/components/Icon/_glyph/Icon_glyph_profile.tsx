import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_profile.scss";

export interface IWithGlyphProfileProps {
  /**
   * Символ иконки
   */
  glyph?: "profile";
}

export const withGlyphProfile = withBemMod<IWithGlyphProfileProps, IIconProps>(
  cnIcon(),
  { glyph: "profile" },
  Icon => ({ className, ...props }) => (
    <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
      <svg focusable="false" viewBox="0 0 22 24" width="0" height="0">
        <path d="M10.44 11.22a5.617 5.617 0 0 1-5.613-5.61A5.618 5.618 0 0 1 10.439 0a5.617 5.617 0 0 1 5.612 5.61 5.618 5.618 0 0 1-5.612 5.61h.001zM10.437 1a4.615 4.615 0 0 0-4.61 4.61 4.614 4.614 0 0 0 4.61 4.61 4.614 4.614 0 0 0 4.61-4.61A4.615 4.615 0 0 0 10.437 1zm-.864 22.886c-2.53 0-4.814-.156-6.43-.44-2.04-.358-3.034-.904-3.034-1.667 0-5.207 4.727-9.443 10.537-9.443 5.81 0 10.536 4.236 10.536 9.443 0 1.728-8.38 2.107-11.609 2.107zm1.095-10.546c-5.258 0-9.535 3.637-9.535 8.107 0 .718 2.924 1.443 8.514 1.443 6.346 0 10.556-.869 10.556-1.443 0-4.47-4.277-8.107-9.535-8.107z" />
      </svg>
    </Icon>
  )
);
