# BottomBar

Компонент для отображения панели вкладок внизу экрана. Позволяет навигировать с любого экрана внутри приложения.

## Пример использования

```typescript jsx
import React, { useMemo } from "react"
import { Link, useHistory } from "react-router-dom"
import { BottomBar } from "@lookingschools/ui/BottomBar"

const MyBottomBar: React.FC = () => {
  const history = useHistory()

  const tabs = useMemo(
    () => [
      {
        text: "Главная",
        icon: <img src="./main.svg" />,
        activeIcon: <img src="./main_active.svg" />,
        isActive: history.location.pathname === "/",
        linkComponent: ({ children }) => <Link to="/">{children}</Link>,
      },
      {
        text: "Каталог",
        icon: <img src="./catalog.svg" />,
        activeIcon: <img src="./catalog_active.svg" />,
        isActive: history.location.pathname === "catalog",
        linkComponent: ({ children }) => <Link to="/catalog">{children}</Link>,
      },
      {
        text: "Избранное",
        icon: <img src="./fav.svg" />,
        activeIcon: <img src="./fav_active.svg" />,
        isActive: history.location.pathname === "fav",
        linkComponent: ({ children }) => <Link to="/fav">{children}</Link>,
      },
      {
        text: "Корзина",
        icon: <img src="./cart.svg" />,
        activeIcon: <img src="./cart_active.svg" />,
        isActive: history.location.pathname === "cart",
        linkComponent: ({ children }) => <Link to="/cart">{children}</Link>,
        tip: 3,
      },
      {
        text: "Профиль",
        icon: <img src="./profile.svg" />,
        activeIcon: <img src="./profile_active.svg" />,
        isActive: history.location.pathname === "profile",
        linkComponent: ({ children }) => <Link to="/profile">{children}</Link>,
      },
    ],
    [history.location.pathname]
  )

  return <BottomBar tabs={tabs} />
}
```

## Пример

{{%story:::bottombar--playground%}}

## Свойства

| Свойство | Тип              | Описание                                |
| -------- | ---------------- | --------------------------------------- |
| tabs?    | `BottomBarTab[]` | Массив табов для формирования BottomBar |

```typescript jsx
type BottomBarTab = {
  text: string
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
  tip?: number
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void
  linkComponent?: React.ComponentType
}
```

## BottomBarTab

### Свойства

| Поле           | Тип                                        | По-умолчанию | Описание                                                                 |
| -------------- | ------------------------------------------ | ------------ | ------------------------------------------------------------------------ |
| activeIcon?    | `React.ReactNode`                          |              | Иконка активного таба                                                    |
| icon?          | `React.ReactNode`                          |              | Иконка таба                                                              |
| isActive?      | `boolean`                                  | `false`      | Флаг активности таба                                                     |
| linkComponent? | `React.ComponentType`                      |              | Компонент, оборачивающий `children` в ссылку. Делает таб целиком ссылкой |
| onClick?       | `(event: MouseEvent<HTMLElement>) => void` |              | Обработчик клика на таб                                                  |
| text           | `string`                                   |              | Название таба, выводится под иконкой (если она есть)                     |
| tip?           | `number`                                   |              | Значение счетчика-подсказки над иконкой                                  |

## CSS-переменные

| Переменная                | Тип     | Описание                                          |
| ------------------------- | ------- | ------------------------------------------------- |
| --bottom-bar-color-accent | `color` | Цвет, в который окрашивается текст активного таба |
| --bottom-bar-text-color   | `color` | Цвет текста таба по умолчанию                     |
| --bottom-bar-tip-color    | `color` | Цвет текста на кружочке-счетчике                  |
| --bottom-bar-tip-bg-color | `color` | Цвет фона кружочка-счетчика                       |
