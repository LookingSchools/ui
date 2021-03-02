# withTogglable

Хелпер позволяющий управлять состоянием открытия и закрытия.

### Базовое применение

```tsx
import React from "react"
import { withTogglable } from "@lookingschools/ui/withTogglable"

const ComponentWithToggable = withTogglable(
  ({ opened, setOpened, ...props }) => (
    <Component opened={opened} setOpened={setOpened} />
  )
)

export const Default = () => <ComponentWithToggable />
```

### Props

<!-- props:start -->

| Свойство   | Тип                             | По умолчанию | Описание                                      |
| ---------- | ------------------------------- | ------------ | --------------------------------------------- |
| opened?    | `true \| false`                 | `false`      | Состояние открытия                            |
| setOpened? | `(nextOpened: boolean) => void` | -            | Обработчик устанавливающий состояние открытия |

<!-- props:end -->
