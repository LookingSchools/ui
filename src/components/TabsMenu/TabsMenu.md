# TabsMenu

Компонент для создания горизонтального меню.

## Когда использовать

С помощью компонента можно создать:

- Статическое меню с ссылками на другие страницы.
- Меню с использованием собственного JS-кода. Например, чтобы сделать пункт меню активным.
- Переключатель для вкладок `TabsPanes`.

## Пример использования

Использование компонента:

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  TabsMenu as TabsMenuDesktop,
  withSizeM,
  withLayoutHoriz,
  withThemeDefault,
} from "@lookingschools/ui/TabsMenu"

const TabsMenu = compose(
  withSizeM,
  withThemeDefault,
  withLayoutHoriz
)(TabsMenuDesktop)

const App = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <TabsMenu
      size="m"
      theme="default"
      layout="horiz"
      activeTab={activeTab}
      tabs={[
        { id: "tab1", onClick: () => setActiveTab("tab1"), content: "Tab 1" },
        { id: "tab2", onClick: () => setActiveTab("tab2"), content: "Tab 2" },
      ]}
    />
  )
}
```

## Примеры

### Размер меню

Чтобы задать размер горизонтального меню, используйте модификатор `size`.

{{%story::desktop:lego-components-tabsmenu-desktop--size%}}

## Свойства

| Свойство   | Тип                           | Описание                                  |
| ---------- | ----------------------------- | ----------------------------------------- |
| activeTab? | `string`                      | Идентификатор активного пункта меню       |
| tabs       | `ITabsMenuTabProps[]`         | Массив пунктов меню                       |
| innerRef?  | `RefObject<HTMLUListElement>` | Ссылка на корневой DOM-элемент компонента |
| className? | `string`                      | Дополнительный класс                      |
