import * as React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Amountpicker } from "./Amountpicker";

storiesOf("Takberi/Components|Amountpicker/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Amountpicker.md").default
      }
    })
  )
  .add("default", () => (
    <Amountpicker value={1} className="Card" onChange={action("onChange")} />
  ));
