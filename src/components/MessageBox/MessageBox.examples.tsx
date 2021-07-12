import React, { useRef, useState } from "react";
import { withKnobs, select, boolean, radios, text } from "@storybook/addon-knobs";
import { Button } from "../Button/Button.bundle";
import { Spin } from "../Spin/Spin.bundle";
import { Progress } from "../Progress";
import { MessageBox, Wrapper, Corner, MessageBoxPopup } from "./desktop/bundle";
import { Direction } from "../Popup/desktop/bundle";

export default {
    title: "MessageBox",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./README.md"),
        },
    },
};

const addonOptions = {
    empty: "",
    text: "text",
    icon: "icon",
};

const backgroundOptions = {
    empty: "",
    image: "image",
    progress: "progress",
};

const backgroundOptionToJsx = {
    empty: "",
    image: (
        <picture>
            <img
                style={{ filter: "opacity(.5)", width: "100%" }}
                src="https://pictures.s3.yandex.net:443/resources/landos_3_1623850714.png"
            />
        </picture>
    ),
    progress: <Progress style={{ height: "100%", backgroundColor: "#2196f3" }} value={0.65} />,
};

export const Playground = () => {
    const children = text("children", "MessageBox-Content");
    const size = select("size", ["s", "m", "l"], "s") as any;
    const opaque = boolean("opaque", false);
    const actionClear = boolean("with clear button", false);
    const action = boolean("with action button", false);
    const hasClose = boolean("has close", false);

    const leadingRadio = radios("leading", addonOptions, null);
    const leading = leadingRadio === "icon" ? <Spin theme="primary" size="s" progress /> : leadingRadio;
    const trailingRadio = radios("trailing", addonOptions, null);
    const trailing = trailingRadio === "icon" ? <Spin theme="primary" size="s" progress /> : trailingRadio;
    const backgroundRadio = radios("background", backgroundOptions, "empty");
    const background = (backgroundOptionToJsx as any)[backgroundRadio];

    const theme = select("theme", ["default", "promo", "inverse"], "default") as any;
    const align = select("align", ["left", "right", "center"], "left");
    let layout = select("layout", ["tooltip", "plain", "functional"], "tooltip");
    if (hasClose && layout === "tooltip") {
        layout = "plain";
    }

    return (
        <div style={{ padding: "50px", backgroundColor: "#000" }}>
            <MessageBox
                theme={theme}
                size={size}
                opaque={opaque}
                layout={layout}
                onClose={(hasClose as any) && (() => null)}
                background={background}
                actions={
                    <>
                        {actionClear && (
                            <Button size={size} theme="clear">
                                Cancel
                            </Button>
                        )}
                        {action && (
                            <Button size={size} theme="primary">
                                Done
                            </Button>
                        )}
                    </>
                }
            >
                <Wrapper leading={leading} trailing={trailing} align={align}>
                    {children}
                </Wrapper>
            </MessageBox>
        </div>
    );
};

Playground.story = {
    name: "playground",
};

export const Buttons = () => (
    <div style={{ padding: "16px" }}>
        <MessageBox
            onClose={() => null}
            theme="default"
            size="m"
            actions={
                <>
                    <Button theme="clear" size="m">
                        Отклонить
                    </Button>
                    <Button theme="primary" size="m">
                        Принять
                    </Button>
                </>
            }
        >
            Новая почта с классными темами теперь для вас!
        </MessageBox>
    </div>
);

Buttons.story = {
    name: "buttons",
};

export const Complex = () => (
    <>
        <div style={{ padding: "16px" }}>
            <MessageBox
                size="l"
                theme="default"
                onClose={() => {}}
                background={
                    <img
                        style={{ filter: "opacity(.5)", width: "100%" }}
                        src="https://pictures.s3.yandex.net:443/resources/landos_3_1623850714.png"
                    />
                }
            >
                <Wrapper>
                    <p>Навык дня</p>
                    <h1>Развивайте речь ребенка</h1>
                    <p>Тренажер для развития речи</p>
                </Wrapper>
            </MessageBox>
        </div>
    </>
);

