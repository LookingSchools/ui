import React, { useState, useRef } from "react";
import { select, boolean, number } from "@storybook/addon-knobs";
import { Tooltip } from "./desktop/bundle";
import { directions } from "../Popup";
import { Button } from "../Button/Button.bundle";
import { withKnobs } from "@storybook/addon-knobs";
import { TooltipStateful } from "./desktop/bundle";

export default {
    title: "Tooltip",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

export const Playground = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(false);

    const size = select("size", ["s", "m", "l"], "m") as any;
    const state = select("state", ["", "warning", "alert", "success"], "") as any;
    const direction = select("direction", directions, "right");
    const hasTail = boolean("hasTail", true);
    const mainOffset = number("mainOffset", 0);
    const secondaryOffset = number("secondaryOffset", 0);
    const tailOffset = number("tailOffset", 0);

    return (
        <div style={{ backgroundColor: "#067aff", padding: "20px" }}>
            <Button innerRef={buttonRef} theme="black" size="m" onClick={() => setVisible(!visible)}>
                Target
            </Button>
            <Tooltip
                key={direction}
                hasTail={hasTail}
                mainOffset={mainOffset}
                secondaryOffset={secondaryOffset}
                tailOffset={tailOffset}
                direction={direction}
                anchor={buttonRef}
                visible={visible}
                theme="default"
                size={size}
                state={state}
            >
                Добавить в избранное
            </Tooltip>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Direction = () => {
    const [visible, setVisible] = useState(true);
    const [directionIndex, setDirectionIndex] = useState(0);
    const anchorRef = useRef<HTMLButtonElement>(null);

    return (
        <div style={{ margin: 32, display: "flex", justifyContent: "center" }}>
            <Button
                size="m"
                theme="default"
                innerRef={anchorRef}
                onClick={() => {
                    setVisible(true);
                    setDirectionIndex((directionIndex + 1) % directions.length);
                }}
            >
                Current direction: {directions[directionIndex]}
            </Button>
            <Tooltip
                hasTail
                key={directions[directionIndex]}
                direction={directions[directionIndex]}
                anchor={anchorRef}
                theme="default"
                visible={visible}
                size="s"
            >
                {directions[directionIndex]}
            </Tooltip>
        </div>
    );
};

Direction.story = {
    name: "direction",
};

export const Size = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);
    const anchorRef1 = useRef<HTMLDivElement>(null);
    const anchorRef2 = useRef<HTMLDivElement>(null);
    const anchorRef3 = useRef<HTMLDivElement>(null);

    return (
        <div style={{ display: "flex", height: 96 }}>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef1} size="m" theme="default" onClick={() => setVisible1(!visible1)}>
                    Target
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef2} size="m" theme="default" onClick={() => setVisible2(!visible2)}>
                    Target
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef3} size="m" theme="default" onClick={() => setVisible3(!visible3)}>
                    Target
                </Button>
            </div>
            <Tooltip hasTail direction="bottom" theme="default" size="s" anchor={anchorRef1} visible={visible1}>
                Size small
            </Tooltip>
            <Tooltip hasTail direction="bottom" theme="default" size="m" anchor={anchorRef2} visible={visible2}>
                Size medium
            </Tooltip>
            <Tooltip hasTail direction="bottom" theme="default" size="l" anchor={anchorRef3} visible={visible3}>
                Size large
            </Tooltip>
        </div>
    );
};

Size.story = {
    name: "size",
};

export const State = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);
    const anchorRef1 = useRef<HTMLDivElement>(null);
    const anchorRef2 = useRef<HTMLDivElement>(null);
    const anchorRef3 = useRef<HTMLDivElement>(null);

    return (
        <div style={{ display: "flex", height: 64 }}>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef1} size="m" theme="default" onClick={() => setVisible1(!visible1)}>
                    Warning
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef2} size="m" theme="default" onClick={() => setVisible2(!visible2)}>
                    Alert
                </Button>
            </div>
            <div style={{ marginLeft: 32, marginRight: 32 }}>
                <Button innerRef={anchorRef3} size="m" theme="default" onClick={() => setVisible3(!visible3)}>
                    Success
                </Button>
            </div>
            <Tooltip
                hasTail
                direction="bottom"
                theme="default"
                size="m"
                anchor={anchorRef1}
                visible={visible1}
                state="warning"
            >
                Warning message
            </Tooltip>
            <Tooltip
                hasTail
                direction="bottom"
                theme="default"
                size="m"
                anchor={anchorRef2}
                visible={visible2}
                state="alert"
            >
                Alert message
            </Tooltip>
            <Tooltip
                hasTail
                direction="bottom"
                theme="default"
                size="m"
                anchor={anchorRef3}
                visible={visible3}
                state="success"
            >
                Success message
            </Tooltip>
        </div>
    );
};

State.story = {
    name: "state",
};

export const Stateful = () => (
    <div style={{ display: "flex", height: 96 }}>
        <div style={{ marginLeft: 32, marginRight: 32 }}>
            <TooltipStateful theme="default" size="m" hasTail content="Stateful hover" trigger="hover">
                <Button theme="default" size="m">
                    Target hover
                </Button>
            </TooltipStateful>
        </div>
        <div style={{ marginLeft: 32, marginRight: 32 }}>
            <TooltipStateful theme="default" size="m" hasTail content="Stateful click" trigger="click">
                <Button theme="default" size="m">
                    Target click
                </Button>
            </TooltipStateful>
        </div>
        <div style={{ marginLeft: 32, marginRight: 32 }}>
            <TooltipStateful theme="default" size="m" hasTail content="Stateful focus" trigger="focus">
                <Button theme="default" size="m">
                    Target focus
                </Button>
            </TooltipStateful>
        </div>
    </div>
);

Stateful.story = {
    name: "stateful",
};
