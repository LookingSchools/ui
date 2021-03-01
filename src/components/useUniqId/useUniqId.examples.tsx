import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { useUniqId } from '.';

export default {
    title: "useUniqId",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

export const Playground = () => {
    const id = useUniqId('componentName');
    return (
        <div id={id}>
        I am a component <br />
        id: <em>{id}</em>
    </div>);
};

Playground.story = {
    name: "playground",
};
