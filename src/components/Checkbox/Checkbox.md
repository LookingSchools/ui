# Checkbox

<!-- description:start -->

Компонент для создания чекбоксов различных типов.

<!-- description:end -->

## Пример использования

Использование с нужным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  Checkbox as CheckboxDesktop,
  withSizeM,
  withThemeDefault,
} from "@lookingschools/ui/Checkbox/desktop"

// Композиция из различных модификаторов
const Checkbox = compose(withSizeM, withThemeDefault)(CheckboxDesktop)

const App = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      label="checkbox"
      size="m"
      theme="default"
      onChange={() => setChecked(!checked)}
      checked={checked}
    />
  )
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from "react"
import { Checkbox } from "@lookingschools/ui/Checkbox/desktop/bundle"

const App = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      label="checkbox"
      size="m"
      theme="default"
      onChange={() => setChecked(!checked)}
      checked={checked}
    />
  )
}
```

## Примеры

### Стилевое оформление

Чтобы изменить стилевое оформление чекбокса, установите свойство `theme` в одно из указанных ниже значений.

- `default` — стандартная тема, используется в большинстве случаев.
- `pseudo` — прозрачная тема, используется, чтобы сделать переключатель менее заметным на странице.

{{%story::desktop:controls-checkbox-desktop--theme%}}

### Размер

Чтобы изменить размер чекбокса, установите свойство `size` в одно из следующих значений: `"m"`, `"s"`.

{{%story::desktop:controls-checkbox-desktop--size%}}

### Однострочные и многострочные подписи

Чтобы задать тип подписи чекбоксу, установите свойство `lines` в одно из указанных ниже значений.

- `one` — однострочная подпись. Обрезается многоточием, если ее длина превышает длину родительского элемента.
- `multi` — многострочная подпись.

{{%story::desktop:controls-checkbox-desktop--lines%}}

### Переходное состояние

Чтобы задать переходное состояние чекбоксу, установите свойство `indeterminate` в значение `true`.

{{%story::desktop:controls-checkbox-desktop--indeterminate%}}

## Свойства

<!-- props:start -->

| Свойство       | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onBlur?        | `(event: FocusEvent<HTMLElement>) => void`                                                                                                                                                                                                                        | Событие, которое вызывается при потере фокуса компонентом, например при клике на другом месте экрана                                                                                                                                                                                                                                                                            |
| onClick?       | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие, которое вызывается при нажатии на компонент                                                                                                                                                                                                                                                                                                                            |
| onFocus?       | `(event: FocusEvent<HTMLElement>) => void`                                                                                                                                                                                                                        | Событие, которое возникает при получении компонентом фокуса                                                                                                                                                                                                                                                                                                                     |
| onMouseDown?   | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши; `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`                                                                                                                                                                                                   |
| onMouseUp?     | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши; курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup`                                                                                                                                                                              |
| onMouseLeave?  | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Обработчик события `onMouseLeave`                                                                                                                                                                                                                                                                                                                                               |
| onMouseEnter?  | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Обработчик события `onMouseEnter`                                                                                                                                                                                                                                                                                                                                               |
| focused?       | `false \| true`                                                                                                                                                                                                                                                   | Состояние фокуса на компоненте                                                                                                                                                                                                                                                                                                                                                  |
| disabled?      | `false \| true`                                                                                                                                                                                                                                                   | Неактивное состояние компонента: состояние, при котором компонент отображается, но недоступен для действий пользователя                                                                                                                                                                                                                                                         |
| pressed?       | `false \| true`                                                                                                                                                                                                                                                   | Состояние нажатия на компоненте                                                                                                                                                                                                                                                                                                                                                 |
| hovered?       | `false \| true`                                                                                                                                                                                                                                                   | Состояние, которое возникает при наведении на компонент курсором                                                                                                                                                                                                                                                                                                                |
| innerRef?      | `(instance: HTMLElement) => void \| RefObject<HTMLElement>`                                                                                                                                                                                                       | Ссылка на корневой DOM-элемент компонента                                                                                                                                                                                                                                                                                                                                       |
| label?         | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Текст подписи к чекбоксу                                                                                                                                                                                                                                                                                                                                                        |
| indeterminate? | `false \| true`                                                                                                                                                                                                                                                   | Визуально переводит чекбокс в неопределенное состояние. Не влияет на состояние, указанное в `checked`.<br>Может использоваться в дереве чекбоксов, чтобы показать состояние родительского чекбокса, когда хотя бы один вложенный чекбокс отмечен, но не все.<br>Если свойство задано родительскому чекбоксу, то в `aria-controls` нужно добавить `id` всех вложенных чекбоксов. |
| checked?       | `false \| true`                                                                                                                                                                                                                                                   | Состояние переключателя: включен или выключен                                                                                                                                                                                                                                                                                                                                   |
| title?         | `string`                                                                                                                                                                                                                                                          | Всплывающая подсказка                                                                                                                                                                                                                                                                                                                                                           |
| autoFocus?     | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает фокус в компонент при монтировании                                                                                                                                                                                                                                                                                                                                |
| controlRef?    | `(instance: T) => void \| RefObject<T>`                                                                                                                                                                                                                           | Ссылка на DOM-ноду нативного контрола                                                                                                                                                                                                                                                                                                                                           |
| className?     | `string`                                                                                                                                                                                                                                                          | Дополнительный класс                                                                                                                                                                                                                                                                                                                                                            |
| onChange?      | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                  | Обработчик изменения значения                                                                                                                                                                                                                                                                                                                                                   |
| name?          | `string`                                                                                                                                                                                                                                                          | Имя компонента                                                                                                                                                                                                                                                                                                                                                                  |
| id?            | `string`                                                                                                                                                                                                                                                          | Уникальный id компонента                                                                                                                                                                                                                                                                                                                                                        |
| onKeyUp?       | `(event: KeyboardEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                | Обработчик события `onKeyUp`                                                                                                                                                                                                                                                                                                                                                    |
| onKeyDown?     | `(event: KeyboardEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                | Обработчик события `onKeyDown`                                                                                                                                                                                                                                                                                                                                                  |
| tabIndex?      | `number`                                                                                                                                                                                                                                                          | Целое число, определяющее, должен ли переключатель участвовать в последовательной навигации по всей странице с помощью клавиатуры                                                                                                                                                                                                                                               |
| required?      | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает в компоненте обязательное состояние                                                                                                                                                                                                                                                                                                                               |

<!-- props:end -->

## a11y

Чтобы обеспечить доступность, при использовании свойства `indeterminate` необходимо добавить в свойство `aria-controls` все `id` дочерних элементов.
