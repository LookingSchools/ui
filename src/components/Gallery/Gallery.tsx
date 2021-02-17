import React, { Component, ComponentClass, ReactNode } from "react";
import { cn } from "@bem-react/classname";
import { Image } from "../Image/Image.bundle";
import { Button } from "../Button/Button.bundle";
import { DiscountBadge } from "../DiscountBadge/DiscountBadge.bundle";
import { Icon } from "../Icon/Icon.bundle";
import { GalleryNavItem as NavItem } from "./NavItem/Gallery-NavItem";
import { GalleryModal } from "./Modal/Gallery-Modal";
import { GalleryClose } from "./Close/Gallery-Close";
import { GalleryPreview as Preview } from "./Preview/Gallery-Preview";

import "./Gallery.scss";

export const cnGallery = cn("Gallery");

interface ImagesItem {
    src: string;
    alt: string;
}

export interface IGalleryProps {
    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Текст кнопки.
     */
    children?: ReactNode;

    /**
     * Скидка.
     */
    discount?: number;

    /**
     * Набор картинок.
     */
    images: ImagesItem[];
}

export interface IGalleryState {
    showPopup: boolean;
    showDiscount: boolean;
    id: number;
}

export const Gallery = class extends Component<IGalleryProps, IGalleryState> {
    static displayName = cnGallery();

    public state: IGalleryState = {
        showPopup: false,
        showDiscount: false,
        id: 0,
    };

    public openModal = () => {
        this.setState({
            showPopup: true,
        });
    };

    public closeModal = () => {
        this.setState({
            showPopup: false,
        });
    };

    public setIndex = (index: number) => {
        this.setState({
            id: index,
        });
    };

    public render() {
        const { children, className, discount, images, ...props } = this.props as IGalleryProps;

        const { id } = this.state;

        return (
            <div {...props} className={cnGallery(null, [className])}>
                {discount && this.state.showDiscount && (
                    <div className={cnGallery("Discount")}>
                        <DiscountBadge theme="default" size="m" percent={discount} />
                    </div>
                )}
                <div className={cnGallery("Nav", null, [className])}>
                    <ul>
                        {images.map((img, index) => (
                            <NavItem
                                key={index}
                                active={id === index}
                                onClick={() => this.setIndex(index)}
                                src={img.src}
                                alt={img.alt}
                            />
                        ))}
                    </ul>
                </div>
                <Preview>
                    <Image src={images[id].src} alt={images[id].alt} />
                    <span className={cnGallery("Button")}>
                        <Button
                            theme="primary"
                            size="m"
                            onClick={this.openModal}
                            iconLeft={(className) => <Icon glyph="plus" size="m" className={className} />}
                        >
                            Увеличить
                        </Button>
                    </span>
                </Preview>
                {this.state.showPopup ? this.renderModal() : null}
            </div>
        );
    }

    private renderModal = () => {
        return (
            <GalleryModal
                visible={this.state.showPopup}
                // onCloseClick={this.closeModal}
                // allowTouchOnContent={cnGallery('Content')}
                theme="default"
                hasAnimation={true}
                onEscapeKeyDown={this.closeModal}
                onOutsideClick={this.closeModal}
                zIndexGroupLevel={10}
            >
                <div className={cnGallery("Modal")}>
                    <div className={cnGallery("ModalNav")}>
                        <div className={cnGallery("Nav", null, [this.props.className])}>
                            <ul>
                                {this.props.images.map((img, index) => (
                                    <NavItem
                                        key={index}
                                        active={this.state.id === index}
                                        onClick={() => this.setIndex(index)}
                                        {...img}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cnGallery("ModalPreview")}>
                        <div className={cnGallery("ModalWrap")} style={{ transitionDuration: "400ms" }}>
                            <div className={cnGallery("ModalImage")}>
                                <Image
                                    src={this.props.images[this.state.id].src}
                                    alt={this.props.images[this.state.id].alt}
                                    className="Gallery-ModalImg"
                                />
                            </div>
                        </div>
                    </div>
                    <GalleryClose onClick={this.closeModal} />
                </div>
            </GalleryModal>
        );
    };

    // Приводим компонент к типу, в котором свойства имеющие значения по умолчанию остаются optional.
} as ComponentClass<IGalleryProps>;
