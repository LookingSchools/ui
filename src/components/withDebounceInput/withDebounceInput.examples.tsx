import React, { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { withDebounceInput } from '.';
import { Textinput } from '../Textinput/Textinput.bundle';

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
    const [value, setValue] = useState('');

    return (
        <>
            <DebouncedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                debounceTimeout={100}
                view="default"
                size="m"
            /> <br /> <br />

            <b>Value:</b> {value}
        </>
    );
};


Playground.story = {
    name: "playground",
};

export const Blur = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <DebouncedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                debounceTimeout={1000}
                view="default"
                size="m"
                forceNotifyOnBlur
            /><br /> <br />

            <b>Value:</b> {value}
        </>
    );
};

Blur.story = {
    name: "playground",
};