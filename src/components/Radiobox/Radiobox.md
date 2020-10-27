# Radiobox

<!-- description:start -->

Компонент для создания радиопереключателя.

<!-- description:end -->

## Пример использования

```js
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  Radiobox as RadioboxBase,
  withSizeM,
  withThemeDefault,
} from "@takberi-ui/components/Radiobox/"

const Radiobox = compose(withSizeM, withThemeDefault)(RadioboxBase)

const App = () => {
  const [value, setValue] = useState("value1")

  return (
    <Radiobox
      size="m"
      theme="default"
      value={value}
      options={[
        { label: "Радио 1", value: "value1" },
        { label: "Радио 2", value: "value2" },
        { label: "Радио 3", value: "value3" },
      ]}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

## Примеры

### Оформление радиопереключателя

Для различного оформления радиопереключателей используйте модификатор `theme`.

{{%story::desktop:lego-components-radiobox-desktop--theme%}}

### Размер радиопереключателя

Чтобы изменить размер радиопереключателя, используйте модификатор `size`.

{{%story::desktop:lego-components-radiobox-desktop--size%}}

## Свойства

<!-- props:start -->

| Свойство   | Тип                                                         | Описание                                  |
| ---------- | ----------------------------------------------------------- | ----------------------------------------- |
| options    | `(string \| IOption)[]`                                     | Набор опций                               |
| innerRef?  | `RefObject<HTMLSpanElement>`                                | Ссылка на корневой DOM-элемент компонента |
| className? | `string`                                                    | Дополнительный класс                      |
| onClick?   | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void` | Обработчик клика                          |
| disabled?  | `false \| true`                                             | HTML атрибут `disabled`                   |
| value?     | `string`                                                    | Значение контрола.                        |
| id?        | `string`                                                    | Уникальный id компонента                  |
| onChange?  | `(event: ChangeEvent<HTMLInputElement>) => void`            | Обработчик изменения значения компонента  |
| name?      | `string`                                                    | Имя компонента                            |

<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->

### size

Задает размер радиопереключателей.

**Допустимые значения:** `"m"`, `"s"`.

### theme

Задает тему оформления радиопереключателя.

**Допустимые значения:** `"default"`.

<!-- modifiers:end -->
