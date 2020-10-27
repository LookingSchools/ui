import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Cookie } from "./Cookie.bundle";

storiesOf("Takberi/Components|Cookie", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Cookie.md").default
      }
    })
  )
  .add("preview", () => (
    <div>
      <Cookie
        text="Мы cохраняем файлы cookie: это помогает сайту работать лучше."
        button="Хорошо"
      />
    </div>
  ));
