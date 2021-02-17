import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Typography } from "./Typography.bundle";

export default {
    title: "Controls|Typography",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Typography.md"),
        },
    },
};

export const Playground = () => {
    return (
        <div>
            <Typography tag="h1">h1. Typography</Typography>
            <Typography tag="h2">h2. Typography</Typography>
            <Typography tag="h3">h3. Typography</Typography>
            <Typography tag="h4">h4. Typography</Typography>
            <Typography>_size_l or Base. Typography</Typography>
            <Typography size="m">_size_m. Typography</Typography>
            <Typography size="s">_size_s. Typography</Typography>
        </div>
    );
};

Playground.story = {
    name: "playground",
};
