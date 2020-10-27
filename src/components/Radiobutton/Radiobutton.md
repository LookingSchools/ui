# Radiobutton

<!-- description:start -->

Компонент для создания радиопереключателя.

<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from "@godfreyd/takberi-ui/Theme"
import { theme } from "@godfreyd/takberi-ui/Theme/presets/default"

configureRootTheme({ theme })
```

Использование компонента:

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  Radiobutton as RadiobuttonBase,
  withSizeM,
  withViewDefault,
} from "@godfreyd/takberi-ui/Radiobutton"

const Radiobutton = compose(withSizeM, withViewDefault)(RadiobuttonBase)

const App = () => {
  const [value, setValue] = useState("value1")

  return (
    <Radiobutton
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

{{%story::desktop:lego-components-Radiobutton-desktop--theme%}}

### Стилевое оформление

Чтобы изменить стилевое оформление радиопереключателей, используйте модификатор `_theme`.

{{%story::desktop:lego-components-Radiobutton-desktop--theme%}}

### Размер радиопереключателя

Чтобы изменить размер радиопереключателя, используйте модификатор `size`.

{{%story::desktop:lego-components-Radiobutton-desktop--size%}}

## Свойства

<!-- props:start -->

| Свойство   | Тип                                                         | Описание                                                                                                            |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| options    | `(string \| IOption)[]`                                     | Набор опций                                                                                                         |
| innerRef?  | `RefObject<HTMLSpanElement>`                                | Ссылка на корневой DOM-элемент компонента                                                                           |
| disabled?  | `false \| true`                                             | Неактивное состояние кнопки. Состояние, при котором компонент отображается, но недоступен для действий пользователя |
| className? | `string`                                                    | Дополнительный класс                                                                                                |
| onClick?   | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void` | Обработчик клика                                                                                                    |
| value?     | `string`                                                    | Значение контрола.                                                                                                  |
| id?        | `string`                                                    | Уникальный id компонента                                                                                            |
| onChange?  | `(event: ChangeEvent<HTMLInputElement>) => void`            | Обработчик изменения значения                                                                                       |
| name?      | `string`                                                    | Имя компонента                                                                                                      |

<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->

### size

Задает размер радиопереключателей.

**Допустимые значения:** `"m"`, `"s"`.

### theme

Задает стилевое оформление радиопереключателей.

**Допустимые значения:** `"default"`, `"pseudo"`.

### theme

Задает тему оформления радиопереключателя.

**Допустимые значения:** `"default"`.

<!-- modifiers:end -->
