import React, { useState, useRef } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "../Button/Button.bundle";
import { Popup } from "../Popup/Popup.bundle";
import { Modal } from "../Modal/Modal.bundle";
import { MessageBoxPopup } from "../MessageBox/MessageBox.bundle";
import { TooltipStateful } from "../Tooltip/desktop/bundle";
import { Select } from "../Select/Select.bundle/desktop";

export default {
    title: "LayerManager",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

export const ComplexPopup = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const buttonRef1 = useRef<HTMLDivElement>(null);
    const buttonRef2 = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={rootRef} style={{ position: "relative", height: "200px" }}>
            <Button innerRef={buttonRef1} theme="default" size="m" onClick={() => setVisible1(!visible1)}>
                Открыть
            </Button>
            <Popup
                visible={visible1}
                scope={rootRef}
                anchor={buttonRef1}
                onClose={() => setVisible1(false)}
                target="anchor"
                theme="default"
                hasTail
            >
                <div style={{ padding: 16, fontFamily: "Roboto" }}>
                    content-1
                    <Button innerRef={buttonRef2} theme="default" size="m" onClick={() => setVisible2(!visible2)}>
                        Открыть
                    </Button>
                </div>
                <Popup
                    visible={visible2}
                    scope={rootRef}
                    anchor={buttonRef2}
                    onClose={() => setVisible2(false)}
                    target="anchor"
                    theme="default"
                    hasTail
                >
                    <div style={{ padding: 16, fontFamily: "Roboto" }}>content-2</div>
                </Popup>
            </Popup>
        </div>
    );
};

ComplexPopup.story = {
    name: "complex-popup",
};

export const ComplexModal = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const [value1, setValue1] = useState("");

    const buttonRef1 = useRef<HTMLDivElement>(null);
    const buttonRef2 = useRef<HTMLDivElement>(null);
    const buttonRef3 = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={rootRef} style={{ position: "relative", height: "500px" }}>
            <Button innerRef={buttonRef1} theme="default" size="m" onClick={() => setVisible1(!visible1)}>
                Открыть
            </Button>
            <Modal theme="default" visible={visible1} onClose={() => setVisible1(false)} scope={rootRef}>
                <div style={{ padding: 16, fontFamily: "Roboto", width: 400 }}>
                    <div style={{ marginBottom: 16 }}>
                        Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                        <div>
                            <Select
                                size="m"
                                theme="default"
                                value={value1}
                                onChange={(event) => setValue1(event.target.value)}
                                options={[
                                    { value: "a", content: "Каждый" },
                                    { value: "b", content: "Охотник" },
                                    { value: "c", content: "Желает" },
                                    { value: "d", content: "Знать" },
                                    { value: "e", content: "Где", disabled: true },
                                    { value: "f", content: "Сидит" },
                                    { value: "g", content: "Фазан" },
                                ]}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button theme="default" size="m" innerRef={buttonRef3} onClick={() => setVisible3(!visible3)}>
                            Открыть MessageBox
                        </Button>
                        <MessageBoxPopup
                            scope={rootRef}
                            onClose={() => setVisible3(false)}
                            visible={visible3}
                            hasTail
                            anchor={buttonRef3}
                            direction="bottom"
                            theme="default"
                            size="m"
                        >
                            Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.
                        </MessageBoxPopup>

                        <Button theme="default" size="m" innerRef={buttonRef2} onClick={() => setVisible2(!visible2)}>
                            Открыть Popup
                        </Button>
                        <Popup
                            scope={rootRef}
                            hasTail
                            visible={visible2}
                            anchor={buttonRef2}
                            onClose={() => setVisible2(false)}
                            target="anchor"
                            theme="default"
                        >
                            <div style={{ padding: 16, fontFamily: "Roboto" }}>
                                <TooltipStateful
                                    hasTail
                                    theme="default"
                                    size="m"
                                    content="Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом."
                                    trigger="click"
                                    scope={rootRef}
                                >
                                    <Button theme="default" size="m">
                                        Открыть Tooltip
                                    </Button>
                                </TooltipStateful>
                            </div>
                        </Popup>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

ComplexModal.story = {
    name: "complex-modal",
};
