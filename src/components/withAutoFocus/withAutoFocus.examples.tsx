import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { withAutoFocus } from ".";
import { Button } from "../Button/Button.bundle";
import { Textinput } from "../Textinput/Textinput.bundle/desktop";

const InputWithAutoFocus = withAutoFocus(Textinput);

export default {
    title: "withAutoFocus",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

export const Default = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <Button onClick={() => setIsFocused(true)} theme="primary" size="m">
                {" "}
                Установить фокус{" "}
            </Button>{" "}
            &nbsp;
            <Button onClick={() => setIsFocused(false)} theme="default" size="m">
                {" "}
                Сбросить фокус{" "}
            </Button>{" "}
            <br /> <br />
            <InputWithAutoFocus theme="default" focused={isFocused} size="m" />
        </>
    );
};
