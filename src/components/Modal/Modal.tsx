import React, { FC, useRef } from "react";
import { cn } from "@bem-react/classname";

import { Popup, IPopupProps } from "../Popup/Popup";
import { usePreventScroll } from '../../hooks/usePreventScroll';

import "./Modal.scss";

type PartialPopupProps = Pick<
    IPopupProps,
    'keepMounted' | 'className' | 'innerRef' | 'zIndex' | 'visible' | 'scope' | 'onClose' | 'onClick'
>;

export interface IModalProps extends PartialPopupProps {
    /**
     * Выравнивание контента по вертикали
     *
     * @default 'middle'
     */
    contentVerticalAlign?: 'top' | 'middle' | 'bottom';

    /**
     * Добавляет анимацию при открытии модального окна.
     *
     * @default true
     */
    hasAnimation?: boolean;

    /**
     * Блокирует прокрутку на теле документа, при открытом модальном окне.
     *
     * @default true
     */
    preventBodyScroll?: boolean;
}

export const cnModal = cn('Modal');

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
    preventBodyScroll = true,
    onClick,
    ...props
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    usePreventScroll({ enabled: preventBodyScroll && visible });

    return (
        <Popup
            {...props}
            className={cnModal({ visible, hasAnimation }, [className])}
            visible={visible}
            unstable_hostRef={contentRef}
            onClick={onClick}
        >
            <div className={cnModal('Overlay')} />
            <div className={cnModal('Wrapper')}>
                <div className={cnModal('Table')}>
                    <div className={cnModal('Cell', { align })}>
                        <div ref={contentRef} className={cnModal('Content')}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

Modal.displayName = cnModal();
