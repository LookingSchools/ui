import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Checkbox } from "./Checkbox.bundle";

export const Playground = () => {
  const [checked, setChecked] = useState(false);

  const label = text("label", "Label");
  const size = select("size", ["m", "s"], "m") as any;
  const theme = select("theme", ["default", ""], "default") as any;
  const disabled = boolean("disabled", false);

  return (
    <Checkbox
      theme={theme}
      size={size}
      onChange={() => setChecked(!checked)}
      checked={checked}
      label={label}
      disabled={disabled}
    />
  );
};

export const Theme = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox
        size="m"
        theme="default"
        label="Label"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </>
  );
};

export const Size = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <>
      <Checkbox
        label="Label"
        size="m"
        theme="default"
        onChange={() => setChecked1(!checked1)}
        checked={checked1}
      />
      <Checkbox
        label="Label"
        size="s"
        theme="default"
        onChange={() => setChecked2(!checked2)}
        checked={checked2}
      />
    </>
  );
};

export const Lines = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {"one:"}
      {["s", "m"].map((size: any) => (
        <div key={size} style={{ padding: 4 }}>
          <Checkbox
            label="Однострочный checkbox с длинной подписью"
            theme="default"
            size={size}
            onChange={() => setChecked(!checked)}
            checked={checked}
            lines="one"
          />
        </div>
      ))}
      <br />
      {"multi:"}
      <div style={{ padding: 4 }}>
        {"Чекбоксы\u00a0\u00a0"}
        <Checkbox
          label="выравниваются"
          theme="default"
          size="s"
          onChange={() => setChecked(!checked)}
          checked={checked}
          lines="multi"
        />
        {"\u00a0по базовой\u00a0\u00a0"}
        <Checkbox
          label="линии"
          theme="default"
          size="m"
          onChange={() => setChecked(!checked)}
          checked={checked}
          lines="multi"
        />
        {"."}
      </div>
    </div>
  );
};

storiesOf("Controls|Checkbox", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Checkbox.md").default
      }
    })
  )
  .add("playground", () => Playground())
  .add("theme", () => Theme())
  .add("size", () => Size())
  .add("lines", () => Lines());
