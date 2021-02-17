import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import * as stubData from "./datastub";
import { DiscountBadge, IDiscountBadgeProps } from "./DiscountBadge.bundle";

export default {
    title: "DiscountBadge",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./DiscountBadge.md"),
        },
    },
};

export const Playground = () => {
    return (
        <>
            <DiscountBadge theme="default" size="m" percent={30} />
            <DiscountBadge theme="default" size="l" percent={10} />
        </>
    );
};

Playground.story = {
    name: "Бейдж скидки",
};

export const Other = () => {
    const { theme, size, percent } = stubData.dataBigBlack as IDiscountBadgeProps;

    return <DiscountBadge theme={theme} size={size} percent={percent} />;
};

Other.story = {
    name: "Пример бейджа из стаба",
};
