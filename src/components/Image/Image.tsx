import React, { FC, useCallback, useState, useMemo, RefObject, ReactNode, MouseEventHandler, useRef } from 'react';

import { cn } from '@bem-react/classname';

import { mergeAllRefs } from '../../lib/mergeRefs';

import './Image.scss';

export interface IImageProps {
    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLImageElement>;
    /**
     * Ссылка на изображение
     */
    src?: string;
    /**
     * Набор источников для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `srcSet` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-srcset)
     */
    srcSet?: string;
    /**
     * Набор размеров для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `sizes` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-sizes)
     */
    sizes?: string;
    /**
     * URL картинки для экранов с высокой плотностью пикселей = srcSet: "url 2x". srcSet имеет приоритет.
     */
    src2x?: string;
    /**
     * Ссылка на изображение при неудачной загрузке
     */
    fallbackSrc?: string;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для изображения
     */
    imageClassName?: string;
    /**
     * Компонент для отображения во время загрузки картинки
     */
    stub?: ReactNode;
    /**
     * Альтернативный текст
     */
    alt?: string;
    /**
     * атрибут aria-label
     */
    ariaLabel?: string;
    /**
     * обработчик клика
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * атрибут [loading у изображения](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)
     */
    loading?: 'lazy' | 'eager' | 'auto';
    /**
     * Ширина изображения
     */
    width?: number | string;
    /**
     * Высота изображения
     */
    height?: number | string;
    /**
     * Скругления изображения
     */
    borderRadius?: number | string;
}

const cnImage = cn('Image');

const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

// const ANIMATION_DELAY_MS = 50;

/**
 * Компонент для красивой загрузки картинок

 * - Пока загружается картинка, пользователь будет видеть `<stub/>`
 * - После загрузки картинки она будет плавно отображена поверх `<stub/>`
 * - После плавного показана картинки `<stub/>` будет удалён из `DOM`
 * - Если картинка загружается из кэша, то пользователь увидит сразу картинку без показа `<stub/>`
 * - Если картинку не удалось загрузить, то покажется стандартная картинка из свойства `fallback`
 * @param {IImageProps} props
 */
export const Image: FC<IImageProps> = props => {
    const {
        src,
        src2x,
        srcSet,
        sizes,
        fallbackSrc,
        className,
        alt,
        ariaLabel,
        onClick,
        loading = 'lazy',
        width,
        height,
        borderRadius,
        innerRef,
    } = props;

    const [isFailed, setFailed] = useState(false);

    // нужен реф по условию, а значит useRef не годится
    // важный момент: в innerRef должна быть актуальная ссылка на ref
    const imageRef = useRef<HTMLImageElement>(null);

    // обьединяем рефы
    const mergedRefs = useMemo(() => mergeAllRefs<HTMLImageElement>(imageRef, innerRef), [imageRef, innerRef]);

    const imageSrc = src || emptyImage;
    const legacySrcSet = src2x ? `${src2x} 2x` : undefined;
    const imageSrcSet = srcSet || legacySrcSet;

    const handleError = useCallback(() => {
        setFailed(true);
    }, []);

    const sizeAttrs: Pick<IImageProps, 'width' | 'height' | 'borderRadius'> = {};
    // безопасно устанавливаем стили, чтобы избежать undefined в html
    if (width !== undefined) {
        sizeAttrs.width = width;
    }
    if (height !== undefined) {
        sizeAttrs.height = height;
    }
    if (borderRadius !== undefined) {
        sizeAttrs.borderRadius = borderRadius;
    }

    const image = (
        <img
            style={sizeAttrs}
            alt={alt}
            aria-hidden={ariaLabel ? 'false' : 'true'}
            aria-label={ariaLabel}
            className={cnImage(null, [className])}
            onClick={onClick}
            onError={handleError}
            ref={mergedRefs}
            src={isFailed && fallbackSrc ? fallbackSrc : imageSrc}
            srcSet={imageSrcSet}
            sizes={sizes}
            // TypeScript пока не знает про такой атрибут
            // @ts-ignore
            loading={loading}
        />
    );

    return image;
};

Image.displayName = cnImage();

// import React, { FC, RefObject } from 'react';
// import { cn } from '@bem-react/classname';

// import './Image.scss';

// export interface IImageProps {
//     /**
//      * Ссылка на корневой DOM-элемент компонента
//      */
//     innerRef?: RefObject<HTMLImageElement>;

//     /**
//      * Ссылка на изображение
//      */
//     url: string;

//     /**
//      * Альтернативный текст
//      */
//     alt?: string;

//     /**
//      * Ширина изображения
//      */
//     width?: number;

//     /**
//      * Высота изображения
//      */
//     height?: number;

//     /**
//      * Набор источников для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `srcSet` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-srcset)
//      */
//     srcSet?: string;

//     /**
//      * Набор размеров для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `sizes` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-sizes)
//      */
//     sizes?: string;

//     /**
//      * Дополнительный класс
//      */
//     className?: string;
// }

// export const cnImage = cn('Image');

// /**
//  * Компонент для вставки изображения.
//  * @param {IImageProps} props
//  */
// export const Image: FC<IImageProps> = ({ url, alt, width, height, innerRef, sizes, srcSet, className, ...props }) => (
//     <img
//         {...props}
//         ref={innerRef}
//         className={cnImage({}, [className])}
//         src={url}
//         alt={alt}
//         width={width}
//         height={height}
//         srcSet={srcSet}
//         sizes={sizes}
//     />
// );

// Image.displayName = cnImage();
