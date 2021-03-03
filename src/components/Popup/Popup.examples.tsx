import React, { useRef, useState } from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { Popup, directions } from "./desktop/bundle";
import { Button } from "../Button/Button.bundle";

export default {
    title: "Popup",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

export const Playground = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(!false);
    const children = text(
        "children",
        "Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом."
    );
    const theme = select("theme", ["default", "clear"], "default");
    const direction = select("direction", directions, "bottom");

    return (
        <div style={{ marginLeft: 160, }}>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} size="m" theme="default">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction={direction}
                theme={theme}
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
            >
                <div style={{ padding: 16, fontFamily: "Roboto" }}>{children}</div>
            </Popup>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Direction = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scopeRef} style={{ marginLeft: 112, marginTop: 32 }}>
            <div
                style={{
                    background: "#e6e6e6",
                    height: 160,
                    width: 320,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                ref={anchorRef}
            >
                Anchor
            </div>
            {directions.map((direction) => (
                <Popup
                    key={direction}
                    anchor={anchorRef}
                    scope={scopeRef}
                    direction={direction}
                    hasTail
                    target="anchor"
                    theme="default"
                    visible
                >
                    <div style={{ padding: 8, fontFamily: "Roboto" }}>{direction}</div>
                </Popup>
            ))}
        </div>
    );
};

Direction.story = {
    name: "directions",
};

export const Scrollable = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <div ref={scopeRef} style={{ position: "relative" }}>
            <div className="wrapper" style={{ overflowY: "hidden", overflowX: "auto" }}>
                <div style={{ width: 5000, overflow: "auto" }}>
                    <div className="header" style={{ background: "#555", color: "#eee", width: 10000 }}>
                        В 1800-х годах,&nbsp;
                        <Button
                            onClick={() => setVisible(!visible)}
                            innerRef={anchorRef}
                            size="m"
                            theme="default"
                            children="Открыть попап"
                        />
                        &nbsp;в те времена, когда не было еще ни железных, ни шоссейных дорог, ни газового, ни
                        стеаринового света, ни пружинных низких диванов, ни мебели без лаку,&nbsp; ни разочарованных
                        юношей со стеклышками, ни либеральных философов-женщин...
                    </div>
                    <Popup
                        hasTail
                        target="anchor"
                        anchor={anchorRef}
                        scope={scopeRef}
                        theme="default"
                        visible={visible}
                        style={{ maxWidth: 280 }}
                        onClose={() => setVisible(false)}
                    >
                        <div style={{ padding: 16, fontFamily: "Roboto" }}>А вы как думаете?</div>
                    </Popup>
                </div>
            </div>
        </div>
    );
};

Scrollable.story = {
    name: "scrollable",
};

export const Nonvisual = () => {
    const [visible, setVisible] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    return (
        <div style={{ display: "flex" }}>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} theme="default" size="m">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction="bottom"
                theme="default"
                nonvisual
                visible={visible}
            >
                <div style={{ padding: 8, fontFamily: "Roboto" }}>Nonvisual</div>
            </Popup>
        </div>
    );
};

Nonvisual.story = {
    name: "nonvisual",
};

export const Target = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <div ref={scopeRef}>
            <Button onClick={() => setVisible(!visible)} innerRef={anchorRef} size="m" theme="default">
                Open popup
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef}
                direction="bottom"
                theme="default"
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
                scope={scopeRef}
            >
                <div style={{ padding: 16, fontFamily: "Roboto" }}>
                    Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                </div>
            </Popup>
        </div>
    );
};

Target.story = {
    name: "target",
};

export const Theme = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const anchorRef1 = useRef<HTMLButtonElement>(null);
    const anchorRef2 = useRef<HTMLButtonElement>(null);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <div ref={scopeRef} style={{ display: "flex" }}>
            <Button onClick={() => setVisible1(!visible1)} innerRef={anchorRef1} theme="default" size="m">
                Open popup (theme clear)
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef1}
                direction="bottom"
                theme="clear"
                visible={visible1}
                scope={scopeRef}
            >
                <div style={{ padding: 8, fontFamily: "Roboto" }}>Clear</div>
            </Popup>
            &nbsp;
            <Button onClick={() => setVisible2(!visible2)} innerRef={anchorRef2} theme="default" size="m">
                Open popup (theme normal)
            </Button>
            <Popup
                hasTail
                target="anchor"
                anchor={anchorRef2}
                direction="bottom"
                theme="default"
                visible={visible2}
                scope={scopeRef}
            >
                <div style={{ padding: 8, fontFamily: "Roboto" }}>Default</div>
            </Popup>
        </div>
    );
};

Theme.story = {
    name: "theme",
};
