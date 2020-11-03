import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";
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
        full: getFullText()
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
        full: getFullText()
      }}
      specs={getSpecs()}
    />
  );
};

export const SpecsOneItem = () => {
  return (
    <SpecsItem
      name={text("Название характеристики", "Тип")}
      value={text("Значение характеристики", "смартфон")}
    />
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

storiesOf("LookingSchools/Components|Specs", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Specs.md").default
      }
    })
  )
  .add("Характеристики", () => Specification())
  .add("Описание", () => Description())
  .add("Описание + Характеристики", () => SpecsDesc())
  .add("Одна характеристика", () => SpecsOneItem())
  .add("Блок характеристик", () => SpecsGroup());
