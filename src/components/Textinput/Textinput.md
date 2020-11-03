# Textinput

<!-- description:start -->

Однострочное текстовое поле.

<!-- description:end -->

## Пример использования

Использование компонента:

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  Textinput as TextinputBase,
  withThemeDefault,
  withSizeM,
} from "@lookingschools/ls-ui/Textinput"

// Композиция из различных модификаторов
const Textinput = compose(withThemeDefault, withSizeM)(TextinputBase)

const App = () => {
  const [value, setValue] = useState("")

  return (
    <Textinput
      size="m"
      theme="default"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

## Примеры

### Стилевое оформление

Чтобы изменить стилевое оформление поля, используйте модификатор `_theme`.

{{%story::desktop:lego-components-textinput-desktop--theme%}}

### Размер поля

Чтобы изменить размер поля, используйте модификатор `_size`.

{{%story::desktop:lego-components-textinput-desktop--size%}}

### Выравнивание

Чтобы выровнять компоненты по базовой линии, используйте модификатор `_baseline`.

{{%story::desktop:lego-components-textinput-desktop--baseline%}}

### Тип поля

Чтобы изменить тип поля, используйте модификатор `_type`.

{{%story::desktop:lego-components-textinput-desktop--type%}}

### Границы поля

Чтобы изменить границы поля, используйте модификатор `_pin`.

{{%story::desktop:lego-components-textinput-desktop--pin%}}

### Состояние ошибки

Чтобы задать состояние ошибки нужно передать свойство `state` со значением `error`.
Чтобы установить текст ошибки нужно передать значение в свойство `hint`.

{{%story::desktop:lego-components-textinput-desktop--state%}}

## Свойства

<!-- props:start -->

| Свойство      | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onBlur?       | `(event: FocusEvent<HTMLElement>) => void`                                                                                                                                                                                                                        | Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана                                                                                              |
| onClick?      | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие, которое вызывается при нажатии на компонент                                                                                                                                               |
| onKeyDown?    | `(event: KeyboardEvent<HTMLElement>) => void`                                                                                                                                                                                                                     | Событие, которое вызывается при нажатии клавиш клавиатуры                                                                                                                                          |
| onFocus?      | `(event: FocusEvent<HTMLElement>) => void`                                                                                                                                                                                                                        | Событие, которое возникает при получении компонентом фокуса                                                                                                                                        |
| onMouseDown?  | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши. `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`                      |
| onMouseUp?    | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши. Курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup` |
| focused?      | `false \| true`                                                                                                                                                                                                                                                   | Состояние фокуса на компоненте                                                                                                                                                                     |
| pressed?      | `false \| true`                                                                                                                                                                                                                                                   | Состояние нажатия на компоненте                                                                                                                                                                    |
| addonAfter?   | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Дополнительный контент после контрола                                                                                                                                                              |
| addonBefore?  | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Дополнительный контент перед контролом                                                                                                                                                             |
| iconLeft?     | `ReactElement<IIconProps, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)>`                                                                      | Иконка слева от содержимого текстового поля                                                                                                                                                        |
| iconRight?    | `ReactElement<IIconProps, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)>`                                                                      | Иконка справа от содержимого текстового поля                                                                                                                                                       |
| innerRef?     | `RefObject<HTMLSpanElement>`                                                                                                                                                                                                                                      | Ссылка на корневой DOM элемент компонента                                                                                                                                                          |
| style?        | `CSSProperties`                                                                                                                                                                                                                                                   | Пользовательские стили на корневом DOM элементе.                                                                                                                                                   |
| hint?         | `string`                                                                                                                                                                                                                                                          | Текст-подсказка, появляющаяся после компонента. Может иметь различное визуальное оформление в зависимости от свойства `state`.                                                                     |
| state?        | `"error"`                                                                                                                                                                                                                                                         | Визуальное состояние компонента. Может использоваться при проверке формы на корректность.                                                                                                          |
| controlRef?   | `RefObject<HTMLInputElement>`                                                                                                                                                                                                                                     | Ссылка на DOM элемент нативного инпута                                                                                                                                                             |
| autoFocus?    | `false \| true`                                                                                                                                                                                                                                                   | HTML-атрибут `autofocus`                                                                                                                                                                           |
| autoComplete? | `string`                                                                                                                                                                                                                                                          | HTML-атрибут `autocomplete`                                                                                                                                                                        |
| name?         | `string`                                                                                                                                                                                                                                                          | Имя компонента                                                                                                                                                                                     |
| placeholder?  | `string`                                                                                                                                                                                                                                                          | Плейсхолдер                                                                                                                                                                                        |
| value?        | `string`                                                                                                                                                                                                                                                          | Значение контрола                                                                                                                                                                                  |
| defaultValue? | `string`                                                                                                                                                                                                                                                          | Значение по умолчанию контрола                                                                                                                                                                     |
| type?         | `string`                                                                                                                                                                                                                                                          | HTML-атрибут `type`                                                                                                                                                                                |
| disabled?     | `false \| true`                                                                                                                                                                                                                                                   | HTML-атрибут `disabled`                                                                                                                                                                            |
| id?           | `string`                                                                                                                                                                                                                                                          | Уникальный id компонента                                                                                                                                                                           |
| className?    | `string`                                                                                                                                                                                                                                                          | Дополнительный класс                                                                                                                                                                               |
| onChange?     | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                  | Обработчик изменения значения                                                                                                                                                                      |
| onMouseLeave? | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void`                                                                                                                                                                                                       | Обработчик события `onMouseLeave`                                                                                                                                                                  |
| onMouseEnter? | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void`                                                                                                                                                                                                       | Обработчик события `onMouseEnter`                                                                                                                                                                  |

<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->

### baseline

Выравнивает компонент по базовой линии.

**Допустимые значения:** `false`, `true`.

### hasClear

Добавляет крестик для очистки текстового поля.

| Свойство      | Тип                                                        | Описание                                      |
| ------------- | ---------------------------------------------------------- | --------------------------------------------- |
| hasClear?     | `false \| true`                                            | Наличие крестика для очистки текстового поля. |
| onClearClick? | `(event: MouseEvent<HTMLSpanElement, MouseEvent>) => void` | Обработчик клика по крестику.                 |

### size

Задает размер текстового поля.

**Допустимые значения:** `"m"`, `"s"`.

### theme

Задает тему оформления текстового поля.

**Допустимые значения:** `"default"`.

<!-- modifiers:end -->
