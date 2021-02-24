# List

Компонент для отображения списка. Служит оберткой для элементов списка.

С его помощью можно вывести линию под всеми элементами списка, кроме последнего.

## Пример использования

### Компонент

```typescript jsx
import React from 'react';
import { List, ListItem } from '@lookingschools/ui/List';

const App: React.FC = () => {
    return  (
        <List>
            <ListItem>Распродажи</ListItem>
            <ListItem>Новинки</ListItem>
            <ListItem>Выйти</ListItem>
        </List>
    );
};
```

### Скелетон

```typescript jsx
import React from 'react';
import { ListSkeleton } from '@lookingschools/ui/List';

const App: React.FC = () => {
    return <ListSkeleton count={6} />;
};
```

## Примеры

### Компонент

{{%story:::list--playground%}}

### Скелетон

{{%story:::list--skeleton%}}

## Свойства

### Компонент

| Свойство   | Тип      | Описание                                      |
| ---------- | -------- | --------------------------------------------- |
| className? | `string` | Дополнительный класс у корневого DOM-элемента |

### Скелетон

| Свойство   | Тип      | Описание                                      |
| ---------- | -------- | --------------------------------------------- |
| className? | `string` | Дополнительный класс у корневого DOM-элемента |
| count?     | `number` | Количество элементов в скелетоне              |

## CSS-переменные

### Компонент

| Переменная                         | Тип          | Описание                                                  |
| ---------------------------------- | ------------ | --------------------------------------------------------- |
| $list-line-separator-color        | `color`      | Цвет разделяющей элементы линии по умолчанию              |
| $list-item-margin                 | `px`         | Расстояние между двумя соседними элементами               |
| $list-item-icon-content-margin    | `px`         | Минимальное расстояние между иконкой и содержимым         |
| $list-item-content-arrow-margin   | `px`         | Минимальное расстояние между содержимым и стрелкой        |
| $list-item-start-end-margin       | `px`         | Минимальное расстояние между началом и концом содержимого |
| $list-item-content-padding-top    | `px`         | Отступ сверху содержимого                                 |
| $list-item-content-padding-bottom | `px`         | Отступ снизу содержимого                                  |
| $list-item-arrow-color            | `color`      | Цвет стрелки                                              |
| $list-item-arrow-width            | `px`         | Ширина иконки стрелки                                     |
| $list-item-arrow-height           | `px`         | Высота иконки стрелки                                     |
| $list-item-end-align              | `align-self` | Выравнивание конца содержимого                            |

### Скелетон

| Переменная                  | Тип  | Описание                                        |
| --------------------------- | ---- | ----------------------------------------------- |
| $list-skeleton-item-margin | `px` | Расстояние между соседними элементами скелетона |
| $list-skeleton-item-height | `px` | Высота элемента скелетона                       |

## ListItem

Компонент для отображения элемента списка.

С его помощью можно:

- Вывести в левой части иконку элемента.
- Вывести контент в начало и/или конец содержимого.
- Вывести в правой части иконку стрелки.
- Вывести линию под элементом.
- Сделать элемент ссылкой.
- Обрабатывать нажатие на элемент с помощью `callback`-функции.

### Пример использования

```typescript jsx
import React from 'react';
import { List, ListItem, SeparatorMode } from '@lookingschools/ui/List';

const App: React.FC = () => {
    return  (
        <List>
            <ListItem
                linkComponent={({ children }) => <a href="https://yandex.ru" target="_blank">{children}</a>}
                hasArrow
                separatorMode={SeparatorMode.content}
            >
                Яндекс
            </ListItem>

            <ListItem
                className="city-button"
                icon={<img src="/city.png" alt="city" />}
                onClick={() => console.log('City clicked!')}
            >
                Москва<br/>
                Выбрать город
            </ListItem>

            <ListItem
                end={<input type="checkbox" />}
            >
                Получать рассылку
            </ListItem>
        </List>
    );
};
```

#### Пример использования со ссылкой из `react-router-dom`

```typescript jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, SeparatorMode } from '@lookingschools/ui/List';

const App: React.FC = () => {
    return  (
        <List>
            <ListItem
                linkComponent={({ children }) => <Link to="/sales">{children}</Link>}
                hasArrow
                separatorMode={SeparatorMode.content}
            >
                Распродажи
            </ListItem>

            <ListItem
                linkComponent={({ children }) => <Link to="/new">{children}</Link>}
                hasArrow
                separatorMode={SeparatorMode.content}
            >
                Новинки
            </ListItem>
        </List>
    );
};
```

### Свойства

| Свойство       | Тип                               | По умолчанию         | Описание                                                                      |
| -------------- | --------------------------------- | -------------------- | ----------------------------------------------------------------------------- |
| className?     | `string`                          |                      | Дополнительный класс у корневого DOM-элемента                                 |
| end?           | `ReactNode`                       |                      | Контент, который будет помещен в конец (правую часть) содержимого элемента    |
| hasArrow?      | `boolean`                         | `false`              | Выводить ли стрелку у элемента                                                |
| icon?          | `ReactNode`                       |                      | Иконка элемента                                                               |
| linkComponent? | `React.ComponentType`             |                      | Компонент, оборачивающий `children` в ссылку. Делает элемент целиком ссылкой. |
| onClick?       | `(event: SyntheticEvent) => void` |                      | Обработчик нажатия на элемент                                                 |
| separator?     | `ReactNode`                       | Линия в 1px          | Позволяет переопределить разделитель под элементом                            |
| separatorMode? | `SeparatorMode`                   | `SeparatorMode.full` | Настройка ширины и наличия разделителя                                        |

```typescript jsx
enum SeparatorMode {
    none = 'none', // разделителя нет
    full = 'full', // разделитель на всю ширину
    content = 'content', // разделитель начинается после иконки
}
```
