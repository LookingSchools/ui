# Radiobutton

Компонент для создания радиопереключателя.

## Пример использования

Использование компонента:

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  Radiobutton as RadiobuttonBase,
  withSizeM,
  withViewDefault,
} from "@lookingschools/ui/Radiobutton"

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

| Свойство    | Тип                                                         | Описание                                        |
| ----------- | ----------------------------------------------------------- | ----------------------------------------------- |
| options     | `IRadioButtonOption[]`                                      | Набор опций                                     |
| innerRef?   | `RefObject<HTMLSpanElement>`                                | Ссылка на корневой DOM-элемент компонента       |
| style?      | `CSSProperties`                                             | Пользовательские стили на корневом DOM-элементе |
| aria-label? | `string`                                                    | Метка для радиогруппы                           |
| value       | `string`                                                    | HTML-атрибут `value`, значение контрола         |
| name?       | `string`                                                    | HTML-атрибут `name`, имя компонента             |
| disabled?   | `false \| true`                                             | HTML-атрибут `disabled`                         |
| className?  | `string`                                                    | Дополнительный класс                            |
| onClick?    | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void` | Обработчик клика                                |
| onChange?   | `(event: ChangeEvent<HTMLInputElement>) => void`            | Обработчик изменения значения                   |