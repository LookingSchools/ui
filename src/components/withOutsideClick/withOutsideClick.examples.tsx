import React, { RefObject, useState, createRef } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { withOutsideClick } from ".";
import { Button } from "../Button/Button.bundle";

export default {
    title: "withOutsideClick",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

const ComponentWithOutsideClick = withOutsideClick(({ visible, targetRef, ...props }) => (
    <>
        {visible && (
            <div
                style={{
                    backgroundColor: "lightgray",
                    borderRadius: "4px",
                    lineHeight: "70px",
                    width: "100px",
                    textAlign: "center",
                }}
                ref={targetRef as RefObject<HTMLDivElement>}
                {...props}
            >
                Click outside
            </div>
        )}
    </>
));

export const Playground = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button theme="default" size="m" onClick={() => setVisible((prev) => !prev)}>
                Click
            </Button>{" "}
            <br /> <br />
            <ComponentWithOutsideClick visible={visible} onOutsideClick={() => setVisible(false)} />
        </>
    );
};

Playground.story = {
    name: "playground",
};

export const Esc = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button theme="default" size="m" onClick={() => setVisible((prev) => !prev)}>
                Click
            </Button>{" "}
            <br /> <br />
            <ComponentWithOutsideClick visible={visible} onEscapeKeyDown={() => setVisible(false)} />
        </>
    );
};

Esc.story = {
    name: "esc",
};

export const Ignore = () => {
    const [visible, setVisible] = useState(false);

    const targetRef = createRef<HTMLButtonElement>();
    const ignoreRef = createRef<HTMLButtonElement>();

    return (
        <div>
            <Button theme="default" size="m" onClick={() => setVisible((prev) => !prev)} innerRef={targetRef}>
                Click
            </Button>{" "}
            &nbsp;
            <Button theme="default" size="m">
                Ignore button
            </Button>{" "}
            &nbsp;
            <Button theme="default" size="m">
                Ignore button
            </Button>{" "}
            <br /> <br />
            <ComponentWithOutsideClick
                visible={visible}
                onOutsideClick={() => setVisible(false)}
                targetRef={targetRef}
                ignoreRefs={[ignoreRef]}
            />
        </div>
    );
};

Ignore.story = {
    name: "ignore",
};
