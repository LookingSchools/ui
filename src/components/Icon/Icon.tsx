import React, { FC, CSSProperties, ReactElement } from 'react';
import { cn } from '@bem-react/classname';

import './Icon.scss';

export interface IIconProps {
    /**
     * Направление для иконки-стрелки
     */
    direction?: 'left' | 'top' | 'right' | 'bottom';

    /**
     * Размер иконки
     */
    size?: 'xs' | 's' | 'm' | 'l';

    /**
     * CSS-стили иконки
     *
     * @default {}
     */
    style?: CSSProperties;

    /**
     * Ссылка на изображение или содержимое картинки в кодировке base64
     */
    url?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Контент иконки
     */
    children?: ReactElement;

    /**
     * Тип иконки
     */
    social?: string;
}

export const cnIcon = cn('Icon');

/**
 * Компонент для вставки иконки.
 * @param {IIconProps} props
 */
export const Icon: FC<IIconProps> = ({
    direction,
    size,
    url,
    style = {},
    children,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // @ts-ignore
    glyph: _glyph,
    // @ts-ignore
    social: _social,
    ...props
}) => {
    const className = cnIcon({ direction, size }, [props.className]);

    if (url !== undefined) {
        style.backgroundImage = `url('${url}')`;
    }

    return (
        <span {...props} aria-hidden className={className} style={style}>
            {children}
        </span>
    );
};

Icon.displayName = cnIcon();
