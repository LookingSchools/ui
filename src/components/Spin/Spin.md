# Spin

Индикатор загрузки. Отображает выполнение какого-то процесса, например загрузки сайта или медиа-файла.

## Пример использования

```js
// src/App.ts
import React from "react"
import { compose } from "@bem-react/core"
import {
  Spin as SpinBase,
  withSizeM,
  withThemePrimary,
} from "@lookingschools/ui/Spin"

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
| Свойство   | Тип                         | Описание                                  |
| ---------- | --------------------------- | ----------------------------------------- |
| innerRef?  | `RefObject<HTMLDivElement>` | Ссылка на корневой DOM-элемент компонента |
| progress?  | `false \| true`             | Видимость индикатора загрузки             |
| className? | `string`                    | Дополнительный класс                      |