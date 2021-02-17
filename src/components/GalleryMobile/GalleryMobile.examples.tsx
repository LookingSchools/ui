import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { Device } from "../_internal_/Device/Device";
import { GalleryMobile, GalleryMobileItemProps } from "./GalleryMobile";

import * as stubData from "./datastub";

function getImages() {
    return stubData.dataDefault.images as Array<GalleryMobileItemProps>;
}

export default {
    title: "GalleryMobile",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./GalleryMobile.md"),
        },
    },
};

export const Playground = () => {
    const activeIndex = number("activeIndex", 0);

    return (
        <Device>
            <GalleryMobile className="my-gallery" activeIndex={activeIndex} items={getImages()} />
        </Device>
    );
};

Playground.story = {
    name: "playground",
};
