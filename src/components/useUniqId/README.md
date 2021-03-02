# useUniqId

Хук `useUniqId` используется для генерации уникальных `id` с читаемым префиксом.
Можно назначить уникальные `id`, используя имя компонента в качестве префикса, чтобы можно было удобно определять компонент при дебаге.

## Базовое использование

```ts
import React from "react"

import { useUniqId } from "@lookingschools/ui/useUniqId"

export const Default = () => {
  const id = useUniqId("componentName")

  return <div id={id}>Block</div>
}
```

## Props

<!-- props:start -->

| Свойство | Тип      | Описание                                                    |
| -------- | -------- | ----------------------------------------------------------- |
| prefix   | `string` | Префикс для генерации уникального id (по умолчанию `xuniq`) |

<!-- props:end -->
