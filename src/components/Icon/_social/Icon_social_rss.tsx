import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_social.scss";
import "./Icon_social_rss.scss";

export interface IWithSocialRSSProps {
    /**
     * Символ иконки
     */
    social?: "rss";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconSocialhProps} props
 */
export const withSocialRSS = withBemMod<IWithSocialRSSProps, IIconProps>(
    cnIcon(),
    { social: "rss" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasSocial: true }, [className])}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                    d="M8.727 20.544a2.63 2.63 0 0 0-1.932.795A2.63 2.63 0 0 0 6 23.271c0 .757.265 1.401.795 1.931a2.63 2.63 0 0 0 1.932.795 2.63 2.63 0 0 0 1.931-.795 2.63 2.63 0 0 0 .796-1.931 2.63 2.63 0 0 0-.796-1.932 2.63 2.63 0 0 0-1.931-.795zm6.278-3.551a12.558 12.558 0 0 0-3.68-2.578 12.735 12.735 0 0 0-4.345-1.143h-.071c-.246 0-.45.08-.61.241a.836.836 0 0 0-.299.668v1.917c0 .237.078.44.234.61a.864.864 0 0 0 .59.285c2.168.208 4.021 1.082 5.56 2.62 1.538 1.539 2.412 3.392 2.62 5.56a.863.863 0 0 0 .285.59c.17.156.373.235.61.235h1.918c.274 0 .497-.1.667-.299.18-.19.26-.417.242-.682a12.742 12.742 0 0 0-1.144-4.345 12.558 12.558 0 0 0-2.578-3.68z"
                    fill="currentColor"
                />
                <path d="M24.293 17.923a19.914 19.914 0 0 0-4.175-6.043 19.912 19.912 0 0 0-6.044-4.176A19.71 19.71 0 0 0 6.951 6H6.91a.85.85 0 0 0-.625.256.84.84 0 0 0-.284.653V8.94a.87.87 0 0 0 .249.618.85.85 0 0 0 .603.277 16.09 16.09 0 0 1 5.802 1.449c1.832.842 3.423 1.938 4.772 3.287 1.35 1.35 2.445 2.94 3.288 4.773a15.877 15.877 0 0 1 1.434 5.801.85.85 0 0 0 .277.604.888.888 0 0 0 .633.249h2.03a.84.84 0 0 0 .654-.284.821.821 0 0 0 .255-.668 19.708 19.708 0 0 0-1.704-7.123z" />
            </svg>
        </Icon>
    )
);
