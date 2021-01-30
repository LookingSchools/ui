import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Link  } from "./Link.bundle";

storiesOf("LookingSchools/Components|Link/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Link.md").default
      }
    })
  )
  .add("playground", () => {
    const theme = select("theme", ["default", ""], "default");
    const href = text("href", "https://yandex.ru");
    const children = text("children", "Lookingschools");
    return (
      <Link theme={theme} href={href}>
        {children}
      </Link>
    );
  });

storiesOf("LookingSchools/Components|Link/", module)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Link.md").default
      }
    })
  )
  .add("_pseudo", () => (
    <>
      <Link pseudo>Псевдоссылка без темы</Link>
      <br />
      <Link pseudo theme="pseudo">
        Псевдоссылка с темой pseudo
      </Link>
      <br />
      <Link pseudo href="#">
        Псевдоссылка без темы но с href оформляется иначе.
      </Link>
    </>
  ))
  .add("_theme", () => (
    <>
     <Link href="#" theme="black">
        Ссылка с темой black
      </Link>
      <br />
      <Link href="#" theme="default">
        Ссылка с темой default
      </Link>
      <br />
      <Link href="#" theme="pseudo">
        Псевдоссылка с темой pseudo
      </Link>
    </>
  ));
