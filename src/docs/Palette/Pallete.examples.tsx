import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Typography } from "../../components/Typography/Typography.bundle";
import { Cut } from "../../components/Cut/Cut.bundle";
import { paletteGroup } from "./Pallete";

const styleContainer = {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
};

const styleDiv = {
    width: "100px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",

    margin: "5px",
};

const renderPallete = (pallete: object, i: number) => {
    return (
        <div key={i}>
            <Typography tag="h2">{pallete.title}</Typography>
            <div style={styleContainer}>
                {pallete.content.map((obj: object, i: number) => {
                    const colorStyle = {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: obj.color,
                        color: obj.text,
                        width: "100px",
                        height: "100px",
                    };

                    return (
                        <div style={styleDiv} key={i}>
                            <div style={colorStyle}>
                                <span>{obj.color}</span>
                            </div>
                            <Cut lines={2} lineHeight="16px" size="s">
                                {obj.caption}
                            </Cut>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default {
    title: "Pallete",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Pallete.md"),
        },
    },
};

export const Playground = () => {

    return paletteGroup.map((group, i) => renderPallete(group, i));
};

Playground.story = {
    name: "playground",
};