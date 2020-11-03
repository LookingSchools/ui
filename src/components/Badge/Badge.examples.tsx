import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, select } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Badge } from "./Badge.bundle/";
import { Icon } from "../Icon/Icon.bundle";

const icons = ["cart", "favorite", "profile"];

const styleContainer = {
  display: "flex",
  width: "100%",
  flexWrap: "wrap"
};

const styleIcon = {
  display: "flex",
  width: "30px",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "12px",
  margin: "5px",
  color: "rgba(0, 0, 0, 0.5)"
};

function renderIcons(icons, type) {
  return (
    <div style={styleContainer}>
      {icons.map((icon: any, i: number) => {
        return (
          <div key={i} style={styleIcon}>
            <Badge
              type={type || "standart"}
              as="div"
              badgeContent={3}
              background={color("Цвет разделителя", "#f55")}
              color={color("Цвет текста", "#fff")}
            >
              <Icon glyph={icon} size="m" />
            </Badge>
          </div>
        );
      })}
    </div>
  );
}

storiesOf("LookingSchools/Components|Badge/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Badge.md").default
      }
    })
  )
  .add("playground", () => {
    const type = select("type", ["", "standart", "dot"], "standart");

    return renderIcons(icons, type);
  });
