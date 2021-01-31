import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Spin } from "./Spin.bundle";

storiesOf("Controls|Spin/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Spin.md").default
      }
    })
  )
  .add("playground", () => {
    const theme = select("theme", ["primary"], "primary");
    const size = select("size", ["l", "m", "s", "xs", "xxs"], "m");
    const position = select("position", ["", "center"], "");
    const progress = boolean("progress", true);

    return (
      <div>
        <Spin
          theme={theme}
          progress={progress}
          position={position}
          size={size}
        />
      </div>
    );
  });

storiesOf("Controls|Spin/", module)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Spin.md").default
      }
    })
  )

  .add("_position", () => (
    <div style={{ position: "relative", height: 38 }}>
      <Spin progress position="center" theme="primary" size="l" />
    </div>
  ))
  .add("_size", () => (
    <>
      <Spin progress theme="primary" size="l" />
      <Spin progress theme="primary" size="m" />
      <Spin progress theme="primary" size="s" />
      <Spin progress theme="primary" size="xs" />
      <Spin progress theme="primary" size="xxs" />
    </>
  ))
  .add("_theme", () => <Spin progress theme="primary" size="m" />);
