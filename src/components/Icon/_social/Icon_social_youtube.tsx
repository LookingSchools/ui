import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_social.scss";
import "./Icon_social_youtube.scss";

export interface IWithSocialYouTubeProps {
  /**
   * Символ иконки
   */
  social?: "youtube";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconSocialhProps} props
 */
export const withSocialYouTube = withBemMod<
  IWithSocialYouTubeProps,
  IIconProps
>(cnIcon(), { social: "youtube" }, Icon => ({ className, ...props }) => (
  <Icon {...props} className={cnIcon({ hasSocial: true }, [className])}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.173 7.566a3.284 3.284 0 0 1 2.291 2.329c.557 2.067.536 6.377.536 6.377s0 4.287-.535 6.355a3.284 3.284 0 0 1-2.292 2.329C24.138 25.5 16 25.5 16 25.5s-8.117 0-10.173-.566a3.285 3.285 0 0 1-2.292-2.329C3 20.56 3 16.25 3 16.25s0-4.288.535-6.355c.3-1.132 1.2-2.046 2.292-2.35C7.86 7 16 7 16 7s8.138 0 10.173.566zm-5.997 8.684l-6.768 3.961V12.29l6.768 3.961z"
      />
    </svg>
  </Icon>
));
