# Badge

Значок в правом верхнем углу своего дочернего элемента.

{{%story::desktop:takberi-components-badge-desktop--color%}}

## Import

```js
import Badge from "@godfreyd/takberi-ui/Badge"
// or
import { Badge } from "@godfreyd/takberi-ui"
```

## Пример

```js
import { Badge } from "@godfreyd/takberi-ui"
import { Icon } from "@godfreyd/takberi-ui"

;<Badge badgeContent={4} color="primary">
  <Icon favorite width={27} height={24} />
</Badge>
```

## Свойства

| Свойство     | Допустимые <br/>значения | Значение <br/> по умолчанию | Описание                                               |
| ------------ | ------------------------ | --------------------------- | ------------------------------------------------------ |
| badgeContent | `number`                 |                             | Содержимое, отображаемое внутри значка                 |
| children ✱   | `node`                   |                             | Значок будет добавлен относительно этого HTML-элемента |
| color        | `'default'`, `'primary'` | `'default'`                 | Цвет фона                                              |
| component    | `elementType`            | `'span'`                    | HTML-элемент для обертки                               |
| invisible    | `bool`                   | `false`                     | Если `true`, значок будет скрыт                        |
| max          | 2                        | 99                          | Максимальное количество для показа                     |
| showZero     | `bool`                   | `false`                     | Если `true`, то при нулевом значении будет показ 0     |
| variant      | `'dot'` , `'standard'`   | `'standard'`                | Вариант отображения                                    |

✱ — Обязательное свойство.
