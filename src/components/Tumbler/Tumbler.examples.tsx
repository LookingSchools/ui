import React, { useState } from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";

import { Tumbler } from "./Tumbler.bundle";

export default {
    title: "Tumbler",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Tumbler.md"),
        },
    },
};

export const Playground = () => {
    const [checked, setChecked] = useState(false);
    const theme = select("theme", ["default"], "default") as any;
    const size = select("size", ["s", "m", "l"], "m") as any;
    const labelBefore = text("labelBefore", "");
    const labelAfter = text("labelAfter", "");
    const disabled = boolean("disabled", false);

    return (
        <Tumbler
            size={size}
            disabled={disabled}
            theme={theme}
            checked={checked}
            onChange={() => setChecked(!checked)}
            labelBefore={labelBefore}
            labelAfter={labelAfter}
        />
    );
};

export const Size = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
        <>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="s"
                    theme="default"
                    checked={checked1}
                    onChange={() => setChecked1(!checked1)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    theme="default"
                    checked={checked2}
                    onChange={() => setChecked2(!checked2)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="l"
                    theme="default"
                    checked={checked3}
                    onChange={() => setChecked3(!checked3)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
        </>
    );
};

export const Label = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
        <>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    theme="default"
                    checked={checked1}
                    onChange={() => setChecked1(!checked1)}
                    labelBefore="labelBefore"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    theme="default"
                    checked={checked2}
                    onChange={() => setChecked2(!checked2)}
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    theme="default"
                    checked={checked3}
                    onChange={() => setChecked3(!checked3)}
                    labelBefore={
                        <svg aria-label="labelBefore" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.5 7.003a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H12v-2a4 4 0 0 0-8 0v2h-.5zm2.5-2a2 2 0 1 1 4 0V7H6V5.003z"
                                fill="currentColor"
                            />
                        </svg>
                    }
                    labelAfter={
                        <svg
                            aria-label="labelAfter"
                            width="16"
                            height="16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 5.003a1 1 0 0 0 1-1 4 4 0 0 0-8 0v3h-.5a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H6v-3a2 2 0 1 1 4 0 1 1 0 0 0 1 1z"
                                fill="currentColor"
                            />
                        </svg>
                    }
                />
            </div>
        </>
    );
};

export const Showcase = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(true);
    const [checked5, setChecked5] = useState(true);
    const [checked6, setChecked6] = useState(true);

    return (
        <div style={{ backgroundColor: "#ddd" }}>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="s"
                    theme="default"
                    checked={checked1}
                    onChange={() => setChecked1(!checked1)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    theme="default"
                    checked={checked2}
                    onChange={() => setChecked2(!checked2)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="l"
                    theme="default"
                    checked={checked3}
                    onChange={() => setChecked3(!checked3)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>

            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="s"
                    theme="default"
                    checked={false}
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="m"
                    theme="default"
                    checked={false}
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="l"
                    theme="default"
                    checked={false}
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>

            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="s"
                    theme="default"
                    checked={checked4}
                    onChange={() => setChecked4(!checked4)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="m"
                    theme="default"
                    checked={checked5}
                    onChange={() => setChecked5(!checked5)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    size="l"
                    theme="default"
                    checked={checked6}
                    onChange={() => setChecked6(!checked6)}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>

            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="s"
                    theme="default"
                    checked
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="m"
                    theme="default"
                    checked
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
            <div style={{ marginBottom: 8 }}>
                <Tumbler
                    disabled
                    size="l"
                    theme="default"
                    checked
                    onChange={() => null}
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />
            </div>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

Size.story = {
    name: "size",
};

Label.story = {
    name: "label",
};

Showcase.story = {
    name: "showcase",
};
