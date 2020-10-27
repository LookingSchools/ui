import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";
import { Device } from "../_internal_/Device/Device";

import { Slider } from "./Slider";

storiesOf("Takberi/Components|Slider/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Slider.md").default
      }
    })
  )
  .add("playground", () => {
    const count = number("Count", 5);
    const activeIndex = number("activeIndex", 0);

    const colors = ["red", "green", "black", "yellow", "blue", "orange"];

    return (
      <Device>
        <Slider
          className={"Slider-Storybook"}
          activeIndex={activeIndex}
          onSlideChange={action("onSlideChange")}
        >
          {[...Array(count)].map((_, index) => {
            return (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: colors[index % 6]
                }}
                key={index}
              />
            );
          })}
        </Slider>
      </Device>
    );
  });
