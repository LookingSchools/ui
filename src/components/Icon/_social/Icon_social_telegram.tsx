import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_social.scss";
import "./Icon_social_telegram.scss";

export interface IWithSocialTelegramProps {
  /**
   * Символ иконки
   */
  social?: "telegram";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconSocialhProps} props
 */
export const withSocialTelegram = withBemMod<
  IWithSocialTelegramProps,
  IIconProps
>(cnIcon(), { social: "telegram" }, Icon => ({ className, ...props }) => (
  <Icon {...props} className={cnIcon({ hasSocial: true }, [className])}>
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0106 0.244871C19.5676 -0.257222 20.3807 0.58535 19.8254 2.12458L13.8312 18.736C13.2757 20.2752 12.3346 20.2924 11.7249 18.7626L9.20517 12.4473C8.9025 11.6863 8.04345 10.8013 7.29094 10.4718L1.09339 7.75422C-0.405519 7.0968 -0.357197 6.15698 1.2007 5.65645L18.0106 0.244871Z" fill="black"/>
  </svg>
  </Icon>
));
