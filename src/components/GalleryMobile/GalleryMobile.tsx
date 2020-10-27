import React, { FC, useState } from "react";
import { cn } from "@bem-react/classname";

import { Slider } from "../Slider/Slider";

import {
  GalleryMobileItem,
  GalleryMobileItemProps
} from "./Item/GalleryMobile-Item";
import { GalleryMobilePoints } from "./Points/GalleryMobile-Points";

import "./GalleryMobile.scss";

const cnGalleryMobile = cn("GalleryMobile");

type GalleryMobileProps = {
  items: Array<GalleryMobileItemProps>;
  activeIndex?: number;
  className?: string;
};

export const GalleryMobile: FC<GalleryMobileProps> = ({
  className,
  activeIndex: initialIndex = 0,
  items
}) => {
  // Текущее видимое изображение
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <div className={cnGalleryMobile(null, [className])}>
      <Slider activeIndex={initialIndex} onSlideChange={setActiveIndex}>
        {items.map(({ src, src2x, alt }, index) => (
          <GalleryMobileItem src={src} src2x={src2x} alt={alt} key={index} />
        ))}
      </Slider>
      <GalleryMobilePoints
        className={cnGalleryMobile("Points")}
        activeIndex={activeIndex}
        count={items.length}
      />
    </div>
  );
};

GalleryMobile.displayName = cnGalleryMobile();

export { GalleryMobileItemProps };
// export { GalleryMobileSkeleton, GalleryMobileSkeletonProps } from './Skeleton/Skeleton';
