# Skeleton

Базовый компонент для построения скелетонов. Можно настроить цвет скелетона и анимацию.

## Пример использования

### Rect

```typescript jsx
import React from "react"
import { Rect } from "@lookingschools/ui/Skeleton"

const App: React.FC = () => {
  return (
    <Rect
      className="mix-for-element"
      width={128}
      height={64}
      borderRadious={4}
    />
  )
}
```

### Text

```typescript jsx
import React from "react"
import { Text } from "@lookingschools/ui/Skeleton"

const App: React.FC = () => {
  return <Text className="mix-for-element" width={64} size={32} />
}
```

## Пример

### Компонент Rect

{{%story:::skeleton--rect%}}

### Компонент Text

{{%story:::skeleton--text%}}

## Свойства

### Компонент Rect

| Свойство      | Тип                | Описание                                      |
| ------------- | ------------------ | --------------------------------------------- |
| borderRadius? | `number \| string` | Скругления                                    |
| className?    | `string`           | Дополнительный класс у корневого DOM-элемента |
| height?       | `number \| string` | Высота                                        |
| width?        | `number \| string` | Ширина                                        |

### Компонент Text

| Свойство   | Тип                | Описание                                      |
| ---------- | ------------------ | --------------------------------------------- |
| className? | `string`           | Дополнительный класс у корневого DOM-элемента |
| size?      | `number \| string` | Высота                                        |
| width?     | `number \| string` | Ширина                                        |

## CSS-переменные

| Переменная           | Тип         | Описание           |
| -------------------- | ----------- | ------------------ |
| --skeleton-animation | `animation` | Анимация скелетона |
| --skeleton-color     | `color`     | Цвет скелетона     |
