import React, { FC, useRef } from "react";
import { cn } from "@bem-react/classname";

import { Popup, IPopupProps } from "../Popup/Popup";

import "./Modal.scss";

type PartialPopupProps = Pick<
    IPopupProps,
    'keepMounted' | 'className' | 'innerRef' | 'zIndex' | 'visible' | 'scope' | 'forceRender' | 'onClose' | 'onClick'
>;

export interface IModalProps extends PartialPopupProps {
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
    contentVerticalAlign: align = 'middle',
    hasAnimation = true,
    visible,
    onClick,
    ...props
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Popup
      {...props}
      className={cnModal({ visible, hasAnimation }, [className])}
      visible={visible}
      unstable_hostRef={contentRef}
      onClick={onClick}
    >
      <div className={cnModal("Table")}>
        <div
          className={cnModal("Cell", { align })}
          // style={{ verticalAlign: contentVerticalAlign }}
        >
          <div className={cnModal("Content")} ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </Popup>
  );
};

Modal.displayName = cnModal();
