import React, { useEffect, useState } from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import { Image } from "./Image";
import { Spin } from "../Spin/Spin.bundle";

export default {
    title: "Image",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Image.md"),
        },
    },
};

export const Playground = () => {
    const url = text(
        "url",
        "https://www.malikafavre.com/uploads/project_thumbnails/Bucherer_THUMB2.jpg"
    );
    const alt = text("alt", "Альтернативный текст");
    const width = number("width", 700);
    const height = number("height", 700);
    const borderRadius = number("borderRadius", 0);
    const sizes = text("sizes", "(max-width: 1100px) 300px, 75vw");
    const srcSet = text("srcSet (file)", url + " 1500w");
    const fallback = text("fallback src", "");
    const ariaLabel = text("aria-label", "Image description");

    return (
        <Image
            src={url}
            alt={alt}
            width={width}
            height={height}
            borderRadius={borderRadius}
            srcSet={srcSet}
            sizes={sizes}
            fallbackSrc={fallback}
            ariaLabel={ariaLabel}
        />
    );
};

Playground.story = {
    name: "playground",
};

export const Width = () => {
    return (
        <>
            <p>{"width={300}"}</p>
            <Image src={require("./Image.assets/cat-700.jpeg")} width={300} />
            <p>{"height={150}"}</p>
            <Image src={require("./Image.assets/cat-700.jpeg")} height={150} />
        </>
    );
};

Width.story = {
    name: "width and height",
};

export const Stub = () => {
    return (
        <Image
            src={require("./Image.assets/cat-700.jpeg")}
            height={150}
            stub={<Spin progress theme="primary" size="m" />}
        />
    );
};

Stub.story = {
    name: "Использование со стабом",
};

export const Size = () => {
    return (
        <>
            <p>
                Чтобы увидеть разницу, измените ширину окна браузера во вкладке <strong>Песочница</strong>.
            </p>
            <p>—</p>
            <Image src={require("./Image.assets/cat-700.jpeg")} />
            <br />
            <br />
            <pre>
                {'srcSet="path/to/image-700w.png 700w,\n        path/to/image-540w.png 540w"\n' +
                    'sizes="(max-width: 700px) 100vw, 700px"'}
            </pre>
            <Image
                src={require("./Image.assets/cat-700.jpeg")}
                srcSet={
                    require("./Image.assets/cat-700.jpeg") +
                    " 700w, " +
                    require("./Image.assets/cat-500.jpeg") +
                    " 540w"
                }
                sizes="(max-width: 700px) 100vw, 700px"
            />
        </>
    );
};

Size.story = {
    name: "sizes and srcSet",
};

export const DownloadError = () => {
    const [imageUrl, setImage] = useState("http://not-found-image");
    const stub = (
        <img
            src={require("./Image.assets/2x1@1x.png")}
            style={{ position: "absolute", width: "100%", height: "100%" }}
        />
    );

    useEffect(() => {
        setTimeout(() => setImage(require("./Image.assets/cat-700.jpeg")), 2000);
    }, []);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            <div>
                <p>Ошибка загрузки изображения, подставляем fallback</p>
                <pre>{['src="http://not-found-image"', 'fallback="/img-not-found-fallback.png"'].join("\n")}</pre>
                <Image
                    src="http://not-found-image"
                    fallbackSrc={require("./Image.assets/img-not-found.png")}
                    width={250}
                />
            </div>
            <div>
                <p>Показываем подложку на время загрузки изображения</p>
                <pre>
                    {".stub { position: absolute; width: 100%; height: 100% }\n\n"}
                    {['src="./Image.assets/cat-700.jpeg"', 'stub={<img className="stub" src="loading.png"} />'].join(
                        "\n"
                    )}
                </pre>
                <Image src={imageUrl} stub={stub} width={320} height={160} />
            </div>
        </div>
    );
};

DownloadError.story = {
    name: "Загрузка и ошибка",
};
