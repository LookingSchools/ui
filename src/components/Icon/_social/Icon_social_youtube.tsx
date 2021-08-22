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
export const withSocialYouTube = withBemMod<IWithSocialYouTubeProps, IIconProps>(
    cnIcon(),
    { social: "youtube" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M30.8263 4.01301C30.6438 3.35927 30.2958 2.76366 29.8159 2.28373C29.336 1.8038 28.7403 1.4558 28.0866 1.27335C25.633 0.615986 15.7581 0.615985 15.7581 0.615985C15.7581 0.615985 5.90818 0.602865 3.42963 1.27335C2.77589 1.4558 2.18027 1.8038 1.70034 2.28373C1.22042 2.76366 0.872409 3.35927 0.68996 4.01301C0.224848 6.52504 -0.00445474 9.07505 0.00504415 11.6298C-0.00265902 14.1748 0.226636 16.7151 0.68996 19.2176C0.872409 19.8714 1.22042 20.467 1.70034 20.9469C2.18027 21.4268 2.77589 21.7748 3.42963 21.9573C5.88063 22.616 15.7581 22.616 15.7581 22.616C15.7581 22.616 25.6067 22.616 28.0866 21.9573C28.7403 21.7748 29.336 21.4268 29.8159 20.9469C30.2958 20.467 30.6438 19.8714 30.8263 19.2176C31.2799 16.7142 31.4996 14.1739 31.4823 11.6298C31.5013 9.07595 31.2817 6.52595 30.8263 4.01301V4.01301ZM12.6065 16.3415V6.90357L20.8254 11.6298L12.6065 16.3415Z"
                    fill="black"
                />
            </svg>
        </Icon>
    )
);
