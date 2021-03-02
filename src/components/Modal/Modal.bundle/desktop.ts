import { compose } from '@bem-react/core';

// base
import { Modal as ModalDesktop } from '../Modal@desktop';
// _theme
import { withThemeDefault } from '../_theme/Modal_theme_default@desktop';

export * from '../Modal@desktop';

export const Modal = compose(withThemeDefault)(ModalDesktop);
