import React from "react";
import { compose, composeU } from "@bem-react/core";
import { withKnobs, select, boolean, object } from "@storybook/addon-knobs";
import { Store, State } from "@sambego/storybook-state";

import { Radiobutton as RadiobuttonPresenter } from "./Radiobutton";
import { withSizeM } from "./_size/Radiobutton_size_m";
import { withSizeS } from "./_size/Radiobutton_size_s";
import { withThemeDefault } from "./_theme/Radiobutton_theme_default";

const Radiobutton = compose(composeU(withSizeS, withSizeM), composeU(withThemeDefault))(RadiobuttonPresenter);

export default {
    title: "Radiobutton",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Radiobutton.md"),
        },
    },
};

export const Playground = () => {
    const store = new Store({ value: "a" });
    const size = select("size", ["m", "s"], "m") as any;
    const theme = select("theme", ["default"], "default") as any;
    const options = object("options", [
        { label: "Option A", value: "a" },
        { label: "Option B", value: "b" },
        { label: "Option C (disabled)", value: "c", disabled: true },
    ]);
    const disabled = boolean("disabled", false);

    return (
        <div>
            <State store={store}>
                <Radiobutton
                    disabled={disabled}
                    size={size}
                    theme={theme}
                    value={store.get("value")}
                    onChange={(event) => store.set({ value: event.target.value })}
                    options={options}
                />
            </State>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Theme = () => {
    const store1 = new Store({ value: "a" });
    const options = [
        { label: "Option A", value: "a" },
        { label: "Option B", value: "b" },
        { label: "Option C", value: "c" },
    ];

    return (
        <>
            {"_theme_default: "}
            <State store={store1}>
                <Radiobutton
                    size="m"
                    theme="default"
                    value={store1.get("value")}
                    onChange={(event) => store1.set({ value: event.target.value })}
                    options={options}
                />
            </State>
        </>
    );
};

Theme.story = {
    name: "theme",
};

export const Size = () => {
    const store1 = new Store({ value: "a" });
    const store2 = new Store({ value: "a" });
    const options = [
        { label: "Option A", value: "a" },
        { label: "Option B", value: "b" },
        { label: "Option C (disabled)", value: "c", disabled: true },
    ];

    return (
        <>
            {"_size_m: "}
            <State store={store1}>
                <Radiobutton
                    size="m"
                    theme="default"
                    value={store1.get("value")}
                    onChange={(event) => store1.set({ value: event.target.value })}
                    options={options}
                />
            </State>
            <br />
            {"_size_s: "}
            <State store={store2}>
                <Radiobutton
                    size="s"
                    theme="default"
                    value={store2.get("value")}
                    onChange={(event) => store2.set({ value: event.target.value })}
                    options={options}
                />
            </State>
        </>
    );
};

Size.story = {
    name: "size",
};
