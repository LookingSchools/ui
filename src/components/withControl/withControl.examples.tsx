import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { withControl } from ".";
import { Typography } from "../Typography/Typography.bundle";
import { Button } from "../Button/Button.bundle";

export default {
    title: "useUniqId",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

const Component = (props: any) => (
    <Button {...props} theme="primary" size="m">
        {" "}
        Button{" "}
    </Button>
);
const EnhancedComponent = withControl(Component);

export const Playground = () => {
    const [curState, setCurState] = useState("No state");

    const handleBlur = () => setCurState("Handle blur");
    const handleFocus = () => setCurState("Handle focus");
    const handleMouseDown = () => setCurState("Handle mouse down");
    const handleMouseUp = () => setCurState("Handle mouse up");

    return (
        <>
            <EnhancedComponent
                onBlur={handleBlur}
                onFocus={handleFocus}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            />{" "}
            &nbsp;
            <Typography> {curState} </Typography>
        </>
    );
};

Playground.story = {
    name: "playground",
};
