
## Cookbook

### Каждый компонент должен реализовывать интерфейс `innerRef` & `controlRef`

Свойство `innerRef` должно возвращать ссылку на самый верхний элемент:

```tsx
const textinputRef = createRef()
const render = () => <Textinput innerRef={textinputRef} />
// textinputRef.current => <div class="Textinput">...</div>
```

Свойство `controlRef` должно возвращать ссылку на нативный контрол:

```tsx
const textinputRef = createRef()
const render = () => <Textinput controlRef={textinputRef} />
// textinputRef.current => <input class="Textinput-Control" />
```

### Все свойства интерфейса должны быть описаны в виде jsdoc

```ts
interface IBlockProps {
  /**
   * Описание свойства.
   * @default 'value'
   */
  property?: string;
}
```

### Использование defaultProps

Использование с `stateful component`:

```ts
import { Component, ComponentClass } from 'react'
import { Defaultize } from '../../typings/utils'
interface IBlockProps {
  property1?: string
  property2?: string
}
const defaultProps = {
  property1: 'value',
}
type DefaultProps = keyof typeof defaultProps
// Создаем тип, в котором свойства имеющие значения по умолчанию становятся required,
// это нужно, чтобы не добавлять проверки на наличие свойства в коде.
type BlockProps = Defaultize<IBlockProps, DefaultProps>
export const Block = class extends Component<BlockProps> {
  static defaultProps = defaultProps
  ...
// Приводим компонент к типу, в котором свойства имеющие значения по умолчанию остаются optional.
} as ComponentClass<IBlockProps>
```

Использование с `functional component`:

```ts
import React, { FC, RefObject, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import 'Block.scss';

export const cnBlock = cn('Block');

interface IBlockProps {
    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const Block: FC<IBlockProps> = ({
    className,
    ...props
}) => {

    return (
        <div {...props} className={cnBlock(null, [className])}>
            
        </div>
    )
}

Block.displayName = cnBlock();
```




<details markdown="1">

<summary>PostCSS</summary>

```js
// postcss.config.js
module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-preset-env'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer'),
        require('postcss-url')({ url: 'inline', optimizeSvgEncode: true }),
        require('postcss-simple-vars'),
        require('postcss-custom-properties'),
        require('postcss-calc'),
        require('postcss-browser-reporter'),
        require('postcss-reporter'),
        require('postcss-csso')
    ],
    parser: require('postcss-scss')
};
```

Подробнее:

- [postcss-import](https://www.npmjs.com/package/postcss-import) — поддержка `@import` локальных файлов, `node modules` и `web_modules`.
- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) — поддержка переменных, nesting и других стандартных возможностей не получивших поддержку в браузерах. CSS Nesting используем только по ((https://tabatkins.github.io/specs/css-nesting/ спецификации)), `postcss-nested` запрещен, т.о. nesting для БЭМ-проектов практически неприменим.
- [postcss-flexbugs-fixes](https://www.npmjs.com/package/postcss-flexbugs-fixes) — исправление [Flex-багов браузеров](https://github.com/philipwalton/flexbugs).
- [autoprefixer](https://www.npmjs.com/package/autoprefixer) — PostCSS плагин для парсинга CSS и добавления вендорных (браузерных) префиксов в CSS-правила, на основании значений из [Can I Use](https://caniuse.com). Версии браузеров в конфиге остаются на откуп сервисов.
- [postcss-url](https://www.npmjs.com/package/postcss-url) — формирование правильного url для локальных файлов.
- [postcss-simple-vars](https://www.npmjs.com/package/postcss-simple-vars) — поддержка переменных как в [Sass](http://sass-lang.com).
- [postcss-calc](https://www.npmjs.com/package/postcss-calc) — статическое вычисление calc-выражений во время сборки.
- [postcss-csso](https://www.npmjs.com/package/csso) — минимизация результирующего CSS.

</details>
<details markdown="1">

<summary>Breakpoints</summary>

```css
/* Large desktops */
@media (min-width: 1280px) {

}

/* Desktops */
@media (min-width: 1024px) and (max-width: 1279px) {

}

/* Laptop */
@media (min-width: 960px) and (max-width: 1023px) {

}

/* Touch */
@media (min-width: 768px) and (max-width: 959px) {

}

/* Portrait tablets and small desktops */
@media (min-width: 320px) and (max-width: 767px) {

}
```

</details>