# @lookingschools/ui

React components that implement Lookingschools's UI Design.

## Install

```sh
#⠀package with components
npm install -S @lookingschools/ui
#⠀peer dependencies
npm i -P @bem-react/core @bem-react/di @bem-react/classname
```

## Storybook

[http://godfreyd.github.io/dist](http://godfreyd.github.io/dist).

## Usage

Пример использования компонента с нужным набором модификаторов (предпочтительный способ):

```ts
// src/App.ts
import React from 'react'
import { compose } from '@bem-react/core'
import {
  Button as ButtonDesktop,
  withSizeM,
  withThemeDefault,
} from '@lookingschools/ui/Button'

const Button = compose(withSizeM, withViewDefault)(ButtonDesktop)

const App: React.FC = () => (
  <Button theme="default" size="m">
    Button
  </Button>
)
```

Пример использования компонента с полным набором модификаторов (увеличивает размер итогового бандла):

```ts
// src/App.ts
import React from 'react'
import { Button } from '@lookingschools/ui/Button/bundle'

const App: React.FC = () => (
  <Button theme="default" size="m">
    Button
  </Button>
)
```

> **Важно!** Новые компоненты стали разделять на две реализации (`desktop` и `mobile`), поэтому вызов таких компонентов будет отличаться:
> `import { Select as SelectDesktop, withSizeM, withThemeDefault, } from '@lookingschools/ui/Serlect/desktop'` — нужный набор модификаторов;
> `import { Select } from '@lookingschools/ui/Select/desktop/bundle'` — полный набор модификаторов.

## Development

1. Run Storybook:
    
    ```sh
    npm run storybook
    ```

1. Go to the link [http://localhost:6006/](http://localhost:6006/).

## Build

```sh
// Use Node 14.14.0
nvm use
// Build
npm run build
```

## Publish

Чтобы опубликовать новую версию пакета нужны права на запись в NPM:

1. Login to NPM: `npm login`.
1. Build package: `npm run build`.
1. Change package version in package.json.
1. Publish package: `npm publish`.

## Platforms

We support stable versions of all major browsers, including ie11.

| Browser           | Support version       |
| ----------------- | --------------------- |
| Chrome            | Last 2 versions       |
| Opera             | >= 12.1               |
| Firefox           | >= 23                 |
| Android           | >= 4                  |
| iOS Safari        | >= 5.1                |
| Internet Explorer | >= 11                 |


## Formating

```sh
// CSS
npm run format:css
// TS
npm run format:js
// Markdown
npm run format:md
```

## Ресурсы

- <a target="_blank" href="CONTRIBUTING.md">Разработка</a>