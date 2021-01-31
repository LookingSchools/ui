import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDocs } from "@storybook-addons/docs";

import i18n, { setI18nLang } from '@lookingschools/i18n';
import * as keyset from './Cookie.i18n';

import { Cookie } from "./Cookie.bundle";

storiesOf("Controls|Cookie", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Cookie.md").default
      }
    })
  )
  .add("preview", () => {
   
    setI18nLang('en');
    
    const exampleI18N = i18n(keyset);

    return (<div>
      <Cookie
        text={exampleI18N('Мы cохраняем файлы cookie: это помогает сайту работать лучше.')}
        button="Хорошо"
      />
    </div>)
  });
