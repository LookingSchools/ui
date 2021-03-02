# Link

Компонент для создания ссылок.

## Пример использования

```js
// src/App.ts
import React from "react"
import { compose } from "@bem-react/core"
import { Link as LinkBase, withThemeDefault } from "@lookingschools/ui/Link"

// Композиция из различных модификаторов
const Link = compose(withThemeDefault)(LinkBase)

const App = () => {
  return (
    <Link theme="default" href="https://google.com">
      Yandex
    </Link>
  )
}
```
