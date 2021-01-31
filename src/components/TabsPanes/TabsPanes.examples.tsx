import React, { createElement, useState } from "react";
import { storiesOf } from "@storybook/react";
import { compose } from "@bem-react/core";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { TabsMenu as TabsMenuBase } from "../TabsMenu/TabsMenu";
import { withLayoutHoriz } from "../TabsMenu/_layout/TabsMenu_layout_horiz";
import { withThemeDefault as withTabsMenuThemeDefault } from "../TabsMenu/_theme/TabsMenu_theme_default";
import { withSizeM as withTabsMenuSizeM } from "../TabsMenu/_size/TabsMenu_size_m";

import { Radiobox as RadioboxBase } from "../Radiobox/Radiobox";
import { withSizeM as withRadioboxSizeM } from "../Radiobox/_size/Radiobox_size_m";
import { withThemeDefault } from "../Radiobox/_theme/Radiobox_theme_default";

import { TabsPanes } from "./TabsPanes";

const TabsMenu = compose(
  withLayoutHoriz,
  withTabsMenuThemeDefault,
  withTabsMenuSizeM
)(TabsMenuBase);

const Radiobox = compose(withRadioboxSizeM, withThemeDefault)(RadioboxBase);

storiesOf("Controls|TabsPanes/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./TabsPanes.md").default
      }
    })
  )
  .add("playground", () => {
    const activeTab = text("activeTab", "search");
    const panes = object("panes", [
      { id: "search", content: "Поиск content" },
      { id: "images", content: "Картинки content" },
      { id: "video", content: "Видео content" }
    ]);
    return <TabsPanes activePane={activeTab} panes={panes} />;
  });

storiesOf("Controls|TabsPanes", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./TabsPanes.md").default
      }
    })
  )
  .add("TabsMenu", () =>
    createElement(() => {
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
                content: "Поиск"
              },
              {
                id: "images",
                onClick: () => setActiveTab("images"),
                content: "Картинки"
              },
              {
                id: "video",
                onClick: () => setActiveTab("video"),
                content: "Видео"
              }
            ]}
          />
          <TabsPanes
            activePane={activeTab}
            panes={[
              { id: "search", content: "Поиск content" },
              { id: "images", content: "Картинки content" },
              { id: "video", content: "Видео content" }
            ]}
          />
        </>
      );
    })
  )
  .add("Radiobox", () =>
    createElement(() => {
      const [activeTab, setActiveTab] = useState("search");
      const options = [
        { label: "Поиск", value: "search" },
        { label: "Картинки", value: "images" },
        { label: "Видео", value: "video" }
      ];

      return (
        <>
          <Radiobox
            key="radiobox"
            size="m"
            theme="default"
            value={activeTab}
            onChange={event => setActiveTab(event.target.value)}
            options={options}
          />
          <TabsPanes
            key="tabspanes"
            activePane={activeTab}
            panes={[
              { id: "search", content: "Поиск content" },
              { id: "images", content: "Картинки content" },
              { id: "video", content: "Видео content" }
            ]}
          />
        </>
      );
    })
  );
