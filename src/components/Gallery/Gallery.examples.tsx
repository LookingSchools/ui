import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import * as stubData from "./datastub";

import { Gallery } from "./Gallery.bundle";

function getImages() {
    return stubData.dataDefault.images;
}

export default {
    title: "Controls|Gallery",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Gallery.md"),
        },
    },
};

export const Playground = () => {
    return (
        <div style={{ width: "1184px" }}>
            <div style={{ width: "60%" }}>
                <Gallery images={getImages()} discount={32} />
            </div>
        </div>
    );
};

Playground.story = {
    name: "playground",
};
