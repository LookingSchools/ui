import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Rating } from "./Rating.bundle";

export default {
    title: "Controls|Rating",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Rating.md"),
        },
    },
};

export const Type = () => {
    return (
        <>
            <Rating type="extended" size="s" value={2} base={5} hint={"25072 оценки с разных сайтов"} />
            <br />
            <Rating type="extended" size="m" value={3} base={5} hint={"1 оценка с разных сайтов"} />
            <br />
            <Rating type="extended" size="l" value={4.5} base={5} hint={"100500 оценок с разных сайтов"} />
        </>
    );
};

Type.story = {
    name: "Rating_type_extended",
};

export const Size = () => {
    return (
        <>
            {"_size_l: "}
            <>
                <Rating size="l" value={1} base={5} />
                <br />
                <Rating size="l" value={2} base={5} />
                <br />
                <Rating size="l" value={3} base={5} />
                <br />
                <Rating size="l" value={4} base={5} />
                <br />
                <Rating size="l" value={4.5} base={5} />
                <br />
                <Rating size="l" value={5} base={5} />
            </>
            <br />
            {"_size_m: "}
            <>
                <Rating size="m" value={1} base={5} />
                <br />
                <Rating size="m" value={2} base={5} />
                <br />
                <Rating size="m" value={3} base={5} />
                <br />
                <Rating size="m" value={3.5} base={5} />
                <br />
                <Rating size="m" value={4} base={5} />
                <br />
                <Rating size="m" value={5} base={5} />
            </>
            <br />
            {"_size_s: "}
            <>
                <Rating size="s" value={1} base={5} />
                <br />
                <Rating size="s" value={2} base={5} />
                <br />
                <Rating size="s" value={2.5} base={5} />
                <br />
                <Rating size="s" value={3} base={5} />
                <br />
                <Rating size="s" value={4} base={5} />
                <br />
                <Rating size="s" value={5} base={5} />
            </>
        </>
    );
};

Size.story = {
    name: "size",
};
