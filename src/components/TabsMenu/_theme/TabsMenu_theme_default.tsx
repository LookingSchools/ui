import { withBemMod } from "@bem-react/core";

import { cnTabsMenu } from "../TabsMenu";
import "./TabsMenu_theme_default.scss";

export interface ITabsMenuThemeDefaultProps {
    /**
     * Стилевое оформление вкладок.
     */
    theme?: "default";
}

/**
 * Модификатор, отвечающий за стилевое оформление вкладок.
 * @param {ITabsMenuThemeDefaultProps} props
 */
export const withThemeDefault = withBemMod<ITabsMenuThemeDefaultProps>(cnTabsMenu(), { theme: "default" });
