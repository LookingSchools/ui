import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_social.scss";
import "./Icon_social_vk.scss";

export interface IWithSocialVKProps {
    /**
     * Символ иконки
     */
    social?: "vk";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconSocialhProps} props
 */
export const withSocialVK = withBemMod<IWithSocialVKProps, IIconProps>(
    cnIcon(),
    { social: "vk" },
    (Icon) => ({ className, size, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true, size }, [className])}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.934 13.916c.73.713 1.5 1.383 2.155 2.167.289.349.563.708.772 1.113.297.575.028 1.208-.488 1.242l-3.205-.001c-.826.068-1.486-.265-2.04-.83-.444-.452-.855-.933-1.282-1.4a3.04 3.04 0 0 0-.576-.513c-.438-.284-.818-.197-1.068.26-.254.464-.312.978-.337 1.495-.034.754-.263.953-1.02.987-1.62.077-3.158-.168-4.587-.985-1.26-.721-2.236-1.738-3.086-2.89-1.655-2.242-2.922-4.706-4.06-7.239-.257-.57-.07-.877.56-.888a87.013 87.013 0 0 1 3.138-.001c.425.006.706.25.87.651.566 1.391 1.258 2.715 2.127 3.941.231.327.467.653.803.883.372.255.655.17.83-.244.11-.262.16-.545.184-.826.083-.967.094-1.933-.051-2.897-.09-.602-.428-.991-1.029-1.105-.306-.058-.26-.172-.112-.347.257-.302.5-.49.983-.49h3.622c.57.113.697.37.775.943l.003 4.024c-.006.222.11.881.51 1.028.321.105.532-.152.724-.355.868-.92 1.487-2.008 2.04-3.134.245-.495.456-1.01.66-1.524.152-.381.39-.569.82-.56l3.485.003c.104 0 .208.001.309.018.587.1.748.353.566.927-.285.9-.842 1.65-1.385 2.403-.582.805-1.204 1.582-1.78 2.39-.53.74-.488 1.112.17 1.754z" />
            </svg>
        </Icon>
    )
);
