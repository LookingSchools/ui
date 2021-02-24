import React from "react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { Rect as RectSkeleton, Text as TextSkeleton } from "./Skeleton";

export default {
    title: "Skeleton",
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

export const Rect = () => {
    const width = number("width", 128);
    const height = number("height", 32);
    const borderRadius = number("borderRadius", 8);

    const skeletonColor = text("Skeleton color, ", "rgba(0, 0, 0, .05)");
    const skeletonAnimation = text("Skeleton animation", "skeleton-loading 1.5s ease-in-out infinite");

    const style = `
        .my-rect-skeleton {
            background-color: ${skeletonColor};
            animation:  ${skeletonAnimation};
        }
    `;

    return (
        <>
            <style>{style}</style>
            <RectSkeleton className="my-rect-skeleton" width={width} height={height} borderRadius={borderRadius} />
        </>
    );
};

Rect.story = {
    name: "Rect",
};

export const Text = () => {
    const width = number("width", 128);
    const size = number("height", 16);

    const skeletonColor = text("Skeleton color, ", "rgba(0, 0, 0, .05)");
    const skeletonAnimation = text("Skeleton animation", "skeleton-loading 1.5s ease-in-out infinite");

    const style = `
        .my-text-skeleton {
            background-color: ${skeletonColor};
            animation: ${skeletonAnimation};
        }
    `;

    return (
        <>
            <style>{style}</style>
            <TextSkeleton className="my-text-skeleton" width={width} size={size} />
        </>
    );
};

Text.story = {
    name: "Text",
};
