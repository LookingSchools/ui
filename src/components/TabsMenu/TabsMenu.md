# TabsMenu

<!-- description:start -->

Компонент для создания горизонтального меню.

<!-- description:end -->

## Когда использовать

С помощью компонента можно создать:

- Статическое меню с ссылками на другие страницы.
- Меню с использованием собственного JS-кода. Например, чтобы сделать пункт меню активным.
- Переключатель для вкладок `TabsPanes`.

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from "@godfreyd/takberi-ui/Theme"
import { theme } from "@godfreyd/takberi-ui/Theme/presets/default"

configureRootTheme({ theme })
```

Использование компонента:

```ts
// src/App.ts
import React, { useState } from "react"
import { compose } from "@bem-react/core"
import {
  TabsMenu as TabsMenuDesktop,
  withSizeM,
  withLayoutHoriz,
  withViewDefault,
} from "@godfreyd/takberi-ui/TabsMenu"

const TabsMenu = compose(
  withSizeM,
  withViewDefault,
  withLayoutHoriz
)(TabsMenuDesktop)

const App = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <TabsMenu
      size="m"
      view="default"
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

<!-- props:start -->

| Свойство   | Тип                           | Описание                                   |
| ---------- | ----------------------------- | ------------------------------------------ |
| activeTab? | `string`                      | Идентификатор активного пункта меню.       |
| tabs       | `ITabsMenuTabProps[]`         | Массив пунктов меню.                       |
| innerRef?  | `RefObject<HTMLUListElement>` | Ссылка на корневой DOM элемент компонента. |
| className? | `string`                      | Дополнительный класс.                      |

<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->

### layout

Задает расположение вкладок меню.

**Допустимые значения:** `"horiz"`.

### size

Задает размер меню.

**Допустимые значения:** `"m"`, `"s"`.

### theme

Задает стилевое оформление меню.

**Допустимые значения:** `"normal"`.

### view

Определяет внешний вид вкладок.

**Допустимые значения:** `"default"`.

<!-- modifiers:end -->
