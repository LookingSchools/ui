import { FC } from "react";
import { compose, IClassNameProps } from "@bem-react/core";
import { Modal as ModalBase, IModalProps } from "../../Modal/Modal";
import { IModalThemeDefaultProps } from "../../Modal/_theme/Modal_theme_default";
import { withThemeDefault } from "../../Modal/_theme/Modal_theme_default";
import {
  withOutsideClick,
  IWithOutsideClickProps
} from "../../../hocs/withOutsideClick/withOutsideClick";
import { withZIndex } from "../../../hocs/withZIndex/withZIndex";

import "./Gallery-Modal.scss";

export interface IGalleryModalProps
  extends IModalProps,
    IClassNameProps,
    IModalThemeDefaultProps,
    IWithOutsideClickProps {
  /**
   * Уровень слоев `z-index` для компонент.
   *
   * @defaultvalue `0`
   */
  zIndexGroupLevel?: number;
}

export const GalleryModal: FC<IGalleryModalProps> = compose(
  withThemeDefault,
  withOutsideClick,
  withZIndex
)(ModalBase);
