import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import * as stubData from "./datastub";

import { Price } from "./Price.bundle";

export default {
    title: "Price",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Price.md"),
        },
    },
};

export const Playground = () => {
    return <Price price={5000} size="l" />;
};

Playground.story = {
    name: "Просто цена",
};

export const OldPrice = () => {
    return <Price price={5000} oldPrice={5000} size="l" />;
};

OldPrice.story = {
    name: "Цена со скидкой",
};

export const Theme = () => {
    return (
        <div style={{ fontSize: 12 }}>
            <Price price={5000} theme="responsive" />
            <Price price={3000} oldPrice={5000} theme="clear" size="s" />
        </div>
    );
};

Theme.story = {
    name: "Цена с темой",
};

export const Stub = () => {
    const { price, oldPrice } = stubData.salePrice;

    return <Price price={price} oldPrice={oldPrice} />;
};

Stub.story = {
    name: "Пример цены из стаба",
};
