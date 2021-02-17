import React from "react";
import { withBemMod } from "@bem-react/core";

import { cnLink } from "../Link";
import "./Link_theme_pseudo.scss";

export interface ILinkThemePseudoProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: "pseudo";
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemePseudoProps} props
 */
export const withThemePseudo = withBemMod<ILinkThemePseudoProps>(
    cnLink(),
    { theme: "pseudo" },
    (Link) => ({ theme, ...props }) => <Link {...props} />
);
