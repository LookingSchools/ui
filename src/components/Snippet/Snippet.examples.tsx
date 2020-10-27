import React, { ReactChild } from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "@storybook-addons/docs";
import {
  withKnobs,
  boolean,
  number,
  select,
  object
} from "@storybook/addon-knobs";
import { Snippet } from "./Snippet";

const image = {
  src:
    "//avatars.mds.yandex.net/get-mpic/1382936/img_id3557252912121609779.png/5hq",
  srcSet:
    "//avatars.mds.yandex.net/get-mpic/1382936/img_id3557252912121609779.png/9hq 2.5x"
};

const Container = ({
  width,
  children
}: {
  width: number;
  children: ReactChild;
}) => (
  <div
    style={{
      width,
      padding: "20px",
      display: "flex",
      justifyContent: "center"
    }}
  >
    {children}
  </div>
);

storiesOf("Takberi/Components|Snippet/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Snippet.md").default
      }
    })
  )
  .addDecorator((story: () => {}) => (
    <div style={{ margin: "20px", display: "flex", flexWrap: "wrap" }}>
      {story()}
    </div>
  ))
  .add("Настраиваемый сниппет", () => {
    const suite = select("Сьют", ["small", "medium"], "small") as any;
    const theme = select("Тема", ["cinco", "siete"], "cinco") as any;
    const price = number("Цена", 7000, {
      min: 0,
      max: 150000,
      range: true,
      step: 1
    }) as any;
    const oldPrice = number("Старая цена", 9000, {
      min: 0,
      max: 150000,
      range: true,
      step: 1
    }) as any;
    const discountBadgeTheme = select(
      "Тема бэйджа",
      ["default", "black"],
      "default"
    ) as any;
    const discountPercent = number("Скидка", 20, {
      min: 0,
      max: 100,
      range: true,
      step: 1
    }) as any;
    const opinions = number("Кол-во отзывов", 20) as any;
    const rating = number("Рейтинг", 3) as any;

    const maxTitleLines = select(
      "Максимальное кол-во строк в названии",
      [1, 2, 3],
      3
    ) as any;
    const maxWidth = number("Максимальная ширина сниппета", 200, {
      range: true,
      min: 150,
      max: 400,
      step: 10
    }) as any;
    const cartButton = object('Кнопка "В корзину"', {
      url: "https://yandex.ru"
    });

    return (
      <Container width={200}>
        <Snippet
          url={"https://google.com"}
          suite={suite}
          theme={theme}
          title={"Мультимедиа-платформа Яндекс.Станция, фиолетовая"}
          price={price}
          oldPrice={oldPrice}
          discountBadgeTheme={discountBadgeTheme}
          orders={["price", "rating", "title"]}
          picture={image}
          discountPercent={discountPercent}
          opinions={opinions}
          rating={rating}
          showDiscountBadge={true}
          showPrice={true}
          showRating={true}
          showTitle={true}
          maxTitleLines={maxTitleLines}
          maxWidth={maxWidth}
          addToCartButton={cartButton}
        />
      </Container>
    );
  })
  .add("Пример сетки", () => {
    const groupId = "Snippet-2";

    const Snippet2 = () => (
      <Container width={getContainerWidth(groupId)}>
        <Snippet
          suite={getSuiteKnobs(groupId)}
          theme={getThemeKnobs(groupId)}
          title={"Мультимедиа-платформа Яндекс.Станция, фиолетовая"}
          price={getPriceKnobs(groupId)}
          oldPrice={getOldPriceKnobs(groupId)}
          discountBadgeTheme={getBadgeThemeKnobs(groupId)}
          orders={["price", "rating", "title"]}
          picture={image}
          discountPercent={getPercentKnobs(groupId)}
          opinions={getOpinionsKnobs(groupId)}
          rating={getRangeKnobs(groupId)}
          showDiscountBadge={getShowDiscount(groupId)}
          showPrice={getShowPrice(groupId)}
          showRating={getShowRating(groupId)}
          showTitle={getShowTitle(groupId)}
          maxWidth={getMaxWidth(groupId)}
        />
      </Container>
    );

    return (
      <>
        {Array.from({ length: getCountKnobs(groupId) }).map((_, i) => (
          <Snippet2 key={i} />
        ))}
      </>
    );
  });

const getCountKnobs = (id: string) => {
  return number(
    "Кол-во сниппетов",
    12,
    { min: 1, max: 30, range: true, step: 1 },
    id
  );
};

const getDefaultContainerWidth = (id: string) =>
  ({
    cinco: 200,
    siete: 400
  }[getThemeKnobs(id)]);

const getContainerWidth = (id: string) => {
  return number(
    "Контейнер",
    getDefaultContainerWidth(id),
    { min: 180, max: 900, range: true, step: 20 },
    id
  );
};

function getPriceKnobs(id: string) {
  return number(
    "Цена",
    7000,
    { min: 0, max: 150000, range: true, step: 1 },
    id
  );
}

function getOldPriceKnobs(id: string) {
  return number(
    "Старая цена",
    9000,
    { min: 0, max: 150000, range: true, step: 1 },
    id
  );
}

function getThemeKnobs(id: string) {
  return select("Тема", ["cinco", "siete"], "cinco", id);
}

function getBadgeThemeKnobs(id: string) {
  return select("Тема бэйджа", ["default", "black"], "default", id);
}

function getSuiteKnobs(id: string) {
  return select("Сьют", ["small", "medium"], "small", id);
}

function getPercentKnobs(id: string) {
  return number("Скидка", 20, { min: 0, max: 100, range: true, step: 1 }, id);
}

function getOpinionsKnobs(id: string) {
  return number(
    "Кол-во отзывов",
    20,
    { min: 1, max: 1000, range: true, step: 1 },
    id
  );
}

function getRangeKnobs(id: string) {
  return number("Рейтинг", 3, { range: true, min: 0, max: 5, step: 0.1 }, id);
}

function getShowDiscount(id: string) {
  return boolean("Показывать бэйдж", true, id);
}

function getShowPrice(id: string) {
  return boolean("Показывать цену", true, id);
}

function getShowRating(id: string) {
  return boolean("Показывать рейтинг", true, id);
}

function getShowTitle(id: string) {
  return boolean("Показывать название", true, id);
}

function getMaxTitleLines(id: string) {
  return select("Максимальное кол-во строк в названии", [1, 2, 3], 3, id);
}

function getMaxWidth(id: string) {
  return number(
    "Максимальная ширина сниппета",
    200,
    { range: true, min: 150, max: 400, step: 10 },
    id
  );
}

function getAddToCartButton(id: string) {
  return object(
    'Кнопка "В корзину"',
    {
      url: "https://yandex.ru"
    },
    id
  );
}
