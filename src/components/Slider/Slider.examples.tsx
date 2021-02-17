import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";
import { Device } from "../_internal_/Device/Device";

import { Slider } from "./Slider.bundle";

export default {
    title: "Controls|Slider",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Slider.md"),
        },
    },
};

export const Playground = () => {
    const count = number("Count", 5);
    const activeIndex = number("activeIndex", 0);

    const colors = ["red", "green", "black", "yellow", "blue", "orange"];

    return (
        <Device>
            <Slider className={"Slider-Storybook"} activeIndex={activeIndex} onSlideChange={action("onSlideChange")}>
                {[...Array(count)].map((_, index) => {
                    return (
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: colors[index % 6],
                            }}
                            key={index}
                        />
                    );
                })}
            </Slider>
        </Device>
    );
};

Playground.story = {
    name: "playground",
};
