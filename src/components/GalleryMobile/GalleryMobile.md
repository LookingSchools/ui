# GalleryMobile

Компонент галерея изображений. Умеет:

- Пролистывать изображения свайпом
- Останавливаться ровно на середине изображения
- Отрендериться с изначальным показом заданного изображения
- Выводить пагинацию в виде точек под текущим изображением

## Пример использования

```typescript jsx
import React, { FC } from 'react'
import { GalleryMobile } from '@lookingschools/ui/GalleryMobile'

const items = [
  { src: 'image1-1x.png', srcSet: 'image1-2x.png' },
  { src: 'image2-1x.png', srcSet: 'image2-2x.png' },
  { src: 'image3-1x.png', srcSet: 'image3-2x.png' },
]

const MyComponent: FC = () => {
  return (
    <GalleryMobile className="my-GalleryMobile" items={items} activeIndex={2} />
  )
}
```

### Скелетон

```typescript jsx
import React, { FC } from 'react'
import { GalleryMobileSkeleton } from '@lookingschools/ui/GalleryMobile'

const App: FC = () => {
  return <GalleryMobileSkeleton className="my-GalleryMobile" />
}
```

## Пример

### Компонент

{{%story:::GalleryMobile--playground%}}

### Скелетон

{{%story:::GalleryMobile--skeleton%}}

## Свойства

| Свойство     | Тип                        | Описание                                      |
| ------------ | -------------------------- | --------------------------------------------- |
| items        | `Array<GalleryMobileItem>` | Информация об изображениях, в двух размерах   |
| activeIndex? | `number`                   | Номер стартового слайда                       |
| className?   | `string`                   | Дополнительный класс у корневого DOM-элемента |

```typescript
type GalleryMobileItem = {
  src: string
  srcSet?: string
  alt?: string
}
```

## CSS переменные

| Переменная                            | Тип     | Описание                      |
| ------------------------------------- | ------- | ----------------------------- |
| --GalleryMobile-item-height           | `px`    | Высота контейнера изображений |
| --GalleryMobile-item-width            | `px`    | Ширина контейнера изображений |
| --GalleryMobile-item-image-bg-color   | `color` | Цвет контейнера изображений   |
| --GalleryMobile-point-bg-color        | `color` | Цвет точек пагинации          |
| --GalleryMobile-point-active-bg-color | `color` | Цвет активной точки пагинации |
| --GalleryMobile-point-radius          | `px`    | Радиус точки пагинации        |
