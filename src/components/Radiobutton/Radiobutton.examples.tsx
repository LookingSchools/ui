import React from "react";
import { storiesOf } from "@storybook/react";
import { compose, composeU } from "@bem-react/core";
import { withKnobs, select, boolean, object } from "@storybook/addon-knobs";
import { Store, State } from "@sambego/storybook-state";
import { withDocs } from "@storybook-addons/docs";

import { Radiobutton as RadiobuttonPresenter } from "./Radiobutton";
import { withSizeM } from "./_size/Radiobutton_size_m";
import { withSizeS } from "./_size/Radiobutton_size_s";
import { withThemeDefault } from "./_theme/Radiobutton_theme_default";

const Radiobutton = compose(
  composeU(withSizeS, withSizeM),
  composeU(withThemeDefault)
)(RadiobuttonPresenter);

storiesOf("Takberi/Components|Radiobutton/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Radiobutton.md").default
      }
    })
  )
  .add("playground", () => {
    const store = new Store({ value: "a" });
    const size = select("size", ["m", "s"], "m") as any;
    const theme = select("theme", ["default"], "default") as any;
    const options = object("options", [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C (disabled)", value: "c", disabled: true }
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
            onChange={event => store.set({ value: event.target.value })}
            options={options}
          />
        </State>
      </div>
    );
  });

storiesOf("Takberi/Components|Radiobutton", module)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Radiobutton.md").default
      }
    })
  )
  .add("_size", () => {
    const store1 = new Store({ value: "a" });
    const store2 = new Store({ value: "a" });
    const options = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C (disabled)", value: "c", disabled: true }
    ];

    return (
      <>
        {"_size_m: "}
        <State store={store1}>
          <Radiobutton
            size="m"
            theme="default"
            value={store1.get("value")}
            onChange={event => store1.set({ value: event.target.value })}
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
            onChange={event => store2.set({ value: event.target.value })}
            options={options}
          />
        </State>
      </>
    );
  })
  .add("_theme", () => {
    const store1 = new Store({ value: "a" });
    const options = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" }
    ];

    return (
      <>
        {"_theme_default: "}
        <State store={store1}>
          <Radiobutton
            size="m"
            theme="default"
            value={store1.get("value")}
            onChange={event => store1.set({ value: event.target.value })}
            options={options}
          />
        </State>
      </>
    );
  });
