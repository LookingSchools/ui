import React, { createRef, PureComponent } from "react";
import { compose } from "@bem-react/core";
import { withKnobs, select, boolean, text, object } from "@storybook/addon-knobs";

// Popup
import { Popup as PopupBase } from "./Popup";
import { withNonvisual } from "./_nonvisual/Popup_nonvisual";
import { withTargetAnchor } from "./_target/Popup_target_anchor";
import { withThemeDefault } from "./_theme/Popup_theme_default";

// Button
import { Button as ButtonBase } from "../Button/Button";
import { withThemeDefault as withButtonThemeDefault } from "../Button/_theme/Button_theme_default";
import { withSizeM as withButtonSizeM } from "../Button/_size/Button_size_m";

const Button = compose(withButtonThemeDefault, withButtonSizeM)(ButtonBase);

const Popup = compose(withNonvisual, withThemeDefault, withTargetAnchor)(PopupBase);

const scopeRef1 = createRef();
const scopeRef2 = createRef();
const anchorRef1 = createRef();
const anchorRef2 = createRef();

const allDirections = [
    "bottom-left",
    "bottom-center",
    "bottom-right",
    "top-left",
    "top-center",
    "top-right",
    "right-top",
    "right-center",
    "right-bottom",
    "left-top",
    "left-center",
    "left-bottom",
];

class BaseExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            popup1Visible: true,
            popup2Visible: true,
            popup3Visible: true,
            popup4Visible: true,
            popup5Visible: true,
            popup6Visible: true,
        };
        this.onClick = (id) => () => {
            const computedKey = id + "Visible";
            this.setState({ [computedKey]: !this.state[computedKey] });
        };
    }
}

class ThemeShowcase extends BaseExample {
    render() {
        return (
            <div style={{ position: "relative", display: "flex" }} ref={scopeRef1}>
                <Button
                    onClick={this.onClick("popup2")}
                    innerRef={anchorRef2}
                    theme="default"
                    size="m"
                    type="button"
                    children="_theme_default"
                />
                <Popup
                    forceRender
                    hasTail
                    target="anchor"
                    anchor={anchorRef2}
                    scope={scopeRef1}
                    directions={["bottom-center"]}
                    theme="default"
                    visible={this.state.popup2Visible}
                >
                    <div style={{ padding: 8, fontFamily: "Arial" }}>Default</div>
                </Popup>
            </div>
        );
    }
}

class TargetShowcase extends BaseExample {
    render() {
        return (
            <div style={{ position: "relative" }} ref={scopeRef1}>
                <Button
                    onClick={this.onClick("popup1")}
                    innerRef={anchorRef1}
                    size="m"
                    theme="default"
                    type="buttom"
                    children="_target_anchor"
                />
                <Popup
                    hasTail
                    target="anchor"
                    anchor={anchorRef1}
                    forceRender
                    directions={["bottom-left"]}
                    scope={scopeRef1}
                    theme="default"
                    visible={this.state.popup1Visible}
                    style={{ maxWidth: 280 }}
                >
                    <div style={{ padding: 16, fontFamily: "Arial" }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </div>
                </Popup>
            </div>
        );
    }
}

class DirectionsShowcase extends BaseExample {
    state = {
        ...this.state,
        directionsVisible: false,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ directionsVisible: true });
        }, 100);
    }

    render() {
        return (
            <div style={{ position: "relative", top: 25, left: 100 }} ref={scopeRef1}>
                <div
                    style={{
                        background: "#e6e6e6",
                        height: 100,
                        width: 320,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 3,
                    }}
                    ref={anchorRef1}
                >
                    Anchor
                </div>
                {allDirections.map((direction) => (
                    <Popup
                        key={direction}
                        anchor={anchorRef1}
                        directions={[direction]}
                        forceRender
                        hasTail
                        target="anchor"
                        scope={scopeRef1}
                        theme="default"
                        visible={this.state.directionsVisible}
                    >
                        <div style={{ padding: 4, fontFamily: "Arial" }}>{direction}</div>
                    </Popup>
                ))}
            </div>
        );
    }
}

class ScopeShowcase extends BaseExample {
    render() {
        return (
            <>
                <div
                    ref={scopeRef1}
                    style={{
                        height: 50,
                        maxWidth: 200,
                        border: "2px dashed #c4c4c4",
                        color: "#c4c4c4",
                    }}
                >
                    {"Scope 1"}
                    <Popup forceRender theme="default" visible scope={scopeRef1}>
                        <div style={{ padding: 4, fontFamily: "Arial" }}>Opens in Scope 1</div>
                    </Popup>
                </div>
                <div
                    ref={scopeRef2}
                    style={{
                        height: 50,
                        maxWidth: 200,
                        border: "2px dashed #c4c4c4",
                        borderTop: 0,
                        color: "#c4c4c4",
                    }}
                >
                    {"Scope 2"}
                    <Popup forceRender theme="default" scope={scopeRef2} visible>
                        <div style={{ padding: 4, fontFamily: "Arial" }}>Opens in Scope 2</div>
                    </Popup>
                </div>
            </>
        );
    }
}

class PositionShowcase extends BaseExample {
    render() {
        return (
            <div ref={scopeRef1}>
                <Popup
                    forceRender
                    theme="default"
                    visible
                    scope={scopeRef1}
                    position={{
                        top: 16,
                        left: 16,
                    }}
                >
                    <div style={{ padding: 16, fontFamily: "Arial" }}>
                        <pre>{"position={{\n  top: 16,\n  left: 16\n}}"}</pre>
                    </div>
                </Popup>
            </div>
        );
    }
}

export default {
    title: "Popup",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Popup.md"),
        },
    },
};

export const Playground = () => {
    const visible = boolean("visible", true);
    const nonvisual = boolean("nonvisual", false);
    const children = text(
        "children",
        "Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом."
    );
    const theme = select("theme", ["default", ""], "default");
    const position = object("position ", { top: 0, left: 0 });
    const direction = select("direction", allDirections, "bottom-center");

    return (
        <div ref={scopeRef1} style={{ position: "relative" }}>
            <Popup
                forceRender
                scope={scopeRef1}
                theme={theme}
                direction={direction}
                visible={visible}
                nonvisual={nonvisual}
                position={position}
                style={{ maxWidth: 280 }}
            >
                <div
                    style={{
                        padding: 16,
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    }}
                >
                    {children}
                </div>
            </Popup>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Target = () => <TargetShowcase />;

Target.story = {
    name: "_target_anchor",
};

export const Theme = () => <ThemeShowcase />;

Theme.story = {
    name: "theme",
};

export const Directions = () => <DirectionsShowcase />;

Directions.story = {
    name: "directions",
};

export const Position = () => <PositionShowcase />;

Position.story = {
    name: "position",
};

export const Scope = () => <ScopeShowcase />;

Scope.story = {
    name: "scope",
};
