# Checkbox

<!-- description:start -->

Компонент для создания чекбоксов различных типов.

<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from "@yandex-lego/components/Theme"
import { theme } from "@yandex-lego/components/Theme/presets/default"

configureRootTheme({ theme })
```

Использование компонента:

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  Checkbox as CheckboxDesktop,
  withSizeM,
  withThemeDefault,
} from "@godfreyd/takberi-ui/Checkbox"

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

## Примеры

### Вид

Чтобы изменить вид чекбокса, используйте модификатор `_theme`.

{{%story::desktop:lego-components-checkbox-desktop--theme%}}

### Стилевое оформление

Чтобы изменить стилевое оформление чекбокса, используйте модификатор `_theme`.

{{%story::desktop:lego-components-checkbox-desktop--theme%}}

### Размер

Чтобы изменить размер чекбокса, используйте модификатор `_size`.

{{%story::desktop:lego-components-checkbox-desktop--size%}}

### Однострочные и многострочные подписи

Чтобы задать тип подписи чекбоксу, используйте модификатор `_lines`.

{{%story::desktop:lego-components-checkbox-desktop--lines%}}

## Свойства

<!-- props:start -->

| Свойство      | Тип                                                    | Описание                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onBlur?       | `(event: FocusEvent<HTMLElement>) => void`             | Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана                                                                                              |
| onClick?      | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` | Событие, которое вызывается при нажатии на компонент                                                                                                                                               |
| onFocus?      | `(event: FocusEvent<HTMLElement>) => void`             | Событие, которое возникает при получении компонентом фокуса                                                                                                                                        |
| onMouseDown?  | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` | Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши. `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`                      |
| onMouseUp?    | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` | Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши. Курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup` |
| onMouseLeave? | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` | Обработчик события `onMouseLeave`                                                                                                                                                                  |
| onMouseEnter? | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` | Обработчик события `onMouseEnter`                                                                                                                                                                  |
| focused?      | `false \| true`                                        | Состояние фокуса на компоненте                                                                                                                                                                     |
| disabled?     | `false \| true`                                        | Неактивное состояние компонента. Состояние, при котором компонент отображается, но недоступен для действий пользователя                                                                            |
| pressed?      | `false \| true`                                        | Состояние нажатия на компоненте                                                                                                                                                                    |
| hovered?      | `false \| true`                                        | Состояние, которое возникает при наведении на компонент курсором                                                                                                                                   |
| innerRef?     | `RefObject<HTMLElement>`                               | Ссылка на корневой DOM-элемент компонента                                                                                                                                                          |
| label?        | `string`                                               | Текст подписи к чекбоксу                                                                                                                                                                           |
| checked?      | `false \| true`                                        | Состояние переключателя: включен или выключен                                                                                                                                                      |
| controlRef?   | `RefObject<T>`                                         | Ссылка на дом-ноду нативного контрола.                                                                                                                                                             |
| className?    | `string`                                               | Дополнительный класс                                                                                                                                                                               |
| onChange?     | `(event: ChangeEvent<HTMLInputElement>) => void`       | Обработчик изменения значения                                                                                                                                                                      |
| name?         | `string`                                               | Имя компонента                                                                                                                                                                                     |
| autoComplete? | `string`                                               | HTML-атрибут `autoComplete`                                                                                                                                                                        |
| id?           | `string`                                               | Уникальный id компонента                                                                                                                                                                           |
| onKeyUp?      | `(event: KeyboardEvent<HTMLInputElement>) => void`     | Обработчик события `onKeyUp`                                                                                                                                                                       |
| onKeyDown?    | `(event: KeyboardEvent<HTMLInputElement>) => void`     | Обработчик события `onKeyDown`                                                                                                                                                                     |

<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->

### lines

Делает подпись чекбокса однострочной или многострочной.

**Допустимые значения:**

- `one` — Однострочная подпись. Обрезается троеточием, если ее длина превышает длину родительского элемента.
- `multi` — Многострочная подпись.

### size

Задает размер чекбокса.

**Допустимые значения:** `"m"`, `"s"`.

### theme

Определяет тему оформления чекбокса.

**Допустимые значения:**

- `normal` — стандартная тема. Используется в большинстве случаев.
- `pseudo` — прозрачная тема. Используется, чтобы сделать переключатель менее заметным на странице.

### theme

Определяет внешний вид чекбокса.

**Допустимые значения:** `"default"`.

<!-- modifiers:end -->

## Ссылки

- [GitHub Source](https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Checkbox)
- [Известные проблемы](https://search.yandex-team.ru/stsearch?text=Checkbox.ts&facet.queue=ISL&facet.type=bug&facet.status=128)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#checkbox)
