import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Oops } from "./Oops.bundle";

storiesOf("LookingSchools/Components|Oops", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Oops.md").default
      }
    })
  )
  .add("preview", () => (
    <div>
      <Oops
        title="Что-то пошло не так"
        subtitle="Машины тоже ошибаются, мы их скоро починим"
        button="Обновить"
      />
    </div>
  ));
