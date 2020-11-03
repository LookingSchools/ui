import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";
import * as stubData from "./datastub";

import { Cart } from "./Cart.bundle";

function getItems() {
  return stubData.dataDefault.items;
}

storiesOf("LookingSchools/Components|Cart", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Cart.md").default
      }
    })
  )
  .add("preview", () => (
    <div>
      <Cart
        items={getItems()}
        title="Корзина"
        subtitle="Машины тоже ошибаются, мы их скоро починим"
      />
    </div>
  ));
