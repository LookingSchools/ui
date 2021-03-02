# useIsomorphicLayoutEffect

Хук запускающий `useLayoutEffect` или `useEffect` в зависимости от окружения.

### Базовое использование

```ts
// src/App.ts
import React, { useState } from "react"
import { useIsomorphicLayoutEffect } from "@lookingschools/ui/useIsomorphicLayoutEffect"

const App = () => {
  const [value, setValue] = useState("a")

  useIsomorphicLayoutEffect(() => {
    alert(value)
  }, [value])

  return <> {value} </>
}
```

### Props

<!-- props:start -->

| Свойство | Тип              | Описание                                                            |
| -------- | ---------------- | ------------------------------------------------------------------- |
| fn       | `EffectCallback` | Вызываемый callback. Запускается при обновлении списка зависимостей |
| deps?    | `DependencyList` | Список зависимостей. При обновлении запускает callback              |

<!-- props:end -->
