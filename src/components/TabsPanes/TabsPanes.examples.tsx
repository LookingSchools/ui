import React, { createElement, useState } from "react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { TabsMenu } from "../TabsMenu/TabsMenu.bundle";
import { Radiobox } from "../Radiobox/Radiobox.bundle";
import { TabsPanes } from "./TabsPanes";

export default {
    title: "Controls|TabsPanes",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./TabsPanes.md"),
        },
    },
};

export const Playground = () => {
    const activeTab = text("activeTab", "search");
    const panes = object("panes", [
        { id: "search", content: "Поиск content" },
        { id: "images", content: "Картинки content" },
        { id: "video", content: "Видео content" },
    ]);
    return <TabsPanes activePane={activeTab} panes={panes} />;
};

Playground.story = {
    name: "playground",
};

export const tabsMenu = () => {
    return createElement(() => {
        const [activeTab, setActiveTab] = useState("search");

        return (
            <>
                <TabsMenu
                    theme="default"
                    layout="horiz"
                    size="m"
                    activeTab={activeTab}
                    tabs={[
                        {
                            id: "search",
                            onClick: () => setActiveTab("search"),
                            content: "Поиск",
                        },
                        {
                            id: "images",
                            onClick: () => setActiveTab("images"),
                            content: "Картинки",
                        },
                        {
                            id: "video",
                            onClick: () => setActiveTab("video"),
                            content: "Видео",
                        },
                    ]}
                />
                <TabsPanes
                    activePane={activeTab}
                    panes={[
                        { id: "search", content: "Поиск content" },
                        { id: "images", content: "Картинки content" },
                        { id: "video", content: "Видео content" },
                    ]}
                />
            </>
        );
    });
};

tabsMenu.story = {
    name: "TabsMenu",
};

export const radiobox = () => {
    return createElement(() => {
        const [activeTab, setActiveTab] = useState("search");
        const options = [
            { label: "Поиск", value: "search" },
            { label: "Картинки", value: "images" },
            { label: "Видео", value: "video" },
        ];

        return (
            <>
                <Radiobox
                    key="radiobox"
                    size="m"
                    theme="default"
                    value={activeTab}
                    onChange={(event) => setActiveTab(event.target.value)}
                    options={options}
                />
                <TabsPanes
                    key="tabspanes"
                    activePane={activeTab}
                    panes={[
                        { id: "search", content: "Поиск content" },
                        { id: "images", content: "Картинки content" },
                        { id: "video", content: "Видео content" },
                    ]}
                />
            </>
        );
    });
};

radiobox.story = {
    name: "Radiobox",
};
