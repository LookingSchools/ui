# Tooltip

<!-- description:start -->

Компонент, использующийся для создания всплывающих подсказок.

<!-- description:end -->

## Пример использования

Использование с нужным набором модификаторов:

```ts
// src/App.ts
import React from "react"
import { compose } from "@bem-react/core"
import {
  Tooltip as TooltipDesktop,
  withSizeM,
  withThemeDefault,
} from "@lookingschools/ui/Tooltip/desktop"

const Tooltip = compose(withSizeM, withThemeDefault)(TooltipDesktop)

const App = () => {
  const [visible, setVisible] = React.useState(false)
  const buttonRef = React.useRef(null)

  return (
    <>
      <button
        ref={buttonRef}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Target
      </button>
      <Tooltip theme="default" size="m" anchor={buttonRef} visible={visible}>
        Description
      </Tooltip>
    </>
  )
}
```

Использование с полным набором модификаторов:

При использовании компонента `stateless` необходимо связать `target` и `tooltip` через свойство `anchor`, а также задать свойство `visible`.

```ts
// src/App.ts
import React from "react"
import { Tooltip } from "@lookingschools/ui/Tooltip/desktop/bundle"

const App = () => {
  const [visible, setVisible] = React.useState(false)
  const buttonRef = React.useRef(null)

  return (
    <>
      <button
        ref={buttonRef}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Target
      </button>
      <Tooltip theme="default" size="m" anchor={buttonRef} visible={visible}>
        Description
      </Tooltip>
    </>
  )
}
```

При использовании компонента `stateful` достаточно обернуть любой react-элемент в `TooltipStateful` и задать описание в `content`.

```ts
import React from "react"
import { TooltipStateful } from "@lookingschools/ui/Tooltip/desktop/bundle"

const App = () => (
  <TooltipStateful theme="default" size="m" content="Description">
    <button>Target</button>
  </TooltipStateful>
)
```

## Примеры

### Размер подсказки

Чтобы изменить размер подсказки, установите свойство `size` в одно из следующих значений: `"s"`, `"m"`, `"l"`.

{{%story::desktop:surface-tooltip-desktop--size%}}

### Состояние подсказки

Чтобы изменить состояние подсказки, установите свойство `state` в одно из следующих значений: `"warning"`, `"alert"`, `"success"`.

{{%story::desktop:surface-tooltip-desktop--state%}}

### Направление раскрытия подсказки

Чтобы изменить направление раскрытия подсказки, установите свойство `direction` с одним или несколькими допустимыми значениями — `"top-left"`, `"top-center"`, `"top-right"`, `"right-top"`, `"right-center"`, `"right-bottom"`, `"bottom-right"`, `"bottom-center"`, `"bottom-left"`, `"left-bottom"`, `"left-center"`, `"left-top`".

Если свойство `direction` не было установлено, то будут использованы <a href="https://github.com/bem/yandex-ui/blob/master/src/Popup/_target/Popup_target_anchor.tsx#L19-L32" target="_blank">значения по умолчанию</a> в порядке приоритета раскрытия.

{{%story::desktop:surface-tooltip-desktop--direction%}}

## Свойства

### Stateless

Компонент частично реализует интерфейс `Popup` и `PopupTargetAnchor`.

<!-- props:start -->

| Свойство         | Тип                                                                                                                                                                                                                 | По умолчанию    | Описание                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| keepMounted?     | `false \| true`                                                                                                                                                                                                     | `true`          | Сохраняет контейнер в DOM после создания                                                                                              |
| className?       | `string`                                                                                                                                                                                                            | —               | Дополнительный класс                                                                                                                  |
| hasTail?         | `false \| true`                                                                                                                                                                                                     | —               | Включает/отключает хвостик у попапа                                                                                                   |
| innerRef?        | `(instance: HTMLDivElement) => void \| RefObject<HTMLDivElement>`                                                                                                                                                   | —               | Ссылка на корневой DOM-элемент компонента                                                                                             |
| zIndex?          | `number`                                                                                                                                                                                                            | —               | Задает слой `z-index`                                                                                                                 |
| visible?         | `false \| true`                                                                                                                                                                                                     | —               | Делает попап видимым                                                                                                                  |
| scope?           | `RefObject<HTMLElement>`                                                                                                                                                                                            | `document.body` | Ссылка на DOM-элемент, в котором размещается попап; важно, чтобы контейнер имел `position: relative` для корректного позиционирования |
| onClose?         | `(event: KeyboardEvent \| MouseEvent, source: "esc" \| "click") => void`                                                                                                                                            | —               | Обработчик, вызывающийся после нажатия на клавишу Esc либо мышкой на область вне контейнера                                           |
| onClick?         | `(event: MouseEvent<HTMLDivElement, MouseEvent>) => void`                                                                                                                                                           | —               | Обработчик, вызываемый при срабатывании события click                                                                                 |
| mainOffset?      | `number`                                                                                                                                                                                                            | `0`             | Отступ попапа относительно основного направления                                                                                      |
| secondaryOffset? | `number`                                                                                                                                                                                                            | `0`             | Отступ попапа относительно второстепенного направления                                                                                |
| tailOffset?      | `number`                                                                                                                                                                                                            | `0`             | Отступ хвостика от края попапа                                                                                                        |
| anchor?          | `RefObject<HTMLElement>`                                                                                                                                                                                            | —               | Элемент, относительно которого позиционируется попап                                                                                  |
| state?           | `"warning" \| "alert" \| "success"`                                                                                                                                                                                 | —               | Визуальное состояние подсказки                                                                                                        |
| direction?       | `"bottom-left" \| "bottom-center" \| "bottom-right" \| "top-left" \| "top-center" \| "top-right" \| "right-top" \| "right-center" \| "right-bottom" \| "left-top" \| "left-center" \| "left-bottom" \| Direction[]` | —               | Направление для раскрытия подсказки                                                                                                   |
| id?              | `string`                                                                                                                                                                                                            | —               | Уникальный id подсказки                                                                                                               |

<!-- props:end -->

### Stateful

Компонент частично реализует интерфейс `Tooltip`.

| Свойство        | Тип                                          | По умолчанию | Описание                                                       |
| --------------- | -------------------------------------------- | ------------ | -------------------------------------------------------------- |
| children        | `ReactNode`                                  | —            | Компонент или элемент, для которого нужно показать подсказку   |
| content         | `ReactNode`                                  | —            | Содержимое, которое будет показано в подсказке                 |
| trigger?        | `"click" \| "hover" \| "focus" \| Trigger[]` | `hover`      | Режим для показа подсказки; может содержать несколько значений |
| defaultVisible? | `false \| true`                              | `false`      | Показывает подсказку сразу видимой                             |

## Доступность

Чтобы обеспечить доступность с использованием компонента `stateless`, необходимо связать `anchor` с подсказкой, указав `aria-describedby` и `id`.

> ⚠️ При использовании компонента `stateful` эта логика реализована внутри.

```ts
<button aria-describedby="tooltip-1">
  Target
</button>
<Tooltip id="tooltip-1">
  Description
</Tooltip>
```
