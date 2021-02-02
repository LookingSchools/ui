import { FC } from "react";
import { compose, IClassNameProps } from "@bem-react/core";
import { Modal as ModalBase } from "../../Modal/Modal";
import { IModalThemeDefaultProps, withThemeDefault } from "../../Modal/_theme/Modal_theme_default";

import {
  withOutsideClick,
  IWithOutsideClickProps
} from "../../../hocs/withOutsideClick/withOutsideClick";
import { withZIndex } from "../../../hocs/withZIndex/withZIndex";

import "./Gallery-Modal.scss";

export interface IGalleryModalProps extends IWithOutsideClickProps, IModalThemeDefaultProps, IClassNameProps {
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

export const GalleryModal: FC<IGalleryModalProps> = compose(
  withThemeDefault,
  withOutsideClick,
  withZIndex
)(ModalBase);
