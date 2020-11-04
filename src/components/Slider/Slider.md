# Slider

Компонент-листалка. Умеет:

- Пролистывать дочерние элементы свайпом
- Останавливаться ровно на середине дочернего элемента
- Отрендериться с изначальным показом заданного элемента (слайда)

## Пример использования

```ts
import React from "react"
import { Slider } from '@lookingschools/ui/Slider"

const slides = [
  { src: "image1-1x.png", src2x: "image1-2x.png" },
  { src: "image2-1x.png", src2x: "image2-2x.png" },
  { src: "image3-1x.png", src2x: "image3-2x.png" },
]

const MyComponent: React.FC = () => {
  return (
    <Slider className="my-slider" activeIndex={2}>
      {slides.map((slide, index) => (
        <img
          key={`item-${index}`}
          src={slide.src}
          srcSet={`${slide.src2x} 2x`}
        />
      ))}
    </Slider>
  )
}
```

## Пример

### Компонент

{{%story:::tap-components-e-commerce-slider--playground%}}

## Свойства

| Свойство       | Тип                        | Описание                                      |
| -------------- | -------------------------- | --------------------------------------------- |
| children       | `Array<React.ReactNode>`   | Элементы слайдов                              |
| className?     | `string`                   | Дополнительный класс у корневого DOM-элемента |
| activeIndex?   | `number`                   | Номер стартового слайда                       |
| onSlideChange? | `(index: number) => void;` | Callback при смене активного слайда           |
