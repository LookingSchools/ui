import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_social.scss";
import "./Icon_social_facebook.scss";

export interface IWithSocialFacebookProps {
  /**
   * Символ иконки
   */
  social?: "facebook";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconSocialhProps} props
 */
export const withSocialFacebook = withBemMod<
  IWithSocialFacebookProps,
  IIconProps
>(cnIcon(), { social: "facebook" }, Icon => ({ className, ...props }) => (
  <Icon {...props} className={cnIcon({ hasSocial: true }, [className])}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.79 22H9.93v-9.501H8V9.225h1.93V7.26C9.93 4.589 11.017 3 14.113 3h2.577v3.275h-1.61c-1.206 0-1.285.457-1.285 1.311l-.006 1.639h2.918l-.341 3.274H13.79V22z" />
    </svg>
  </Icon>
));
