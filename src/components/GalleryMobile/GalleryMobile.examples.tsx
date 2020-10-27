import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";
import { Device } from "../_internal_/Device/Device";
import { GalleryMobile, GalleryMobileItemProps } from "./GalleryMobile";

import * as stubData from "./datastub";

function getImages() {
  return stubData.dataDefault.images as Array<GalleryMobileItemProps>;
}

storiesOf("Takberi/Components|GalleryMobile/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./GalleryMobile.md").default
      }
    })
  )
  .add("playground", () => {
    const activeIndex = number("activeIndex", 0);

    return (
      <Device>
        <GalleryMobile
          className="my-gallery"
          activeIndex={activeIndex}
          items={getImages()}
        />
      </Device>
    );
  });
