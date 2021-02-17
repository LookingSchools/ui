import React from "react";
import { withKnobs, color, select } from "@storybook/addon-knobs";

import { Separator, Thickness, Width } from "./Separator";

export default {
    title: "Separator",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Separator.md"),
        },
    },
};

export const Playground = () => {
    return (
        <Separator
            thickness={select("Толщина", [Thickness.Thick, Thickness.Thin], Thickness.Thick)}
            width={select("Ширина", [Width.Short, Width.Middle, Width.Long], Width.Middle)}
            color={color("Цвет разделителя", " rgba(38, 49, 129, 0.15)")}
        />
    );
};

Playground.story = {
    name: "playground",
};
