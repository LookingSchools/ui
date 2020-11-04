# Modal

Используется для создания всплывающих модальных окон.

## Пример использования

```js
import React from "react"
import { compose } from "@bem-react/core"
import {
  Modal as ModalBase,
  withThemeDefault,
} from "@lookingschools/ui/Modal"
import { withOutsideClick } from "@lookingschools/ui/withOutsideClick"
import { withZIndex } from "@lookingschools/ui/withZIndex"

// Композиция из различных модификаторов
const Modal = compose(withThemeDefault, withOutsideClick, withZIndex)(ModalBase)

const App = () => (
  <Modal
    onEscapeKeyDown={() => this.setState({ visible: false })}
    onOutsideClick={() => this.setState({ visible: false })}
    theme="default"
    visible={this.state.visible}
    zIndexGroupLevel={20}
  >
    Привет!
  </Modal>
)
```

## Примеры

### Стилевое оформление меню

Чтобы изменить стилевое оформление модального окна, используйте модификатор `_theme`.

{{%story::desktop:lego-components-modal-desktop--theme%}}

## Свойства
| Свойство              | Тип                                                                      | По умолчанию    | Описание                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| contentVerticalAlign? | `"top" \| "middle" \| "bottom"`                                          | `'middle'`      | Выравнивание контента по вертикали                                                                                                        |
| hasAnimation?         | `false \| true`                                                          | `true`          | Добавляет анимацию при открытии модального окна                                                                                           |
| keepMounted?          | `false \| true`                                                          | `true`          | Сохраняет контейнер в DOM после создания                                                                                                  |
| className?            | `string`                                                                 | —               | Дополнительный класс                                                                                                                      |
| innerRef?             | `(instance: HTMLDivElement) => void \| RefObject<HTMLDivElement>`        | —               | Ссылка на корневой DOM-элемент компонента                                                                                                 |
| zIndex?               | `number`                                                                 | —               | Задает слой `z-index`                                                                                                                     |
| visible?              | `false \| true`                                                          | —               | Делает попап видимым                                                                                                                      |
| scope?                | `RefObject<HTMLElement>`                                                 | `document.body` | Ссылка на DOM-элемент, в котором размещается попап<br>Важно, чтобы контейнер имел `position: relative` для корректного позиционирования   |
| forceRender?          | `false \| true`                                                          | —               | Вызывает дополнительный рендер после создания                                                                                             |
| onClose?              | `(event: KeyboardEvent \| MouseEvent, source: "esc" \| "click") => void` | —               | Обработчик, вызываемый после нажатия на клавишу Еsc либо мышкой на область вне контейнера                                                 |
| onClick?              | `(event: MouseEvent<HTMLDivElement, MouseEvent>) => void`                | —               | Обработчик, вызываемый при срабатывании события click                                                                                     |