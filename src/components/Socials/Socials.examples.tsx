import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Socials } from "./Socials.bundle";

export default {
    title: "Controls|Socials",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Socials.md"),
        },
    },
};

export const Playground = () => {
    return (
        <div>
            <Socials icons={["facebook", "instagram", "youtube", "twitter", "telegram"]} />
        </div>
    );
};

Playground.story = {
    name: "playground",
};
