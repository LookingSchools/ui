# TabsPanes

Компонент для создания вкладок с разным содержимым.
Переключение между вкладками можно реализовать, например, с помощью `TabsMenu`, `Radiobox`, `Select`.

## Пример использования

```js
// src/App.ts
import React, { useState } from 'react'
import { TabsPanes } from '@lookingschools/ui/TabsPanes'

const App = () => {
  return (
    <TabsPanes
      activePane="1"
      panes={[
        { id: '1', content: 'Pane 1 content' },
        { id: '2', content: 'Pane 2 content' },
      ]}
    />
  )
}
```

## Примеры

### Переключение с помощью TabsMenu

{{%story::desktop:lego-components-tabspanes-desktop--tabsmenu%}}

### Переключение с помощью Radiobox

{{%story::desktop:lego-components-tabspanes-desktop--radiobox%}}

## Свойства

| Свойство    | Тип                         | Описание                                  |
| ----------- | --------------------------- | ----------------------------------------- |
| activePane? | `string`                    | Идентификатор отображаемой вкладки        |
| panes       | `ITabsPanesPaneProps[]`     | Набор вкладок                             |
| innerRef?   | `RefObject<HTMLDivElement>` | Ссылка на корневой DOM-элемент компонента |
| className?  | `string`                    | Дополнительный класс                      |
