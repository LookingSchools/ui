import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Typography } from "./Typography.bundle";

storiesOf("Controls|Typography", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Typography.md").default
      }
    })
  )
  .add("all", () => (
    <div>
      <Typography tag="h1">h1. Typography</Typography>
      <Typography tag="h2">h2. Typography</Typography>
      <Typography tag="h3">h3. Typography</Typography>
      <Typography tag="h4">h4. Typography</Typography>
      <Typography>_size_l or Base. Typography</Typography>
      <Typography size="m">_size_m. Typography</Typography>
      <Typography size="s">_size_s. Typography</Typography>
    </div>
  ));
