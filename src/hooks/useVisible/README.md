# useVisible

Возвращает флаг, указывающий, виден ли компонент в области видимости браузерного окна.

Может принимать 3 значения:
- `true` - элемент виден в области видимости браузера;
- `false` - элемент не виден в области видимости браузера;
- `undefined` - состаяние не определено (еще не начали следить за элементом);

## Пример использования

```typescript jsx
import React, { useRef, useCallback } from 'react';
import { useVisible } from '@yandex-int/tap-components/hooks';

const Component: React.FC = () => {
    const ref = useRef();
    const isVisible = useVisible(ref);

    return <div ref={ref} />;
};
```

## Параметры

```typescript
useVisible(ref, options);
```

| Свойство     | Тип                                    | Описание                                                       |
| ------------ | -------------------------------------- | -------------------------------------------------------------- |
| ref          | `React.RefObject<HTMLElement>`         | Ссылка на отслеживаемый элемент                                |
| options?     | `RIntersectionObserverInit`            | Параметры для IntersectionObserver                             |