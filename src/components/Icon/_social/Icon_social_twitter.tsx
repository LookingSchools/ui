import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_social.scss";
import "./Icon_social_twitter.scss";

export interface IWithSocialTwitterProps {
  /**
   * Символ иконки
   */
  social?: "twitter";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconSocialhProps} props
 */
export const withSocialTwitter = withBemMod<
  IWithSocialTwitterProps,
  IIconProps
>(cnIcon(), { social: "twitter" }, Icon => ({ className, ...props }) => (
  <Icon {...props} className={cnIcon({ hasSocial: true }, [className])}>
    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M27.0153 3.36585C26.0172 3.80457 24.9515 4.10343 23.8293 4.2399C24.9729 3.55081 25.8526 2.46474 26.2687 1.1689C25.1962 1.79483 24.0075 2.25046 22.7421 2.50421C21.7316 1.42265 20.2914 0.745972 18.6922 0.745972C15.6279 0.745972 13.1434 3.23052 13.1434 6.29137C13.1434 6.73121 13.1941 7.15413 13.2866 7.55901C8.67391 7.34135 4.58564 5.12635 1.84959 1.77791C1.36802 2.59218 1.09848 3.53841 1.09848 4.56921C1.09848 6.49775 2.07966 8.19284 3.5661 9.18868C2.65597 9.15936 1.79997 8.90899 1.05337 8.49396V8.56275C1.05337 11.2526 2.96273 13.4958 5.50367 14.0066C5.03788 14.1318 4.54616 14.1995 4.04204 14.1995C3.68791 14.1995 3.34844 14.1657 3.00897 14.1025C3.72061 16.3051 5.76644 17.9111 8.20136 17.9562C6.30666 19.4438 3.90557 20.3302 1.31953 20.3302C0.879684 20.3302 0.44097 20.3043 0 20.2547C2.46875 21.8268 5.37735 22.746 8.52279 22.746C18.7339 22.746 24.3109 14.292 24.3109 6.97256C24.3109 6.73685 24.3109 6.49888 24.2939 6.26204C25.3778 5.48499 26.324 4.50267 27.0683 3.38841L27.0153 3.36585Z" fill="black"/>
    </svg>
  </Icon>
));
