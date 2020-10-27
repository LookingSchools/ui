import React, { FC } from "react";

import { cnGallery } from "../Gallery";

import "./Gallery-Preview.scss";

export interface GalleryPreviewProps {
  /**
   * Дополнительный класс.
   */
  className?: string;
}

export const GalleryPreview: FC<GalleryPreviewProps> = ({
  className,
  children,
  ...props
}) => (
  <div {...props} className={cnGallery("Preview", null, [className])}>
    <div className={cnGallery("Wrap")} style={{ transitionDuration: "400ms" }}>
      <div>
        <div className={cnGallery("PreviewImage")}>
          <div className={cnGallery("Container")}>{children}</div>
        </div>
      </div>
    </div>
  </div>
);
