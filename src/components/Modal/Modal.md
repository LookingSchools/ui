# Modal

<!-- description:start -->

Используется для создания всплывающих модальных окон.

<!-- description:end -->

## Пример использования

```js
import React from "react"
import { compose } from "@bem-react/core"
import {
  Modal as ModalBase,
  withThemeDefault,
} from "@takberi-ui/components/Modal"
import { withOutsideClick } from "@takberi-ui/components/withOutsideClick"
import { withZIndex } from "@takberi-ui/components/withZIndex"

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

<!-- props:start -->

| Свойство              | Тип                                                                                                                                                                                                                                                               | По умолчанию    | Описание                                                                                                                                                                                                                                                                                                              |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contentVerticalAlign? | `"top" \| "middle" \| "bottom"`                                                                                                                                                                                                                                   | `'middle'`      | Выравнивание контента по вертикали.                                                                                                                                                                                                                                                                                   |
| hasAnimation?         | `false \| true`                                                                                                                                                                                                                                                   | `true`          | Добавляет анимацию при открытии модального окна.                                                                                                                                                                                                                                                                      |
| addonAfter?           | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —               | Дополнительный контент после содержимого попапа.                                                                                                                                                                                                                                                                      |
| addonBefore?          | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —               | Дополнительный контент перед содержимым попапа.                                                                                                                                                                                                                                                                       |
| direction?            | `"bottom-left" \| "bottom-center" \| "bottom-right" \| "top-left" \| "top-center" \| "top-right" \| "right-top" \| "right-center" \| "right-bottom" \| "left-top" \| "left-center" \| "left-bottom"`                                                              | —               | Задает направление хвостика. Например, если указано значение `bottom-center` — хвостик выходит из центра снизу.<br>Свойство `direction` необходимо использовать без модификатора `_target_anchor`. Чтобы задать направление раскрытия для попапа с модификатором `_target_anchor`, используйте свойство `directions`. |
| forceRender?          | `false \| true`                                                                                                                                                                                                                                                   | —               | Вызывает дополнительный рендер после создания.                                                                                                                                                                                                                                                                        |
| hasTail?              | `false \| true`                                                                                                                                                                                                                                                   | —               | Включает/отключает хвостик у попапа.                                                                                                                                                                                                                                                                                  |
| innerRef?             | `RefObject<HTMLDivElement>`                                                                                                                                                                                                                                       | —               | Ссылка на корневой DOM-элемент компонента.                                                                                                                                                                                                                                                                            |
| keepMounted?          | `false \| true`                                                                                                                                                                                                                                                   | `true`          | Сохраняет контейнер в DOM после создания.                                                                                                                                                                                                                                                                             |
| position?             | `{ top?: number; left?: number; bottom?: number; right?: number; }`                                                                                                                                                                                               | —               | Задает позицию попапа. Свойство `position` необходимо использовать без модификатора `_target_anchor`.                                                                                                                                                                                                                 |
| scope?                | `RefObject<HTMLElement>`                                                                                                                                                                                                                                          | `document.body` | Ссылка на DOM-элемент, в котором размещается попап.<br>Важно, чтобы контейнер имел `position: relative` для корректного позициоинирования.                                                                                                                                                                            |
| tailPosition?         | `{ top: number; left: number; }`                                                                                                                                                                                                                                  | —               | Задает позицию хвостика. Свойство `tailPosition` необходимо использовать без модификатора `_target_anchor`.                                                                                                                                                                                                           |
| tailRef?              | `RefObject<HTMLDivElement>`                                                                                                                                                                                                                                       | —               | Ссылка на DOM-элемент хвостика.                                                                                                                                                                                                                                                                                       |
| tailSize?             | `number`                                                                                                                                                                                                                                                          | —               | Задает размер хвостика.                                                                                                                                                                                                                                                                                               |
| targetRef?            | `RefObject<HTMLElement>`                                                                                                                                                                                                                                          | —               | Ссылка на DOM-элемент, в котором не отслеживаются нажатия. Используется с `withOutsideClick`.                                                                                                                                                                                                                         |
| visible?              | `false \| true`                                                                                                                                                                                                                                                   | —               | Делает попап видимым.                                                                                                                                                                                                                                                                                                 |
| zIndex?               | `number`                                                                                                                                                                                                                                                          | —               | Задает слой `z-index`.                                                                                                                                                                                                                                                                                                |

<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->

### theme

Определяет тему модального окна.
На уровне `desktop` отвечает за анимацию его открытия/закрытия.

**Допустимые значения:** `"default"`.

<!-- modifiers:end -->

## Примечание

- Функциональность модального окна основана на компоненте `Popup`.
- Позиционирование компонента выполняется только с помощью CSS.
- Анимация открытия реализована только на уровне `desktop`.
- В модальном окне нет зацикливания фокуса.

### Скрытие ползунков страницы при открытии модального окна

У компонента `Modal` отсутствует встроенный механизм скрытия ползунков на странице.

### Проблема с пролистыванием страницы на iOS и Android

Для позиционирования модального окна поверх контента страницы в компоненте `Modal` используется CSS-стиль `position: fixed`.
Его использование в браузерах на iOS и Android устройствах приводит к тому, что при прокрутке содержимого модального окна прокручивается и страница под ним. Это происходит из-за того, что на iOS и Android нельзя убрать прокрутку `<body>`.
Даже если применить `overflow: hidden`, страница все равно будет прокручиваться.

Варианты решения:

1. При открытии модального окна замените `position:fixed; height: <window height>; overflow:hidden` на `<body>`.
   **Недостаток:** текущее положение на странице собьется, поэтому его нужно будет запоминать и выставлять заново. При этом страница под модальным окном будет «скакать»: при его открытии она прокрутится в самое верхнее положение, а при закрытии - вернется в предыдущее.
2. Позиционируйте модальное окно с помощью `position: absolute` и сделайте так, чтобы контент модального окна прокручивался вместе со страницей.
   **Недостаток:** можно прокрутить модальное окно далеко вниз или вверх и «потерять» его.
3. Предотвратите события `touchmove`, которые вызывают прокрутку не контента попапа, а самой страницы.
   **Недостаток:** невозможно отличить события, которые вызывают прокрутку модального окна от событий, которые вызывают прокрутку страницы, т.к. технически они одинаковы.
