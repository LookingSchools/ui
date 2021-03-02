import React, { useRef, useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Modal } from "./Modal.bundle";
import { Button } from "../Button/Button.bundle";

export default {
    title: "Modal",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Modal.md"),
        },
    },
};

export const Playground = () => {
    const scopeRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    return (
        <div ref={scopeRef} style={{ height: 72 }}>
            <Button theme="default" size="m" onClick={() => setVisible(true)}>
                Открыть
            </Button>
            <Modal theme="default" scope={scopeRef} visible={visible} onClose={() => setVisible(false)}>
                <div style={{ padding: 16, fontFamily: "Roboto", width: 400 }}>
                    <div style={{ marginBottom: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button theme="clear" size="m" onClick={() => setVisible(false)}>
                            Отменить
                        </Button>
                        <Button theme="default" size="m" onClick={() => setVisible(false)}>
                            Хорошо
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Theme = () => {
    const scopeRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scopeRef}>
            <Modal visible theme="default" scope={scopeRef}>
                Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
            </Modal>
        </div>
    );
};

Theme.story = {
    name: "theme",
};
