import { compose, composeU } from "@bem-react/core";

// base
import { Link as LinkBase } from "../Link";
// _pseudo
import { withPseudo } from "../_pseudo/Link_pseudo";
// _theme
import { withThemeDefault } from "../_theme/Link_theme_default";
import { withThemePseudo } from "../_theme/Link_theme_pseudo";
import { withThemeBlack } from "../_theme/Link_theme_black";

export * from "../Link";

export const Link = compose(
  composeU(withThemeDefault, withThemePseudo, withThemeBlack),
  withPseudo
)(LinkBase);
