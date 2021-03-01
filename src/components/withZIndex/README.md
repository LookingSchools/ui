# withZIndex

Хелпер позволяющий управлять z-index'ом компонента.

### Базовое применение

```tsx
import React from 'react';
import { withZIndex } from '@lookingschools/ui/withZIndex';

const ComponentWithToggable = withZIndex(({ zIndex, innerRef }) => (
    <Component style={{ zIndex }} ref={innerRef} />
));

export const Default = () => <ComponentWithToggable visible zIndexGroupLevel={3} />;
```

### Props

<!-- props:start -->
| Свойство          | Тип                              | По умолчанию  | Описание                                                                                     |
| ----------------- | -------------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| visible?          | `true \| false`                        | `false`             | Видимость компонента                                                                |
| innerRef?          | `Ref<HTMLElement>`                        | -             | Ссылка на DOM элемент компонента                                                               |
| zIndexGroupLevel?          | `number`                        | `0`             | Уровень слоев `z-index` для компонент                                                          |
<!-- props:end -->
