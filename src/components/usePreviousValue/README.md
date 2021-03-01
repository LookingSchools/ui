
# usePreviousValue

Хук, возвращающий значение свойства из предыдущего рендера.

### Базовое применение

```ts
// src/App.ts
import React, { useState } from 'react'
import { usePreviousValue } from '@lookingschools-lego/components/usePreviousValue'

const App = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePreviousValue(count)

  return (
      <>
        Текущее значение: {count}. <br />
        Предыдущее значение: {prevCount}.
      </>
  )
}
```

### Props

<!-- props:start -->
| Свойство   | Тип                    | Описание                                                                                                                                |
| ---------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| value   | `any`        | Значение, которое будет сохранено и возвращено в следующий рендер.                                                              |
<!-- props:end -->
