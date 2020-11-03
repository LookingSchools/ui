import React from "react";
import { compose, composeU } from "@bem-react/core";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Link as LinkBase } from "./Link";
import { withPseudo } from "./_pseudo/Link_pseudo";
import { withThemeDefault } from "./_theme/Link_theme_default";
import { withThemePseudo } from "./_theme/Link_theme_pseudo";

const Link = compose(
  composeU(withThemeDefault, withThemePseudo),
  withPseudo
)(LinkBase);

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
      <Link href="#" theme="default">
        Ссылка с темой default
      </Link>
      <br />
      <Link href="#" theme="pseudo">
        Псевдоссылка с темой pseudo
      </Link>
    </>
  ));
