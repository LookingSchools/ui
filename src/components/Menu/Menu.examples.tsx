import React, { useState } from 'react';
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";

import { withDocs } from "@storybook-addons/docs";

import { Menu } from "./Menu.bundle";

const items = [
  { value: 'a', content: 'Каждый' },
  { value: 'b', content: 'Охотник' },
  {
      items: [
          { value: 'c', content: 'Желает', disabled: true },
          { value: 'd', content: 'Знать' },
          { value: 'e', content: 'Где' },
      ],
  },
];

storiesOf("LookingSchools/Components|Menu/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Menu.md").default
      }
    })
  )
  .add("playground", () => {
    const [value, setValue] = useState('a');

    const size = select('size', ['s', 'm'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const width = select('width', ['max', 'auto'], 'auto') as any;
    const disabled = boolean('disabled', false);
    const rawItems = object('items', items);
    return (
      <div>
          <Menu
              theme={theme}
              disabled={disabled}
              size={size}
              view={view}
              width={width}
              items={rawItems}
              value={value}
              onChange={(event: any) => setValue(event.target.value)}
          />
      </div>
    );
  });

storiesOf("LookingSchools/Components|Menu/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Menu.md").default
      }
    })
  )
  .add("_theme", () => {
    const [value, setValue] = useState('a');

    return (
        <Menu size="m" theme="normal" items={items} value={value} onChange={(event: any) => setValue(event.target.value)} />
    );
  })
  .add("_size", () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');

    return (
        <>
            <Menu
                size="m"
                view="default"
                items={items}
                value={value1}
                onChange={(event: any) => setValue1(event.target.value)}
            />
            <Menu
                size="s"
                view="default"
                items={items}
                value={value2}
                onChange={(event: any) => setValue2(event.target.value)}
            />
        </>
    );
  })
  .add("_view", () => {
    const [value, setValue] = useState('a');

    return (
        <Menu size="m" view="default" items={items} value={value} onChange={(event: any) => setValue(event.target.value)} />
    );
  })
  .add("_width", () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');

    return (
        <>
            <Menu
                size="m"
                view="default"
                width="max"
                items={items}
                value={value1}
                onChange={(event: any) => setValue1(event.target.value)}
            />
            <Menu
                size="m"
                view="default"
                width="auto"
                items={items}
                value={value2}
                onChange={(event: any) => setValue2(event.target.value)}
            />
        </>
    );
  });
