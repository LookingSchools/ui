import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { Specs } from "./Specs";
import { SpecsItem } from "./Item/Specs-Item";
import * as stubData from "./datastub";

function getText() {
    return stubData.dataDefault.description.short;
}

function getFullText() {
    return stubData.dataDefault.description.full;
}

function getSpecs() {
    return stubData.dataDefault.specs;
}

function getModeKnobs() {
    return select("Режим компонента", ["preview"], "preview");
}

export const Specification = () => {
    return <Specs mode={getModeKnobs()} specs={getSpecs()} />;
};

export const Description = () => {
    return (
        <Specs
            mode={getModeKnobs()}
            description={{
                short: getText(),
                full: getFullText(),
            }}
        />
    );
};

export const SpecsDesc = () => {
    return (
        <Specs
            mode={getModeKnobs()}
            description={{
                short: getText(),
                full: getFullText(),
            }}
            specs={getSpecs()}
        />
    );
};

export const SpecsOneItem = () => {
    return (
        <SpecsItem name={text("Название характеристики", "Тип")} value={text("Значение характеристики", "смартфон")} />
    );
};

export const SpecsGroup = () => {
    return (
        <>
            <SpecsItem name={"Тип"} value={"смартфон"} />
            <SpecsItem name={"Операционная система"} value={"Android 8.1"} />
            <SpecsItem name={"Тип корпуса"} value={"классический"} />
            <SpecsItem name={"Материал корпуса"} value={"пластик"} />
            <SpecsItem name={"Управление"} value={"сенсорные кнопки"} />
        </>
    );
};

export default {
    title: "Controls|Specs",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("./Specs.md"),
        },
    },
};

export const specification = () => Specification();

specification.story = {
    name: "Характеристики",
};

export const description = () => Description();

description.story = {
    name: "Описание",
};

export const desc = () => SpecsDesc();

desc.story = {
    name: "Описание + Характеристики",
};

export const oneItem = () => SpecsOneItem();

oneItem.story = {
    name: "Одна характеристика",
};

export const group = () => SpecsGroup();

group.story = {
    name: "Одна характеристика",
};
