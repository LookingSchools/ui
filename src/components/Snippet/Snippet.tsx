import React, { FC } from "react";
import { cn } from "@bem-react/classname";

// Rating
import { Rating } from "../Rating/Rating.bundle";
// DiscountBadge
import { DiscountBadge, IDiscountBadgeProps } from "../DiscountBadge/DiscountBadge.bundle";
// Button
import { Button } from "../Button/Button.bundle";
import { Link } from "../Link/Link.bundle";
import { Price, IPriceProps } from "../Price/Price";
import { Cut } from "../Cut/Cut.bundle";
import { Image, IImageProps } from "../Image/Image.bundle";

import { TSuiteName, getConfig } from "./suiteConfigs";

import "./Snippet.scss";
import "./_theme/Snippet_theme_cinco.scss";
import "./_theme/Snippet_theme_siete.scss";

export const cnSnippet = cn("Snippet");

/** тип для указания порядка вывода компонентов */
export type TOrder = "price" | "rating" | "title";

/** названия поддерживаемых тем */
export type TThemeName = "cinco" | "siete";

export { TSuiteName };

export interface ISnippetProps {
    /** Тема */
    theme: TThemeName;
    /** Конфигурация */
    suite: TSuiteName;
    /** Последовательность вывода компонентов */
    orders: TOrder[];
    /** Ссылка до товаара **/
    url?: string;
    /** Максимальная ширина сниппета */
    maxWidth?: number;
    /**  Возможность задать display='inline-block' */
    maxWidthUnit?: "px" | "%";
    display?: string;
    /** Единицы измерения ширины сниппета */
    /** Максимальное кол-во строк в названии */
    maxTitleLines?: 1 | 2 | 3;
    /** Объект с изображением */
    picture: {
        src: IImageProps["src"];
        srcSet?: IImageProps["srcSet"];
    };
    addToCartButton?: {
        url: string;
    };
    // /** ограничение максимальной высоты и ширины изображения */
    // imageMaxSize?: IPropsImage['maxSize'];
    // /** Единицы измерения ширины изображения */
    // imageMaxSizeUnit?: IPropsImage['maxSizeUnit'];
    /** Цена */
    price?: IPriceProps["price"];
    /** Старая цена */
    oldPrice?: IPriceProps["oldPrice"];
    /** Размер скидки */
    discountPercent?: IDiscountBadgeProps["percent"];
    /** Заголовок */
    title: string;
    /** Рейтинг */
    rating?: number;
    /** Кол-во отзывов */
    opinions?: number;
    /** Показывать бейдж */
    showDiscountBadge: boolean;
    /** Тема для бэйджа */
    discountBadgeTheme: "default" | "black";
    /** Показывать цену */
    showPrice: boolean;
    /** Показывать рейтинг */
    showRating: boolean;
    /** Показывать название */
    showTitle: boolean;
}

export const Snippet: FC<ISnippetProps> = ({
    theme,
    url,
    suite,
    orders = ["price", "rating", "title"],
    maxWidth,
    maxWidthUnit = "px",
    display,
    maxTitleLines = 3,
    // imageMaxSize,
    // imageMaxSizeUnit = 'px',

    picture,
    price = 0,
    oldPrice,
    discountPercent = 0,
    title,
    rating = 0,
    // opinions = 0,

    showDiscountBadge,
    discountBadgeTheme,
    showPrice,
    showRating,
    showTitle,
    addToCartButton,
    ...props
}) => {
    const config = getConfig(suite);

    const isShowDiscountBadge = showDiscountBadge && discountPercent > 0;
    const isShowSoldOut = showPrice && price === 0;
    const soldOutSrc = "//yastatic.net/market-export/_/i/marketplace/sold-out.svg";

    const addToCart = !isShowSoldOut && addToCartButton && (
        <Button className={cnSnippet("AddToCart")} theme="default" size="m">
            В корзину
        </Button>
    );

    return (
        <div
            {...props}
            className={cnSnippet({
                theme,
                "opacity-content": isShowSoldOut,
                "max-title-lines": String(maxTitleLines),
            })}
            style={{
                maxWidth: maxWidth && `${maxWidth}${maxWidthUnit}`,
                display: display,
            }}
        >
            <Link className={cnSnippet("Link")} href={url} theme="default" target="_blank">
                {isShowDiscountBadge ? (
                    <div className={cnSnippet("Discount")}>
                        <DiscountBadge
                            percent={Number(discountPercent)}
                            theme={discountBadgeTheme as any}
                            size={config.discount.size as any}
                        />
                    </div>
                ) : null}
                <div className={cnSnippet("Image")}>
                    <Image src={picture.src} srcSet={picture.srcSet} alt={title} />
                </div>
                <div className={cnSnippet("Info")}>
                    {showPrice ? (
                        <div className={cnSnippet("Price")} style={{ order: getFoundIndex<TOrder>("price", orders) }}>
                            <Price price={price} oldPrice={oldPrice} size={config.price.size} />
                        </div>
                    ) : null}
                    {showRating ? (
                        <div className={cnSnippet("Rating")} style={{ order: getFoundIndex<TOrder>("rating", orders) }}>
                            <Rating
                                type="extended"
                                value={rating}
                                base={5}
                                size={config.rating.size as any}
                                // hint={String(opinions)}
                            />
                        </div>
                    ) : null}
                    {showTitle ? (
                        <div className={cnSnippet("Title")} style={{ order: getFoundIndex<TOrder>("title", orders) }}>
                            <Cut lineHeight={config.title.lineHeight} lines={maxTitleLines}>
                                {title}
                            </Cut>
                        </div>
                    ) : null}
                </div>
            </Link>
            {addToCart}
            {isShowSoldOut ? (
                <div className={cnSnippet("Sold-Out")}>
                    <img width={96} height={44} src={soldOutSrc} alt={"Разобрано"} />
                </div>
            ) : null}
        </div>
    );
};

function getFoundIndex<T>(predicate: T, array: T[]): number {
    return array.findIndex((value) => value === predicate);
}
