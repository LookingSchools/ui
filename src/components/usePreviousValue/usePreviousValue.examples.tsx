import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { usePreviousValue } from ".";
import { Button } from "../Button/Button.bundle";

export default {
    title: "usePreviousValue",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

const useForceUpdate = () => {
    const [, setValue] = useState(0);
    return () => setValue((value) => ++value);
};

export const Playground = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePreviousValue(count);

    return (
        <>
            Текущее значение: {count}. &nbsp; Предыдущее значение: {prevCount}. &nbsp;
            <Button theme="primary" size="m" onClick={() => setCount((prev) => prev + 1)}>
                +
            </Button>
        </>
    );
};

Playground.story = {
    name: "playground",
};

export const Rerender = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePreviousValue(count);

    const forceUpdate = useForceUpdate();

    return (
        <>
            Текущее значение: {count}. &nbsp; Предыдущее значение: {prevCount}. &nbsp;
            <Button theme="primary" size="m" onClick={() => setCount((prev) => prev + 1)}>
                +
            </Button>{" "}
            &nbsp;
            <Button theme="primary" size="m" onClick={forceUpdate}>
                Ререндер
            </Button>
        </>
    );
};

Rerender.story = {
    name: "renderer",
};
