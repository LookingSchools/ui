import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Spin } from "./Spin.bundle";

export default {
    title: "Controls|Spin",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Spin.md"),
        },
    },
};

export const Playground = () => {
    const theme = select("theme", ["primary"], "primary");
    const size = select("size", ["l", "m", "s", "xs", "xxs"], "m");
    const position = select("position", ["", "center"], "");
    const progress = boolean("progress", true);

    return (
        <div>
            <Spin theme={theme} progress={progress} position={position} size={size} />
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Theme = () => {
    return <Spin progress theme="primary" size="m" />;
};

Theme.story = {
    name: "theme",
};

export const Size = () => {
    return (
        <>
            <Spin progress theme="primary" size="l" />
            <Spin progress theme="primary" size="m" />
            <Spin progress theme="primary" size="s" />
            <Spin progress theme="primary" size="xs" />
            <Spin progress theme="primary" size="xxs" />
        </>
    );
};

Size.story = {
    name: "size",
};

export const Position = () => {
    return (
        <div style={{ position: "relative", height: 38 }}>
            <Spin progress position="center" theme="primary" size="l" />
        </div>
    );
};

Position.story = {
    name: "position",
};
