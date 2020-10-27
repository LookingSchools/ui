import React, { FC } from "react";
import { cn } from "@bem-react/classname";

import "./GalleryMobile-Points.scss";

const cnGalleryMobilePoints = cn("GalleryMobilePoints");

export type GalleryMobilePointsProps = {
  className?: string;
  count: number;
  activeIndex: number;
};

export const GalleryMobilePoints: FC<GalleryMobilePointsProps> = props => {
  const { className, count, activeIndex } = props;

  // Если кол-во элементов меньше 2-ух, т.е. 0 или 1, тогда не рисуем точки.
  if (count < 2) {
    return null;
  }

  return (
    <div className={cnGalleryMobilePoints(null, [className])}>
      {[...Array(count)].map((_, index) => (
        <div
          key={`point-${index}`}
          className={cnGalleryMobilePoints("Point", {
            active: index === activeIndex
          })}
        />
      ))}
    </div>
  );
};

GalleryMobilePoints.displayName = cnGalleryMobilePoints();
