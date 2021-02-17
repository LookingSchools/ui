import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Scroller } from "./Scroller";

function prepareItems(count: number) {
    const items = new Array(count);

    const style = {
        display: "inline-block",
        width: 154,
        height: 236,
        marginRight: 8,
        borderRadius: 4,
        border: "1px solid rgba(0, 0, 0, 0.1)",
    };

    for (let i = 0; i < count; i++) {
        items[i] = <div style={style} key={i} />;
    }

    return items;
}

export default {
    title: "Scroller",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Scroller.md"),
        },
    },
};

export const Playground = () => {
    return <Scroller hideArrowLine={true}>{prepareItems(10)}</Scroller>;
};

Playground.story = {
    name: "playground",
};
