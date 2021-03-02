import React, { useState, useCallback, useRef } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { usePreventScroll } from ".";
import { Button } from "../Button/Button.bundle";

export default {
    title: "usePreventScrolle",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

const styles = `
    .scrollable {
        overflow: auto;
        height: 200px;
        border: 1px solid #e5e5e5;
        padding: 12px;
        border-radius: 4px;
        margin-top: 16px;
    }

    .skeleton {
        height: 20px;
        border-radius: 1px;
        background-color: rgb(240, 240, 240);
    }

    .skeleton + .skeleton {
        margin-top: 8px;
    }
`;

export const Playground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);
    const toggle = useCallback(() => setEnabled((v) => !v), []);

    usePreventScroll({ enabled, containerRef });

    const content = [];
    for (let i = 0; i <= 50; i++) {
        content.push(<div key={i} className="skeleton" />);
    }

    return (
        <>
            <style>{styles}</style>
            <Button theme="default" size="m" onClick={toggle}>
                {enabled ? "Разблокировать scroll" : "Заблокировать scroll"}
            </Button>
            <div ref={containerRef} className="scrollable">
                {content}
            </div>
        </>
    );
};

Playground.story = {
    name: "playground",
};
