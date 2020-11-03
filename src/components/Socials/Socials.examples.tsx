import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Socials } from "./Socials.bundle";

storiesOf("LookingSchools/Components|Socials", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Socials.md").default
      }
    })
  )
  .add("all", () => (
    <div>
      <Socials
        icons={[
          "twitter",
          "facebook",
          "vk",
          "telegram",
          "youtube",
          "github",
          "rss"
        ]}
      />
    </div>
  ));
