import React, { RefObject, FC } from "react";
import { cn } from "@bem-react/classname";

import { Popup, IPopupProps } from "../Popup/Popup";

import "./Modal.scss";

export interface IModalProps extends IPopupProps {
  /**
   * Выравнивание контента по вертикали
   *
   * @default 'middle'
   */
  contentVerticalAlign?: "top" | "middle" | "bottom";

  /**
   * Добавляет анимацию при открытии модального окна.
   *
   * @default true
   */
  hasAnimation?: boolean;
}

export const cnModal = cn("Modal");

/**
 * Используется для создания всплывающих модальных окон.
 * @param {IModalProps} props
 */
export const Modal: FC<IModalProps> = ({
  children,
  className,
  contentVerticalAlign,
  hasAnimation = true,
  targetRef,
  visible,
  ...props
}) => {
  return (
    <Popup
      {...props}
      className={cnModal({ visible, hasAnimation }, [className])}
      visible={visible}
    >
      <div className={cnModal("Table")}>
        <div
          className={cnModal("Cell")}
          style={{ verticalAlign: contentVerticalAlign }}
        >
          <div
            className={cnModal("Content")}
            ref={targetRef as RefObject<HTMLDivElement>}
          >
            {children}
          </div>
        </div>
      </div>
    </Popup>
  );
};

Modal.displayName = cnModal();
