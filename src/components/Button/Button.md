# Button

Кнопка.

{{%story::desktop:lookingschools-components-button-desktop--theme%}}

## Пример вызова

```js
import React from "react"
import { compose } from "@bem-react/core"
import {
  Button as ButtonBase,
  withThemeLink,
  withSizeM,
} from "@lookingschools/ls-ui/Button"

// Композиция из различных модификаторов
const Button = compose(withThemeLink, withSizeM)(ButtonBase)

// Вызов компонента
const App = () => <Button theme="default" size="m" children="Button" />
```

## Модификаторы

### size

Задает размер кнопки. Влияет на отступы и размер шрифта.

Допустимые значения: `"s"`, `"m"`, `"l"`.

{{%story::desktop:lookingschools-components-button-desktop--size%}}

### theme

Задает стилевое оформление кнопки.

**Допустимые значения:** `"default"`, `"action"`, `"link"`.

{{%story::desktop:lookingschools-components-button-desktop--theme%}}

### pin

Скругляет границы кнопки.

**Допустимые значения:** `"circle-circle"`, `"circle-clear"`, `"clear-circle"`, `"circle-brick"`, `"brick-circle"`.

{{%story::desktop:lookingschools-components-button-desktop--pin%}}

## Свойства
