
# useUpdateEffect

Хук эффекта, который запускается после первого рендера.

### Базовое использование

```ts
// src/App.ts
import React, { useState } from 'react'
import { useUpdateEffect } from '@yandex-lego/components/useUpdateEffect'

const App = () => {
  const [value, setValue] = useState('a')

  useUpdateEffect(() => {
      alert(value)
  }, [value])

  return (
      <> {value} </>
  )
}
```

### Props

<!-- props:start -->
| Свойство   | Тип                    | Описание                                                                                                                                |
| ---------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| fn   | `EffectCallback`        | Вызываемый callback. Запускается при обновлении списка зависимостей                                                              |
| deps   | `DependencyList`        | Список зависимостей. При обновлении запускает callback                                                              |
<!-- props:end -->
