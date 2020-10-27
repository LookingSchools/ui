# Link

Компонент для создания ссылок.

## Пример использования

```js
// src/App.ts
import React from "react"
import { compose } from "@bem-react/core"
import { Link as LinkBase, withThemeDefault } from "@godfreyd/takberi-ui/Link"

// Композиция из различных модификаторов
const Link = compose(withThemeDefault)(LinkBase)

const App = () => {
  return (
    <Link theme="default" href="http://yandex.ru">
      Yandex
    </Link>
  )
}
```
