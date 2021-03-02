import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { withDebounceInput } from ".";
import { Textinput } from "../Textinput/Textinput.bundle";

const DebouncedInput = withDebounceInput(Textinput);

export default {
    title: "withDebounceInput",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

export const Playground = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <DebouncedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                debounceTimeout={100}
                theme="default"
                size="m"
            />{" "}
            <br /> <br />
            <b>Value:</b> {value}
        </>
    );
};

Playground.story = {
    name: "playground",
};

export const Blur = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <DebouncedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                debounceTimeout={1000}
                theme="default"
                size="m"
                forceNotifyOnBlur
            />
            <br /> <br />
            <b>Value:</b> {value}
        </>
    );
};

Blur.story = {
    name: "blur",
};

export const Enter = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <DebouncedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                debounceTimeout={1000}
                theme="default"
                size="m"
                forceNotifyByEnter
            />{" "}
            <br /> <br />
            <b>Value:</b> {value}
        </>
    );
};

Enter.story = {
    name: "enter",
};

export const MinLength = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
        <>
            Минимальная длина 4 символа
            <DebouncedInput
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                debounceTimeout={1000}
                minLength={4}
                theme="default"
                size="m"
            />{" "}
            <br />
            <b>Value 1:</b> {value1} <br /> <br />
            Минимальная длина 8 символов
            <DebouncedInput
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                debounceTimeout={1000}
                minLength={8}
                theme="default"
                size="m"
            />{" "}
            <br />
            <b>Value 2:</b> {value2}
        </>
    );
};

MinLength.story = {
    name: "minlength",
};
