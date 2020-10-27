import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Textinput } from "./Textinput.bundle";

storiesOf("Takberi/Components|Textinput", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Textinput.md").default
      }
    })
  )
  .add("playground", () => {
    const [value, setValue] = useState("");
    const theme = select("theme", ["default", ""], "default") as any;
    const size = select("size", ["m", "s"], "m") as any;
    const pin = select(
      "pin",
      [
        "",
        "brick-round",
        "clear-clear",
        "clear-round",
        "round-brick",
        "round-clear",
        "round-round"
      ],
      ""
    ) as any;

    const type = select("type", ["text", "password", "number"], "text");
    const hasClear = boolean("hasClear", false);
    const disabled = boolean("disabled", false);
    const state = select("state", ["error", ""], "") as any;
    const hint = text("hint", "");

    return (
      <div>
        <Textinput
          disabled={disabled}
          theme={theme}
          size={size}
          pin={pin}
          hasClear={hasClear}
          placeholder="Placeholder"
          value={value}
          type={type}
          onChange={event => setValue(event.target.value)}
          onClearClick={() => setValue("")}
          state={state}
          hint={hint}
        />
      </div>
    );
  });

storiesOf("Takberi/Components|Textinput/", module)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Textinput.md").default
      }
    })
  )
  .add("_baseline", () => (
    <div style={{ display: "inline-block", width: 330 }}>
      <Textinput
        baseline
        size="m"
        theme="default"
        defaultValue="Hello"
        style={{ margin: 4, width: 150 }}
      />
      <Textinput
        baseline
        size="s"
        theme="default"
        defaultValue="World"
        style={{ margin: 4, width: 150 }}
      />
    </div>
  ))
  .add("_hasClear", () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    return (
      <>
        <div style={{ padding: 4 }}>
          <Textinput
            hasClear
            size="m"
            theme="default"
            value={value1}
            onChange={event => setValue1(event.target.value)}
            onClearClick={() => setValue1("")}
          />
        </div>
        <div style={{ padding: 4 }}>
          <Textinput
            hasClear
            size="m"
            theme="default"
            value={value2}
            onChange={event => setValue2(event.target.value)}
            onClearClick={() => setValue2("")}
          />
        </div>
      </>
    );
  })
  .add("_pin", () => {
    const rPins = [
      "round-round",
      "round-clear",
      "clear-round",
      "round-brick",
      "brick-round"
    ];
    return (
      <>
        <p>Поля со скругленными уголками</p>
        {rPins.map(pin => (
          <Textinput
            key={pin}
            size="m"
            theme="default"
            pin={pin}
            value={`pin=${pin}`}
          />
        ))}
        <p>Поле без боковых границ</p>
        <Textinput
          size="m"
          theme="default"
          pin="clear-clear"
          value="pin=clear-clear"
        />
      </>
    );
  })
  .add("_size", () => (
    <>
      <div style={{ padding: 4 }}>
        <Textinput size="m" theme="default" defaultValue="size m" />
      </div>
      <div style={{ padding: 4 }}>
        <Textinput size="s" theme="default" defaultValue="size s" />
      </div>
    </>
  ))
  .add("_type", () => (
    <>
      <div style={{ padding: 4 }}>
        <Textinput size="m" theme="default" type="number" defaultValue="200" />
      </div>
      <div style={{ padding: 4 }}>
        <Textinput
          size="m"
          theme="default"
          type="password"
          defaultValue="secret"
        />
      </div>
    </>
  ))
  .add("_theme", () => Theme())
  .add("state", () => State());

export const Theme = () => (
  <>
    <Textinput size="m" theme="default" defaultValue="theme default" />
  </>
);

export const State = () => (
  <>
    <Textinput
      state="error"
      hint="Error message"
      size="m"
      theme="default"
      defaultValue="theme default"
    />
  </>
);
