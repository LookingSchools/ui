import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "./Button.bundle";
import { Icon } from "../Icon/Icon.bundle";

export default {
    title: "Controls|Button",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Button.md"),
        },
    },
};

export const Playground = () => {
    return (
        <>
            <Button size="m" theme="secondary">
                Button
            </Button>{" "}
            <Button size="m" theme="default">
                Button
            </Button>
            <p>Кнопка с иконками:</p>
            <Button
                size="m"
                theme="secondary"
                icon={(className) => <Icon glyph="plus" size="m" className={className} />}
            />{" "}
            <Button
                size="m"
                theme="secondary"
                iconLeft={(className) => <Icon glyph="plus" size="m" className={className} />}
            >
                Button
            </Button>{" "}
            <Button
                size="m"
                theme="secondary"
                iconRight={(className) => <Icon glyph="plus" size="m" className={className} />}
            >
                Button
            </Button>
            <p>Кнопка с иконками c pin="circle-circle":</p>
            <Button
                size="m"
                theme="default"
                pin="circle-circle"
                icon={(className) => <Icon glyph="plus" size="m" className={className} />}
            />{" "}
            <Button
                size="m"
                theme="default"
                pin="circle-circle"
                icon={(className) => <Icon glyph="minus" size="m" className={className} />}
            />{" "}
            <Button
                size="m"
                theme="default"
                pin="circle-circle"
                iconLeft={(className) => <Icon glyph="plus" size="m" className={className} />}
            >
                Button
            </Button>{" "}
            <Button
                size="m"
                theme="default"
                pin="circle-circle"
                iconRight={(className) => <Icon glyph="plus" size="m" className={className} />}
            >
                Button
            </Button>
            <p>Кнопка с иконками c pin="circle-circle" и c theme="clear|pseudo|raised":</p>
            <Button
                size="m"
                theme="clear"
                pin="circle-circle"
                icon={(className) => <Icon glyph="plus" size="m" className={className} />}
            />{" "}
            <Button
                size="m"
                theme="pseudo"
                pin="circle-circle"
                icon={(className) => <Icon glyph="plus" size="m" className={className} />}
            />{" "}
            <Button
                size="m"
                theme="raised"
                pin="circle-circle"
                icon={(className) => <Icon glyph="plus" size="m" className={className} />}
            />
        </>
    );
};

Playground.story = {
    name: "playground",
};

export const Theme = () => {
    return (
        <>
            <Button theme="default" size="m">
                Default
            </Button>{" "}
            <Button theme="primary" size="m">
                Primary
            </Button>{" "}
            <Button theme="black" size="m">
                Black
            </Button>{" "}
            <Button theme="secondary" size="m">
                Secondary
            </Button>{" "}
            <Button theme="clear" size="m">
                Clear
            </Button>{" "}
            <Button theme="pseudo" size="m">
                Pseudo
            </Button>{" "}
            <Button theme="raised" size="m">
                Raised
            </Button>{" "}
        </>
    );
};

Theme.story = {
    name: "theme",
};

export const Size = () => {
    return (
        <>
            <Button theme="black" size="s">
                Button
            </Button>{" "}
            <Button theme="black" size="m">
                Button
            </Button>{" "}
            <Button theme="black" size="l">
                Button
            </Button>
        </>
    );
};

Size.story = {
    name: "size",
};

export const Disabled = () => {
    return (
        <>
            <Button theme="default" size="m">
                Button
            </Button>{" "}
            <Button theme="default" size="m" disabled={true}>
                Button
            </Button>{" "}
            <Button theme="primary" size="m">
                Button
            </Button>{" "}
            <Button theme="primary" size="m" disabled={true}>
                Button
            </Button>{" "}
            <Button theme="black" size="m">
                Button
            </Button>{" "}
            <Button theme="black" size="m" disabled={true}>
                Button
            </Button>{" "}
            <Button theme="secondary" size="m">
                Button
            </Button>{" "}
            <Button theme="secondary" size="m" disabled={true}>
                Button
            </Button>{" "}
            <Button theme="clear" size="m">
                Button
            </Button>{" "}
            <Button theme="clear" size="m" disabled={true}>
                Button
            </Button>{" "}
            <Button theme="pseudo" size="m">
                Button
            </Button>{" "}
            <Button theme="pseudo" size="m" disabled={true}>
                Button
            </Button>{" "}
        </>
    );
};

Disabled.story = {
    name: "disabled",
};

export const Width = () => {
    return (
        <>
            <Button theme="black" size="m" width="max">
                Button
            </Button>{" "}
            <Button theme="black" width="auto" size="m">
                Button
            </Button>
        </>
    );
};

Width.story = {
    name: "width",
};

export const Pin = () => {
    const cPins = ["circle-circle", "circle-clear", "clear-circle", "circle-brick", "brick-circle"];

    return (
        <>
            <p>Кнопки с круглыми границами theme="secondary"</p>
            {cPins.map((pin) => (
                <Button key={pin} pin={pin} theme="secondary" size="m">
                    Button
                </Button>
            ))}
            <p>Кнопки с круглыми границами theme="default" </p>
            {cPins.map((pin) => (
                <Button key={pin} pin={pin} theme="default" size="m" children="Button" />
            ))}
        </>
    );
};

Pin.story = {
    name: "pin",
};
