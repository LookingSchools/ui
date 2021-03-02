# scroll-locker

import { Default as useScrollLockerDefault } from '../**examples**/default';
import useScrollLockerDefaultSource from '!!raw-loader!../**examples**/default';

**Основные возможности:**

- резервирует место под полосу прокрутки
- работает на десктоп устройствах, включая IE
- работает на iOS-устройствах
- можно передать пользовательский HTML-элемент, на котором необходимо запретить прокрутку

## Использование

В зависимости от типа компонента используйте подходящий вариант:

### Общий пример

```ts
// Испортируйте модуль.
import * as ScrollLocker from "@lookingschools/ui/lib/scroll-locker"

// Получите элемент, для которого хотите запретить прокрутку.
const scrollableElement = document.querySelector("#someElementId")

// В обработчике событий заблокируйте прокрутку на элементе
// (например, при открытии модального окна или навигационного меню)
ScrollLocker.lock(scrollableElement)

// В обработчике событий отмените блокировку на элементе
// (например, при закрытии модального окна или навигационного меню)
ScrollLocker.unlock(scrollableElement)
```

### Классовый компонент

<Example
    component={useScrollLockerDefault}
    source={useScrollLockerDefaultSource}
/>

### Функциональный компонент

При работе с функциональными компонентами используйте реакт-хук [usePreventScroll](/hooks/use-prevent-scroll/usage).
