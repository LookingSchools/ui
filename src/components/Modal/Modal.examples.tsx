import React, { createRef } from "react";
import { compose } from "@bem-react/core";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import { Modal as ModalBase } from "./Modal";
import { withThemeDefault } from "./_theme/Modal_theme_default";
import { withOutsideClick } from "../../hocs/withOutsideClick/withOutsideClick";
import { withZIndex } from "../../hocs/withZIndex/withZIndex";

const Modal = compose(
  withThemeDefault,
  withOutsideClick,
  withZIndex
)(ModalBase);

const scopeRef1 = createRef();
const scopeRef2 = createRef();

storiesOf("Takberi/Components|Modal/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Modal.md").default
      }
    })
  )
  .add("playground", () => {
    const visible = boolean("visible", true);
    const theme = select("theme", ["default"], "default");
    const children = text(
      "children",
      "Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом."
    );

    return (
      <div ref={scopeRef1}>
        <Modal forceRender theme={theme} scope={scopeRef1} visible={visible}>
          {children}
        </Modal>
      </div>
    );
  });

storiesOf("Takberi/Components|Modal/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Modal.md").default
      }
    })
  )
  .add("_theme", () => (
    <div ref={scopeRef2}>
      <Modal forceRender visible theme="default" scope={scopeRef2}>
        Общедоступная многоязычная универсальная интернет-энциклопедия со
        свободным контентом.
      </Modal>
    </div>
  ));
