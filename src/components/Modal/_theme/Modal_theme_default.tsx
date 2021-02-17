import { withBemMod } from "@bem-react/core";

import { cnModal } from "../Modal";
import "./Modal_theme_default.scss";

export interface IModalThemeDefaultProps {
    /**
     * Стилевое оформление модала
     */
    theme?: "default";
}

export const withThemeDefault = withBemMod<IModalThemeDefaultProps>(cnModal(), {
    theme: "default",
});
