import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { Amountpicker } from "./Amountpicker";

export default {
    title: "Controls|Amountpicker",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Amountpicker.md"),
        },
    },
};

export const Playground = () => {

    return (
        <Amountpicker value={1} className="Card" onChange={action("onChange")} />
    );
};

Playground.story = {
    name: "playground",
};
