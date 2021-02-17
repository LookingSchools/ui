import React from "react";
import { compose, composeU } from "@bem-react/core";
import { withKnobs } from "@storybook/addon-knobs";

import { Cut as CutBase } from "./Cut";

// _size
import { withSizeL } from "./_size/Cut_size_l";
import { withSizeM } from "./_size/Cut_size_m";
import { withSizeS } from "./_size/Cut_size_s";

const Cut = compose(composeU(withSizeL, withSizeM, withSizeS))(CutBase);

const line = 2;
const lineHeight = 18;
const style = { width: 100 };
const text = "Очень длинный текст текст текст текст текст";
const shortText = "Короткий";

// eslint-disable-next-line max-len
const visible = "Отец мой Андрей Петрович Гринев в молодости своей служил";
// eslint-disable-next-line max-len
const invisible =
    " при графе Минихе и вышел в отставку премьер-майором в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Авдотье Васильевне Ю., дочери бедного тамошнего дворянина. Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве.";
const afterContentStyle = {
    color: "#f00",
    display: "block",
    cursor: "pointer",
};
const afterContentText = "Капитанская дочка";
const afterContent = <div style={afterContentStyle}>{afterContentText}</div>;

export default {
    title: "Controls|Cut",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Cut.md"),
        },
    },
};

export const Playground = () => {
    return (
        <div style={style}>
            <Cut lines={line} lineHeight={lineHeight}>
                {text}
            </Cut>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Default = () => {
    return (
        <div style={style}>
            <Cut>{`${text} ${text}`}</Cut>
        </div>
    );
};

Default.story = {
    name: "default",
};

export const Size = () => {
    return (
        <div style={style}>
            <Cut size="l">{`${text} ${text}`}</Cut>
            <Cut size="m">{`${text} ${text}`}</Cut>
            <Cut size="s">{`${text} ${text}`}</Cut>
        </div>
    );
};

Size.story = {
    name: "size",
};

export const OneLine = () => {
    return (
        <div style={style}>
            <Cut lines={1} lineHeight={lineHeight}>
                {text}
            </Cut>
        </div>
    );
};

OneLine.story = {
    name: "oneLine",
};

export const BreakWords = () => {
    return (
        <div style={style}>
            <Cut lines={line} lineHeight={lineHeight} breakWords>
                {text}
            </Cut>
        </div>
    );
};

BreakWords.story = {
    name: "breakWords",
};

export const NoEllipsis = () => {
    return (
        <div style={style}>
            <Cut lines={line} lineHeight={lineHeight} noEllipsis>
                {text}
            </Cut>
        </div>
    );
};

NoEllipsis.story = {
    name: "noEllipsis",
};

export const More = () => {
    return (
        <div style={{ width: 300 }}>
            <Cut visible={visible} invisible={invisible} />
        </div>
    );
};

More.story = {
    name: "more",
};

export const Hide = () => {
    return (
        <div style={{ width: 300 }}>
            <Cut hide="Скрыть" visible={visible} invisible={invisible} />
        </div>
    );
};

Hide.story = {
    name: "hide",
};

export const FixedHeight = () => {
    return (
        <div style={{ ...style, backgroundColor: "#eee" }}>
            <Cut lines={line} lineHeight={lineHeight} fixedHeight>
                {shortText}
            </Cut>
        </div>
    );
};

FixedHeight.story = {
    name: "fixedHeight",
};

export const AfterContent = () => {
    return (
        <div style={{ width: 300 }}>
            <Cut visible={visible} invisible={invisible} afterContent={afterContent} />
        </div>
    );
};

AfterContent.story = {
    name: "afterContent",
};
