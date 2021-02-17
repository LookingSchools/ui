import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Oops } from "./Oops.bundle";

export default {
    title: "Oops",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Oops.md"),
        },
    },
};

export const Playground = () => {
    return (
        <div>
            <Oops title="Что-то пошло не так" subtitle="Машины тоже ошибаются, мы их скоро починим" button="Обновить" />
        </div>
    );
};

Playground.story = {
    name: "playground",
};
