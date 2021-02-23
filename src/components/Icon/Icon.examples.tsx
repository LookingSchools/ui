import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Icon } from "./Icon.bundle";

const allIcons = [
    "cart",
    "location",
    "favorite",
    "bookmark",
    "bell",
    "menu",
    "profile",
    "plus",
    "minus",
    "search",
    "x-sign",
    "close",
    "cross",
    "sort",
    "info",
    "tick",
    "check",
    "arrow-left",
    "arrow-right",
    "arrow-back",
    "arrow-forward",
    "arrow-bottom",
    "carets-v",
    "calendar",
    "type-arrow",
    "trash",
    "course",
    "school",
    "share",
    "comment",
    "create-course",
];

const allSocialIcons = ["youtube", "vk", "telegram", "twitter", "rss", "github", "facebook", "instagram"];

const styleContainer = {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
};

const styleIcon = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
    margin: "5px",
    color: "rgba(38, 49, 129, 0.50)",
};

function renderIcons(icons) {
    return (
        <div style={styleContainer}>
            {Object.values(icons).map((icon, i) => {
                return (
                    <div key={i} style={styleIcon}>
                        <Icon glyph={icon} size="m" />
                        <span style={{ marginTop: "10px" }}>{icon}</span>
                    </div>
                );
            })}
        </div>
    );
}

function renderSocialIcons(icons) {
    return (
        <div style={styleContainer}>
            {Object.values(icons).map((icon, i) => {
                return (
                    <div key={i} style={styleIcon}>
                        <Icon social={icon} size="m" />
                        <span style={{ marginTop: "10px" }}>{icon}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default {
    title: "Icon",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Icon.md"),
        },
    },
};

export const Common = () => renderIcons(allIcons);

Common.story = {
    name: "common",
};

export const Social = () => renderSocialIcons(allSocialIcons);

Social.story = {
    name: "social",
};
