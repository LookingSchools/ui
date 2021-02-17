import React, { useState, useRef } from "react";
import { withKnobs, select, boolean, object } from "@storybook/addon-knobs";

import { Select } from "../../Select.bundle/desktop";
import { EXAMPLE_DESKTOP_TOKEN, parameters } from "../examples-config";

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs],
    parameters,
};

const options = [
    { value: "a", content: "Каждый" },
    { value: "b", content: "Охотник" },
    { value: "c", content: "Желает" },
    { value: "d", content: "Знать" },
    { value: "e", content: "Где", disabled: true },
    { value: "f", content: "Сидит" },
    { value: "g", content: "Фазан" },
];

const rawOptions = [
    { value: 1, content: 1 },
    { value: 2, content: 2 },
    { value: "c", content: "hello" },
    { value: "d", content: "darkness" },
    { value: "e", content: "my", disabled: true },
    { value: "f", content: "old" },
    { value: "g", content: "friend" },
];

export const Playground = () => {
    const [value, setValue] = useState("с");
    const scopeRef = useRef(null);

    const size = select("size", ["m", "s"], "m") as any;
    const theme = select("theme", ["default", ""], "default") as any;
    const disabled = boolean("disabled", false);
    const renderControl = boolean("renderControl", false);
    const options = object("options", rawOptions);

    return (
        <div ref={scopeRef} style={{ position: "relative" }}>
            <Select
                unsafe_scope={scopeRef}
                disabled={disabled}
                theme={theme}
                size={size}
                value={value}
                renderControl={renderControl}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Width = () => {
    const [value1, setValue1] = useState("a");
    const [value2, setValue2] = useState("a");
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: "relative" }}>
            <Select
                unsafe_scope={scopeRef}
                size="m"
                theme="default"
                width="max"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <Select
                unsafe_scope={scopeRef}
                size="m"
                theme="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </div>
    );
};

Width.story = {
    name: "width",
};

export const Size = () => {
    const [value1, setValue1] = useState("a");
    const [value2, setValue2] = useState("a");
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: "relative" }}>
            <Select
                unsafe_scope={scopeRef}
                size="m"
                theme="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />{" "}
            <Select
                unsafe_scope={scopeRef}
                size="s"
                theme="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </div>
    );
};

Size.story = {
    name: "size",
};

export const Theme = () => {
    const [value, setValue] = useState("a");
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: "relative" }}>
            <Select
                unsafe_scope={scopeRef}
                theme="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

Theme.story = {
    name: "theme",
};

export const Icon = () => {
    const [value, setValue] = useState("a");
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: "relative" }}>
            <Select
                unsafe_scope={scopeRef}
                theme="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
                iconProps={{
                    glyph: "type-arrow",
                }}
            />
        </div>
    );
};

Icon.story = {
    name: "icon",
};
