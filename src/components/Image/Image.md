# Image

Компонент для вставки изображения.

- Пока загружается картинка, пользователь будет видеть `<stub/>`
- После загрузки картинки она будет плавно отображена поверх `<stub/>`.
  После плавного показана картинки `<stub/>` будет удалён из `DOM`
- Если картинка загружается из кэша, то пользователь увидит сразу картинку без показа `<stub/>`
- Если картинку не удалось загрузить, то покажется стандартная картинка из свойства `fallback`.

## Пример использования

```jsx
// src/App.ts
import React from "react"
import { Image } from "@lookingschools/ui/Image"

// Использование компонента в вашем приложении
const App = () => (
  <Image
    src="https://yastatic.net/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png"
    src2x="https://yastatic.net/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png"
    alt="Alternative text"
  />
)
```

## Примеры

### Ширина и высота изображения

Чтобы задать ширину, высоту и скругления изображения, используйте свойства `width`, `height` и `borderRadius`.

{{%story::desktop:lego-components-image-desktop--width-and-height%}}

### Адаптивное изображение

Чтобы вставить адаптивное изображение, используйте свойства `sizes` и `srcSet`.

Изображение для ретины `src2x`.

{{%story::desktop:lego-components-image-desktop--sizes-and-srcset%}}

### Заглушки для избражений

Компонент состоит из трех частей:

```html
<container>
  <img />
  <stub />
</container>
```

```typescript jsx
import React, { FC } from "react"
import { Image } from "@lookingschools/ui/Image"

const App: FC = () => {
  return <Image className="my-image" stub={<MyImageStub />} />
}
```

## Свойства

| Свойство        | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| innerRef?       | `RefObject<HTMLImageElement>`                                                                                                                                                                                                                                     | Ссылка на корневой DOM-элемент компонента                                                                                                                                                                                                                                                    |
| src?            | `string`                                                                                                                                                                                                                                                          | Ссылка на изображение                                                                                                                                                                                                                                                                        |
| srcSet?         | `string`                                                                                                                                                                                                                                                          | Набор источников для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `srcSet` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-srcset) |
| sizes?          | `string`                                                                                                                                                                                                                                                          | Набор размеров для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `sizes` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-sizes)     |
| src2x?          | `string`                                                                                                                                                                                                                                                          | URL картинки для экранов с высокой плотностью пикселей = srcSet: "url 2x". srcSet имеет приоритет.                                                                                                                                                                                           |
| fallbackSrc?    | `string`                                                                                                                                                                                                                                                          | Ссылка на изображение при неудачной загрузке                                                                                                                                                                                                                                                 |
| className?      | `string`                                                                                                                                                                                                                                                          | Дополнительный класс                                                                                                                                                                                                                                                                         |
| imageClassName? | `string`                                                                                                                                                                                                                                                          | Дополнительный класс для изображения                                                                                                                                                                                                                                                         |
| stub?           | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Компонент для отображения во время загрузки картинки                                                                                                                                                                                                                                         |
| alt?            | `string`                                                                                                                                                                                                                                                          | Альтернативный текст                                                                                                                                                                                                                                                                         |
| ariaLabel?      | `string`                                                                                                                                                                                                                                                          | атрибут aria-label                                                                                                                                                                                                                                                                           |
| onClick?        | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | обработчик клика                                                                                                                                                                                                                                                                             |
| loading?        | `"lazy" \| "eager" \| "auto"`                                                                                                                                                                                                                                     | атрибут loading у изображения                                                                                                                                                                                                                                                                |
| width?          | `string \| number`                                                                                                                                                                                                                                                | Ширина изображения                                                                                                                                                                                                                                                                           |
| height?         | `string \| number`                                                                                                                                                                                                                                                | Высота изображения                                                                                                                                                                                                                                                                           |
| borderRadius?   | `string \| number`                                                                                                                                                                                                                                                | Скругления изображения                                                                                                                                                                                                                                                                       |
