# Tumbler

Компонент, предназначенный для создания переключателя.

## Пример использования

### Использование с необходимым набором модификаторов

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  Tumbler as TumblerDesktop,
  withSizeM,
  withThemeDefault,
} from "@lookingschools/ui/Tumbler"

const Tumbler = compose(withSizeM, withThemeDefault)(TumblerDesktop)

const App = () => {
  const [checked, setChecked] = useState("")

  return (
    <Tumbler
      theme="default"
      size="m"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}
```

### Использование с полным набором модификаторов

```ts
// src/App.ts
import React, { useState } from "react"
import Tumbler from "@lookingschools/ui/Tumbler/Tumbler.bundle"

const App = () => {
  const [checked, setChecked] = useState("")

  return (
    <Tumbler
      theme="default"
      size="m"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}
```

## Примеры

### Размер переключателя

Чтобы изменить размер переключателя, установите свойство `size` в одно из доступных значений — `"s"`, `"m"`, `"l"`.

{{%story::desktop:lego-components-tumbler-desktop--size%}}

### Подпись переключателя

Чтобы чтобы добавить подпись для переключателя, необходимо установить `labelAfter` либо `labelBefore` с нужным текстом или `jsx` разметкой (например иконка).

> ⚠️ Если установлены обе подписи, то изменение состояния будет происходить только при нажатии на противоположную:
> `unchecked -> labelAfter`, `checked <- labelBefore`.
>
> ⚠️ Для обеспечения доступности с использованием svg-иконки в качестве подписи, необходимо добавить семантическое описание этой иконки в `aria-label`.

{{%story::desktop:lego-components-tumbler-desktop--label%}}

## Свойства

| Свойство     | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| checked      | `false \| true`                                                                                                                                                                                                                                                   | Состояние переключателя                                                                                                           |
| className?   | `string`                                                                                                                                                                                                                                                          | Дополнительный класс у корневого DOM-элемента                                                                                     |
| controlRef?  | `RefObject<HTMLInputElement>`                                                                                                                                                                                                                                     | Ссылка на нативный DOM-элемент нативного инпута                                                                                   |
| disabled?    | `false \| true`                                                                                                                                                                                                                                                   | Неактивное состояние переключателя                                                                                                |
| id?          | `string`                                                                                                                                                                                                                                                          | Уникальный id компонента                                                                                                          |
| innerRef?    | `RefObject<HTMLSpanElement>`                                                                                                                                                                                                                                      | Ссылка на корневой DOM-элемент компонента                                                                                         |
| labelAfter?  | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Подпись после переключателя                                                                                                       |
| labelBefore? | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Подпись перед переключателем                                                                                                      |
| name?        | `string`                                                                                                                                                                                                                                                          | Имя переключателя в форме                                                                                                         |
| onBlur?      | `(event: FocusEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                                  | Обработчик, который вызывается при потере фокуса переключателем                                                                   |
| onChange     | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                  | Обработчик, который вызывается при изменении состояния                                                                            |
| onClick?     | `(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void`                                                                                                                                                                                                      | Обработчик, который вызывается при нажатии на переключатель                                                                       |
| onFocus?     | `(event: FocusEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                                  | Обработчик, который вызывается при получении фокуса переключателем                                                                |
| onKeyDown?   | `(event: KeyboardEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                               | Обработчик, который вызывается при нажатии клавиши на клавиатуре (при этом переключатель должен быть в фокусе)                    |
| onKeyUp?     | `(event: KeyboardEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                               | Обработчик, который вызывается при отжатии клавиши на клавиатуре (при этом переключатель должен быть в фокусе)                    |
| tabIndex?    | `number`                                                                                                                                                                                                                                                          | Целое число, определяющее, должен ли переключатель участвовать в последовательной навигации по всей странице с помощью клавиатуры |
| title?       | `string`                                                                                                                                                                                                                                                          | Всплывающая подсказка                                                                                                             |
| autoFocus?   | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает фокус в компонент при монтировании                                                                                  |
| required?    | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает в компоненте обязательное состояние                                                                                 |
