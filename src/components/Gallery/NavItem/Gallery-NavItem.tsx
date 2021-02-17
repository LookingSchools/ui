import React, { FC, MouseEventHandler, RefObject, ReactNode } from "react";
import { Image } from "../../Image/Image.bundle";

import { cnGallery } from "../Gallery";
import "./Gallery-NavItem.scss";

export interface GalleryNavItemProps {
    /**
     * Идентификатор пункта меню
     */
    // id?: number;

    /**
     * Активный пункт меню
     */
    active?: boolean;

    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Текст кнопки.
     */
    children?: ReactNode;

    /**
     * Альтернативный текст
     */
    alt?: string;

    /**
     * Ссылка на изображение
     */
    src: string;

    /**
     * @internal
     */
    innerRef?: RefObject<HTMLLIElement>;

    /**
     * Коллбек, который срабатывает при клике на контейнер
     */
    onClick?: MouseEventHandler<HTMLElement>;
}

export const GalleryNavItem: FC<GalleryNavItemProps> = ({
    innerRef,
    active,
    className,
    children,
    alt,
    src,
    onClick,
    ...props
}) => {
    return (
        <li
            {...props}
            aria-selected={active}
            ref={innerRef}
            onClick={onClick}
            className={cnGallery("NavItem", { active }, [className])}
        >
            <Image src={src} alt={alt} className={cnGallery("Image")} />
        </li>
    );
};
