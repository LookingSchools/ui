# Spin

<!-- description:start -->

Индикатор загрузки. Отображает выполнение какого-то процесса, например загрузки сайта или медиа-файла.

<!-- description:end -->

## Пример использования

```js
// src/App.ts
import React from "react"
import { compose } from "@bem-react/core"
import {
  Spin as SpinBase,
  withSizeM,
  withThemePrimary,
} from "@godfreyd/takberi-ui/Spin"

// Композиция из различных модификаторов
const Spin = compose(withSizeM, withThemePrimary)(SpinBase)

const App = () => {
  return <Spin progress theme="primary" size="m" />
}
```

## Примеры

### Размер индикатора

Чтобы изменить размер индикатора, используйте модификатор `_size`.

{{%story::desktop:lego-components-spin-desktop--size%}}

### Расположение индикатора

Чтобы отобразить индикатор по центру, используйте модификатор `_position` со значением `center`.

{{%story::desktop:lego-components-spin-desktop--position%}}

## Свойства

<!-- props:start -->

| Свойство  | Тип                         | Описание                                   |
| --------- | --------------------------- | ------------------------------------------ |
| innerRef? | `RefObject<HTMLDivElement>` | Ссылка на корневой DOM-элемент компонента. |
| progress? | `false \| true`             | Видимость индикатора загрузки.             |

<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->

### position

Задает позицию индикатора загрузки внутри корневого элемента.

**Допустимые значения:** `"center"`.

### size

Обязательный. Задает размер индикатора загрузки.

**Допустимые значения:** `"l"`, `"m"`, `"s"`, `"xs"`, `"xxs"`.

### theme

Задает внешний вид индикатора загрузки.

**Допустимые значения:** `"primary"`.

<!-- modifiers:end -->
