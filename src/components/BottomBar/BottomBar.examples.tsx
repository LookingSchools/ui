import React from "react";
import { action } from "@storybook/addon-actions";
import { color, number, select, withKnobs, array } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { BottomBar } from "./BottomBar";
import { Icon } from "../Icon/Icon.bundle";

export default {
    title: "BottomBar",
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

const imgBuilder = (src: any) => {
    return <Icon glyph={src} size="m" />;
};

export const Playground = () => {
    const icons = array("Images src", ["course", "search", "create-course", "profile", "menu"]);

    const texts = array("Texts", ["Курсы", "Поиск", "Создать школу", "Профиль", "Меню"]);
    const urls = array("URLs", ["https://google.com"]);
    const active = select("Active tab #", [1, 2, 3, 4, 5], 1);
    const tipValue = number("Tip", 2);
    const tipPosition = select("Tip tab #", [1, 2, 3, 4, 5], 1);

    const accentColor = color("Accent color", "#FF0052");
    const textColor = color("Text color", "rgba(0, 0, 0, .5)");
    const tipColor = color("Tip color", "rgba(0, 0, 0, .8)");
    const tipBgColor = color("Tip background color", "#FC0");

    const style = `
        .BottomBar {
            --bottom-bar-color-accent: ${accentColor};
            --bottom-bar-text-color: ${textColor};
            --bottom-bar-tip-color: ${tipColor};
            --bottom-bar-tip-bg-color: ${tipBgColor};

            font-family: 'Helvetica Neue', Arial, sans-serif;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
    `;

    const tabs = texts.filter(Boolean).map((text, index) => {
        const linkComponent: React.FC = ({ children }) => <a href={urls[index]}>{children}</a>;

        return {
            text,
            icon: imgBuilder(icons[index]),

            isActive: active === index + 1,
            linkComponent: urls[index] ? linkComponent : undefined,
            onClick: action(`on ${text} tab click!`),
            tip: tipPosition === index + 1 ? tipValue : undefined,
        };
    });

    return (
        <>
            <style>{style}</style>
            <BottomBar tabs={tabs} />
        </>
    );
};

Playground.story = {
    name: "playground",
};
