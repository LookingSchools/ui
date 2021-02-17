import React, { FC } from "react";
import { cn } from "@bem-react/classname";

import { Image } from "../../Image/Image";

import "./GalleryMobile-Item.scss";

const cnGalleryMobileItem = cn("GalleryMobileItem");

export type GalleryMobileItemProps = {
    src: string;
    src2x?: string;
    alt?: string;
};

export const GalleryMobileItem: FC<GalleryMobileItemProps> = ({ src, src2x, alt, ...props }) => {
    return (
        <div className="GalleryMobileItem-ImageContainer">
            <Image className={cnGalleryMobileItem("Image")} src={src} src2x={src2x} alt={alt} {...props} />
        </div>
    );
};

GalleryMobileItem.displayName = cnGalleryMobileItem();
