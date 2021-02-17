import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import i18n, { setI18nLang } from "@lookingschools/i18n";
import * as keyset from "./Cookie.i18n";

import { Cookie } from "./Cookie.bundle";

export default {
    title: "Cookie",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Cookie.md"),
        },
    },
};

export const Playground = () => {
    setI18nLang("en");

    const exampleI18N = i18n(keyset);

    return (
        <div>
            <Cookie
                text={exampleI18N("Мы cохраняем файлы cookie: это помогает сайту работать лучше.")}
                button="Хорошо"
            />
        </div>
    );
};

Playground.story = {
    name: "playground",
};
