import { compose } from "@bem-react/core";

// base
import { Modal as ModalBase } from "../Modal";
// _theme
import { withThemeDefault } from "../_theme/Modal_theme_default";

export * from "../Modal";

export const Modal = compose(withThemeDefault)(ModalBase);
