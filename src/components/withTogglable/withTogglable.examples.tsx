import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { withTogglable } from ".";
import { Button } from "../Button/Button.bundle";

export default {
    title: "withTogglable",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

const ComponentWithToggable = withTogglable(({ opened, setOpened, ...props }) => (
    <Button
        // @ts-ignore
        onClick={() => setOpened(!opened)}
        theme={opened ? "primary" : "default"}
        size="m"
        {...props}
    >
        {opened ? "Opened" : "Closed"}
    </Button>
));

export const Playground = () => <ComponentWithToggable />;

Playground.story = {
    name: "playground",
};
