import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { ColorBox } from "./ColorBox.bundle";

export const Playground = () => {
  const [value1, setValue1] = useState("8A8572");
  const size = select("size", ["m", "s"], "m");
  const theme = select("theme", ["default", "black"], "default");
  const colors = [
    { name: "Дикий кактус", value: "7D9997" },
    { name: "Розовый грейпфрут", value: "F8B19D" },
    { name: "Синяя волна", value: "3B83BD", disabled: true },
    { name: "Сочный гранат", value: "CA466D", disabled: true },
    { name: "Голубой берилл", value: "C2D7C4" },
    { name: "Лесной хакки", value: "8A8572" },
    { name: "Лимонный мусс", value: "F5E29D" },
    { name: "Спелый клементин", value: "E97663" },
    { name: "Сосновый лес", value: "67746A" },
    { name: "Морской лед", value: "63687D" },
    { name: "Бежевый", value: "D7CDC1" },
    { name: "Розовый песок", value: "F2D7CE" },
    { name: "Белый", value: "FAF9F7" },
    { name: "Черный", value: "2E2E2E" }
  ];

  return (
    <div style={{ maxWidth: "326px" }}>
      <ColorBox
        size={size}
        theme={theme}
        value={value1}
        onChange={event => setValue1(event.target.value)}
        colors={colors}
      />
    </div>
  );
};

export const Size = () => {
  const [value1, setValue1] = useState("8A8572");
  const [value2, setValue2] = useState("8A8572");
  const colors = [
    { name: "Дикий кактус", value: "7D9997" },
    { name: "Розовый грейпфрут", value: "F8B19D" },
    { name: "Синяя волна", value: "3B83BD", disabled: true },
    { name: "Сочный гранат", value: "CA466D" },
    { name: "Голубой берилл", value: "C2D7C4" },
    { name: "Лесной хакки", value: "8A8572" },
    { name: "Лимонный мусс", value: "F5E29D" },
    { name: "Спелый клементин", value: "E97663" },
    { name: "Сосновый лес", value: "67746A" },
    { name: "Морской лед", value: "63687D" },
    { name: "Бежевый", value: "D7CDC1" },
    { name: "Розовый песок", value: "F2D7CE" },
    { name: "Белый", value: "FAF9F7" },
    { name: "Черный", value: "2E2E2E" }
  ];

  return (
    <>
      {"_size_m: "}
      <div style={{ maxWidth: "326px" }}>
        <ColorBox
          size="m"
          theme="default"
          value={value1}
          onChange={event => setValue1(event.target.value)}
          colors={colors}
        />
      </div>

      <br />
      {"_size_s: "}
      <div style={{ maxWidth: "326px" }}>
        <ColorBox
          size="s"
          theme="default"
          value={value2}
          onChange={event => setValue2(event.target.value)}
          colors={colors}
        />
      </div>
    </>
  );
};

export const Theme = () => {
  const [value1, setValue1] = useState("7D9997");
  const [value2, setValue2] = useState("8A8572");
  const colors = [
    { name: "Дикий кактус", value: "7D9997" },
    { name: "Розовый грейпфрут", value: "F8B19D" },
    { name: "Синяя волна", value: "3B83BD", disabled: true },
    { name: "Сочный гранат", value: "CA466D" },
    { name: "Голубой берилл", value: "C2D7C4" },
    { name: "Лесной хакки", value: "8A8572" },
    { name: "Лимонный мусс", value: "F5E29D" },
    { name: "Спелый клементин", value: "E97663" },
    { name: "Сосновый лес", value: "67746A" },
    { name: "Морской лед", value: "63687D" },
    { name: "Бежевый", value: "D7CDC1" },
    { name: "Розовый песок", value: "F2D7CE" },
    { name: "Белый", value: "FAF9F7" },
    { name: "Черный", value: "2E2E2E" }
  ];

  return (
    <>
      {"_theme_default: "}
      <div style={{ maxWidth: "326px" }}>
        <ColorBox
          size="m"
          theme="default"
          value={value1}
          onChange={event => setValue1(event.target.value)}
          colors={colors}
        />
      </div>
      {"_theme_black: "}
      <div style={{ maxWidth: "326px" }}>
        <ColorBox
          size="m"
          theme="black"
          value={value2}
          onChange={event => setValue2(event.target.value)}
          colors={colors}
        />
      </div>
    </>
  );
};

storiesOf("LookingSchools/Components|ColorBox", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./ColorBox.md").default
      }
    })
  )
  .add("_playground", () => Playground())
  .add("_size", () => Size())
  .add("_theme", () => Theme());