Complex.story = {
    name: "complex",
};

export const Corners = () => (
    <div style={{ padding: "16px" }}>
        <MessageBox
            theme="default"
            size="l"
            corner={
                <Corner width={42} side="bottom-right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
                        <path
                            fill="#ffd426"
                            stroke="#f6cf2e"
                            d="M17.644 34.455l9.906 13.912 4.949-16.171
                            16.296-4.911-14.02-9.83.167-16.948-13.614
                            10.096L5.135 5.039l5.606 16.07L.567
                            34.62z"
                        />
                    </svg>
                </Corner>
            }
        >
            Письмо содержит неверную или поддельную информацию об отправителе. Также кто-то мог изменить текст письма
            после его отправки.
        </MessageBox>
    </div>
);

Corners.story = {
    name: "corners",
};

export const Layout = () => (
    <>
        <div style={{ padding: "16px" }}>
            <MessageBox
                theme="default"
                size="m"
                layout="plain"
                corner={[
                    <Corner key="corner" width={42} side="top-left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
                            <path
                                fill="#ffd426"
                                stroke="#f6cf2e"
                                d="M17.644 34.455l9.906 13.912 4.949-16.171
                                16.296-4.911-14.02-9.83.167-16.948-13.614
                                10.096L5.135 5.039l5.606 16.07L.567
                                34.62z"
                            />
                        </svg>
                    </Corner>,
                ]}
            >
                Жмите сюда, скорей
            </MessageBox>
        </div>
        <div style={{ padding: "16px" }}>
            <MessageBox theme="default" size="m" layout="tooltip">
                Пометить письмо как важное <i key="i">Shift + l</i>
            </MessageBox>
        </div>
        <div style={{ padding: "16px" }}>
            <MessageBox
                theme="default"
                size="m"
                layout="functional"
                onClose={() => {}}
                actions={
                    <>
                        <Button size="m" theme="clear">
                            Нет
                        </Button>
                        <Button size="m" theme="primary">
                            Да
                        </Button>
                    </>
                }
            >
                Согласны?
            </MessageBox>
        </div>
    </>
);

Layout.story = {
    name: "layout",
};

