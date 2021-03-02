import { compose } from '@bem-react/core';

// base
import { Modal as ModalTouchPhone } from '../Modal@mobile';
// _theme
import { withThemeDefault } from '../_theme/Modal_theme_default';

export * from '../Modal@mobile';

export const Modal = compose(withThemeDefault)(ModalTouchPhone);
