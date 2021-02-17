import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Link } from "./Link.bundle";

export default {
    title: "Controls|Link",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Link.md"),
        },
    },
};

export const Playground = () => {
    const theme = select("theme", ["default", ""], "default");
    const href = text("href", "https://google.com");
    const children = text("children", "Lookingschools");
    return (
        <Link theme={theme} href={href}>
            {children}
        </Link>
    );
};

Playground.story = {
    name: "playground",
};

export const Pseudo = () => {
    return (
        <>
            <Link pseudo>Псевдоссылка без темы</Link>
            <br />
            <Link pseudo theme="pseudo">
                Псевдоссылка с темой pseudo
            </Link>
            <br />
            <Link pseudo href="#">
                Псевдоссылка без темы но с href оформляется иначе.
            </Link>
        </>
    );
};

Pseudo.story = {
    name: "pseudo",
};

export const Theme = () => {
    return (
        <>
            <Link href="#" theme="black">
                Ссылка с темой black
            </Link>
            <br />
            <Link href="#" theme="default">
                Ссылка с темой default
            </Link>
            <br />
            <Link href="#" theme="pseudo">
                Псевдоссылка с темой pseudo
            </Link>
        </>
    );
};

Theme.story = {
    name: "theme",
};