export const Size = () => (
    <>
        <div style={{ padding: "16px" }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="s"
                actions={
                    <>
                        <Button size="s" theme="primary">
                            Понятно
                        </Button>
                    </>
                }
            >
                Новый раздел с вашими покупками
            </MessageBox>
        </div>
        <div style={{ padding: "16px" }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="m"
                actions={
                    <>
                        <Button size="m" theme="primary">
                            Понятно
                        </Button>
                    </>
                }
            >
                Новая почта <b>squorax@gmail.com</b> привязана к вашему аккаунту
            </MessageBox>
        </div>
        <div style={{ padding: "16px" }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="l"
                actions={
                    <>
                        <Button size="l" theme="primary">
                            Подробнее
                        </Button>
                    </>
                }
            >
                Письмо содержит неверную или поддельную информацию об отправителе. Также кто-то мог изменить текст
                письма после его отправки.
            </MessageBox>
        </div>
    </>
);

Size.story = {
    name: "size",
};

export const Theme = () => (
    <>
        <div style={{ backgroundColor: "#fff", padding: "16px" }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="m"
                actions={
                    <>
                        <Button theme="clear" size="s">
                            Отклонить
                        </Button>
                        <Button theme="primary" size="s">
                            Принять
                        </Button>
                    </>
                }
            >
                Новая почта с классными темами теперь для вас!
            </MessageBox>
        </div>
        <div style={{ backgroundColor: "#000", padding: "16px" }}>
            <MessageBox
                onClose={() => null}
                theme="inverse"
                size="m"
                actions={
                    <>
                        <Button theme="clear" size="s">
                            Отклонить
                        </Button>
                        <Button theme="primary" size="s">
                            Принять
                        </Button>
                    </>
                }
            >
                Новая почта с классными темами теперь для вас!
            </MessageBox>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "16px" }}>
            <MessageBox
                onClose={() => null}
                theme="promo"
                size="m"
                actions={
                    <>
                        <Button theme="primary" size="s">
                            Подробнее
                        </Button>
                    </>
                }
            >
                Сохраняйте картинки, полезные ссылки, фотографии красивых мест и многое другое в коллекции
            </MessageBox>
        </div>
    </>
);

Theme.story = {
    name: "theme",
};

export const Text = () => (
    <>
        <MessageBox theme="default" size="s" layout="tooltip">
            Пометить письмо как важное <i key="i">Shift + l</i>
        </MessageBox>
        <br />
        <br />
        <MessageBox theme="default" size="m" layout="tooltip">
            Письмо содержит неверную или поддельную информацию об отправителе.
            <br />
            Также кто-то мог изменить текст письма после его отправки.
        </MessageBox>
        <br />
        <br />
        <MessageBox theme="default" size="l" layout="tooltip">
            Письмо содержит неверную или поддельную информацию об отправителе.
            <br />
            Также кто-то мог изменить текст письма после его отправки.
            <br key="br1" />
            <br key="br2" />
            <b key="b1">Подпись</b> отсутствует
            <br key="br3" />
            <b key="b2">Шифрования</b> нет
            <br key="br4" />
            <b key="b3">Сборщик</b> нет
        </MessageBox>
    </>
);

Text.story = {
    name: "text",
};

const DIRECTIONS: Direction[] = ["top", "right", "bottom", "left"];

export const WithPopup = () => {
    const anchorRef = useRef<HTMLDivElement>(null);

    const [isTopCenterVisible, setIsTopCenterVisible] = useState(true);
    const [isRightCenterVisible, setIsRightCenterVisible] = useState(true);
    const [isBottomCenterVisible, setIsBottomCenterVisible] = useState(true);
    const [isLeftCenterVisible, setIsLeftCenterVisible] = useState(true);

    const isVisibleArr = [isTopCenterVisible, isRightCenterVisible, isBottomCenterVisible, isLeftCenterVisible];

    const showTopCenterPopup = React.useCallback(() => setIsTopCenterVisible(true), [setIsTopCenterVisible]);
    const hideTopCenterPopup = React.useCallback(() => setIsTopCenterVisible(false), [setIsTopCenterVisible]);

    const showRightCenterPopup = React.useCallback(() => setIsRightCenterVisible(true), [setIsRightCenterVisible]);
    const hideRightCenterPopup = React.useCallback(() => setIsRightCenterVisible(false), [setIsRightCenterVisible]);

    const showBottomCenterPopup = React.useCallback(() => setIsBottomCenterVisible(true), [setIsBottomCenterVisible]);
    const hideBottomCenterPopup = React.useCallback(() => setIsBottomCenterVisible(false), [setIsBottomCenterVisible]);

    const showLeftCenterPopup = React.useCallback(() => setIsLeftCenterVisible(true), [setIsLeftCenterVisible]);
    const hideLeftCenterPopup = React.useCallback(() => setIsLeftCenterVisible(false), [setIsLeftCenterVisible]);

    const showAllPopups = React.useCallback(() => {
        showTopCenterPopup();
        showRightCenterPopup();
        showBottomCenterPopup();
        showLeftCenterPopup();
    }, [showTopCenterPopup, showRightCenterPopup, showBottomCenterPopup, showLeftCenterPopup]);

    const hidePopupArr = [hideTopCenterPopup, hideRightCenterPopup, hideBottomCenterPopup, hideLeftCenterPopup];

    return (
        <div style={{ margin: 64, display: "flex", justifyContent: "center" }}>
            <div
                style={{
                    background: "#e6e6e6",
                    height: 60,
                    width: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 3,
                }}
                ref={anchorRef}
                onClick={showAllPopups}
            >
                Anchor
            </div>
            {DIRECTIONS.map((direction, index) => (
                <MessageBoxPopup
                    key={index}
                    visible={isVisibleArr[index]}
                    hasTail
                    direction={direction}
                    anchor={anchorRef}
                    theme="default"
                    size="s"
                    onClose={hidePopupArr[index]}
                >
                    {direction}
                </MessageBoxPopup>
            ))}
        </div>
    );
};
