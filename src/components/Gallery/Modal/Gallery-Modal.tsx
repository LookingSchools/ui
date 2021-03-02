import { FC } from "react";
import { compose, IClassNameProps } from "@bem-react/core";

import { Modal as ModalDesktop, withThemeDefault, IModalProps, IModalThemeDefaultProps } from "../../Modal/desktop";
import { withZIndex } from "../../withZIndex";

import "./Gallery-Modal.scss";

export interface IGalleryModalProps extends IModalProps, IModalThemeDefaultProps, IClassNameProps {
    /**
     * Уровень слоев `z-index` для компонент.
     *
     * @defaultvalue `0`
     */
    zIndexGroupLevel?: number;

    /**
     * Добавляет анимацию при открытии модального окна.
     *
     * @default true
     */
    hasAnimation?: boolean;
}

export const GalleryModal: FC<IGalleryModalProps> = compose(withThemeDefault, withZIndex)(ModalDesktop);
