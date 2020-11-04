# @lookingschools/ui

React components that implement Lookingschools's UI Design.

We support stable versions of all major browsers, including ie11.

| Browser           | Support version       |
| ----------------- | --------------------- |
| Chrome            | Last 2 versions       |
| Opera             | >= 12.1               |
| Firefox           | >= 23                 |
| Android           | >= 4                  |
| iOS Safari        | >= 5.1                |
| Internet Explorer | >= 11                 |

## Usage

```sh
// Install with npm
npm install -S @lookingschools/ui
// Update
npm update @lookingschools/ui
```

## Development

1. Login to NPM by `godfreyd`:

    ```sh
    npm login
    ```

2. Install dependences:

    ```sh
    npm i
    ```

3. Run Storybook:

    ```sh
    npm run storybook
    ```

4. Go to the link [http://localhost:6006/](http://localhost:6006/).

## Build for production

```sh
// Use Node 14.14.0
nvm use
// Build
npm run build
```

## Publish

Чтобы опубликовать новую версию пакета (только для меня):

1. Соберите нужный пакет.
1. Добавьте в `package.json` в поле `files` нужные директории для пакета.
1. Измените версию пакета.
1. Выполните команду и введите авторизационные данные:

    ```sh
    npm login
    ```

1. Выполните команду и ввкедите свои авторизационные данные:

    ```sh
    npm publish
    ```

Cool!

## PostCSS

Пример конфига `postcss.config.js`:

```js
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

## Ресурсы

- <a target="_blank" href="CONTRIBUTING.md">Разработка</a>
- <a target="_blank" href="LEGACY.md">Архитектура</a>

## Breakpoints

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

## Stylelint

Так работает:

```bash
npx stylelint './src/**/*.{scss,css}' --fix
```

Так не  работает (TODO: разобраться):

```bash
npm run stylelint --fix
```

## Prettier

```sh
// JS
prettier --write src/components/**/**/*.{ts,tsx}
prettier --write src/components/**/*.{ts,tsx}
prettier --write src/components/**/**/*.examples.{ts,tsx}
// Markdown
prettier --write --parser markdown --tab-width 2 --no-semi --print-width 80 src/components/**/**/*.md
prettier --write --parser markdown --tab-width 2 --no-semi --print-width 80 src/components/**/*.md
```