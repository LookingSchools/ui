import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";
import * as stubData from "./datastub";

import { Price } from "./Price.bundle";

storiesOf("Controls|Price", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Price.md").default
      }
    })
  )
  .add("Цена", () => {
    return <Price price={5000} size="l" />;
  })
  .add("Цена со скидкой", () => {
    return <Price price={5000} oldPrice={5000} size="l" />;
  })
  .add("Цена с темой", () => {
    return (
      <div style={{ fontSize: 12 }}>
        <Price price={5000} theme="responsive" />
        <Price price={3000} oldPrice={5000} theme="clear" size="s"/>
      </div>
    );
  })
  .add("Пример цены из стаба", () => {
    const { price, oldPrice } = stubData.salePrice;

    return <Price price={price} oldPrice={oldPrice} />;
  });
