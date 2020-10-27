import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, select } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Separator, Thickness, Width } from "./Separator";

storiesOf("Takberi/Components|Separator", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Separator.md").default
      }
    })
  )
  .add("playground", () => {
    return (
      <Separator
        thickness={select(
          "Толщина",
          [Thickness.Thick, Thickness.Thin],
          Thickness.Thick
        )}
        width={select(
          "Ширина",
          [Width.Short, Width.Middle, Width.Long],
          Width.Middle
        )}
        color={color("Цвет разделителя", "#f55")}
      />
    );
  });
