import React from "react";
import { withKnobs, array, boolean, number, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { List, ListItem, SeparatorMode, ListSkeleton } from "./List";

export default {
    title: "List",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: "iphone6",
        },
    },
};

export const Playground = () => {
    const contents = array("Item contents", [
        "Первый пункт",
        "Второй пункт",
        "Третий пункт",
        "Четвертый пункт",
        "Пятый пункт",
    ]).filter(Boolean);
    const icon = text("Icon", "+");
    const hasLink = boolean("Has link", true);
    const hasArrow = boolean("Has arrow", false);
    const end = text("End text", "");
    const separatorMode = select(
        "Separator mode",
        {
            full: SeparatorMode.full,
            content: SeparatorMode.content,
            none: SeparatorMode.none,
        },
        SeparatorMode.none
    );
    const hasCustomSeparator = boolean("Has custom separator", false);

    const Link: React.FC = ({ children }) => {
        return (
            <a href="https://yandex.ru" target="_blank">
                {children}
            </a>
        );
    };

    const separator = <hr />;

    return (
        <List>
            {contents.map((content: string, index: number) => (
                <ListItem
                    key={index}
                    icon={icon}
                    hasArrow={hasArrow}
                    linkComponent={hasLink ? Link : undefined}
                    end={end}
                    separatorMode={separatorMode}
                    separator={hasCustomSeparator ? separator : undefined}
                    onClick={action("onClick")}
                >
                    {content}
                </ListItem>
            ))}
        </List>
    );
};

Playground.story = {
    name: "playground",
};

export const Skeleton = () => {
    const count = number("Count", 5);

    return <ListSkeleton count={count} />;
};

Skeleton.story = {
    name: "skeleton",
};
