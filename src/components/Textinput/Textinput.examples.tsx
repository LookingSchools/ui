import React, { useState } from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

import { Textinput } from "./Textinput.bundle";
import { Icon } from "../Icon/Icon.bundle";

export default {
    title: "Textinput",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Textinput.md"),
        },
    },
};

export const Playground = () => {
    const [value, setValue] = useState("");
    const theme = select("theme", ["default", "search"], "default") as any;
    const size = select("size", ["l", "m", "s"], "m") as any;
    const pin = select(
        "pin",
        ["", "brick-round", "clear-clear", "clear-round", "round-brick", "round-clear", "round-round"],
        ""
    ) as any;

    const type = select("type", ["text", "password", "number"], "text");
    const hasClear = boolean("hasClear", false);
    const disabled = boolean("disabled", false);
    const state = select("state", ["error", ""], "") as any;
    const hint = text("hint", "");

    return (
        <div>
            <Textinput
                disabled={disabled}
                theme={theme}
                size={size}
                pin={pin}
                hasClear={hasClear}
                placeholder="Placeholder"
                value={value}
                type={type}
                onChange={(event) => setValue(event.target.value)}
                onClearClick={() => setValue("")}
                state={state}
                hint={hint}
            />
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Theme = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
        <>
            <div style={{ padding: 4 }}>
                <h3>Theme Default</h3>
                <Textinput
                    size="m"
                    hasClear
                    theme="default"
                    value={value1}
                    onChange={(event) => setValue1(event.target.value)}
                    onClearClick={() => setValue1("")}
                />
            </div>
            <div style={{ padding: 4 }}>
                <h3>Theme Search</h3>
                <Textinput
                    size="m"
                    theme="search"
                    iconRight={<Icon glyph="search" size="s" />}
                    hasClear
                    placeholder="Найти школы и курсы"
                    value={value2}
                    onChange={(event) => setValue2(event.target.value)}
                    onClearClick={() => setValue2("")}
                />
            </div>
        </>
    );
};

Theme.story = {
    name: "theme",
};

export const Size = () => {
    return (
        <>
            <div style={{ padding: 4 }}>
                <Textinput size="l" theme="default" defaultValue="size l" />
            </div>
            <div style={{ padding: 4 }}>
                <Textinput size="m" theme="default" defaultValue="size m" />
            </div>
            <div style={{ padding: 4 }}>
                <Textinput size="s" theme="default" defaultValue="size s" />
            </div>
        </>
    );
};

Size.story = {
    name: "size",
};

export const HasClear = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
        <>
            <div style={{ padding: 4 }}>
                <Textinput
                    hasClear
                    size="m"
                    theme="default"
                    value={value1}
                    onChange={(event) => setValue1(event.target.value)}
                    onClearClick={() => setValue1("")}
                />
            </div>
            <div style={{ padding: 4 }}>
                <Textinput
                    hasClear
                    size="m"
                    theme="default"
                    value={value2}
                    onChange={(event) => setValue2(event.target.value)}
                    onClearClick={() => setValue2("")}
                />
            </div>
        </>
    );
};

HasClear.story = {
    name: "hasClear",
};

export const state = () => {
    return (
        <>
            <Textinput state="error" hint="Error message" size="m" theme="default" defaultValue="theme default" />
        </>
    );
};

state.story = {
    name: "state",
};

export const Disabled = () => (
    <>
        <Textinput size="m" theme="default" disabled defaultValue="theme default" />
    </>
);

Disabled.story = {
    name: "disabled",
};

export const BaseLine = () => (
    <div style={{ display: "inline-block", width: 330 }}>
        <Textinput baseline size="m" theme="default" defaultValue="Hello" style={{ margin: 4, width: 150 }} />
        <Textinput baseline size="s" theme="default" defaultValue="World" style={{ margin: 4, width: 150 }} />
    </div>
);

BaseLine.story = {
    name: "baseline",
};

export const Pin = () => {
    const rPins = ["round-round", "round-clear", "clear-round", "round-brick", "brick-round"];
    return (
        <>
            <p>Поля со скругленными уголками</p>
            {rPins.map((pin) => (
                <Textinput key={pin} size="m" theme="default" pin={pin} value={`pin=${pin}`} />
            ))}
            <p>Поле без боковых границ</p>
            <Textinput size="m" theme="default" pin="clear-clear" value="pin=clear-clear" />
        </>
    );
};

Pin.story = {
    name: "pin",
};

export const Type = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textinput size="m" theme="default" type="number" defaultValue="200" />
        </div>
        <div style={{ padding: 4 }}>
            <Textinput size="m" theme="default" type="password" defaultValue="secret" />
        </div>
    </>
);

Type.story = {
    name: "type",
};
