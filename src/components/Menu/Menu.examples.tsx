import React, { useState } from "react";
import { withKnobs, select, boolean, object } from "@storybook/addon-knobs";

import { Menu } from "./Menu.bundle";

const items = [
    { value: "a", content: "Каждый" },
    { value: "b", content: "Охотник" },
    {
        items: [
            { value: "c", content: "Желает", disabled: true },
            { value: "d", content: "Знать" },
            { value: "e", content: "Где" },
        ],
    },
];

export default {
    title: "Menu",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Menu.md"),
        },
    },
};

export const Playground = () => {
    const [value, setValue] = useState("a");

    const size = select("size", ["s", "m"], "m") as any;
    const theme = select("theme", ["default", "clear"], "clear") as any;
    const width = select("width", ["max", "auto"], "auto") as any;
    const disabled = boolean("disabled", false);
    const rawItems = object("items", items);
    return (
        <div>
            <Menu
                theme={theme}
                disabled={disabled}
                size={size}
                width={width}
                items={rawItems}
                value={value}
                onChange={(event: any) => setValue(event.target.value)}
            />
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Theme = () => {
    const [value, setValue] = useState("a");

    return (
        <>
            <Menu
                size="m"
                theme="default"
                items={items}
                value={value}
                onChange={(event: any) => setValue(event.target.value)}
            />
            <Menu
                size="m"
                theme="clear"
                items={items}
                value={value}
                onChange={(event: any) => setValue(event.target.value)}
            />
        </>
    );
};

Theme.story = {
    name: "theme",
};

export const Size = () => {
    const [value1, setValue1] = useState("a");
    const [value2, setValue2] = useState("a");

    return (
        <>
            <Menu
                size="m"
                theme="default"
                items={items}
                value={value1}
                onChange={(event: any) => setValue1(event.target.value)}
            />
            <Menu
                size="s"
                theme="default"
                items={items}
                value={value2}
                onChange={(event: any) => setValue2(event.target.value)}
            />
        </>
    );
};

Size.story = {
    name: "size",
};

export const Width = () => {
    const [value1, setValue1] = useState("a");
    const [value2, setValue2] = useState("a");

    return (
        <>
            <Menu
                size="m"
                theme="default"
                width="max"
                items={items}
                value={value1}
                onChange={(event: any) => setValue1(event.target.value)}
            />
            <Menu
                size="m"
                theme="default"
                width="auto"
                items={items}
                value={value2}
                onChange={(event: any) => setValue2(event.target.value)}
            />
        </>
    );
};

Width.story = {
    name: "width",
};
