
## Cookbook

### Каждый компонент должен реализовывать интерфейс `innerRef` & `controlRef`

Свойство `innerRef` должно возвращать ссылку на самый верхний элемент:

```tsx
const textinputRef = createRef()
const render = () => <Textinput innerRef={textinputRef} />
// textinputRef.current => <div class="Textinput">...</div>
```

Свойство `controlRef` должно возвращать ссылку на нативный контрол:

```tsx
const textinputRef = createRef()
const render = () => <Textinput controlRef={textinputRef} />
// textinputRef.current => <input class="Textinput-Control" />
```

### Все свойства интерфейса должны быть описаны в виде jsdoc

```ts
interface IBlockProps {
  /**
   * Описание свойства.
   * @default 'value'
   */
  property?: string;
}
```

### Использование defaultProps

Использование с `stateful component`:

```ts
import { Component, ComponentClass } from 'react'
import { Defaultize } from '../../typings/utils'
interface IBlockProps {
  property1?: string
  property2?: string
}
const defaultProps = {
  property1: 'value',
}
type DefaultProps = keyof typeof defaultProps
// Создаем тип, в котором свойства имеющие значения по умолчанию становятся required,
// это нужно, чтобы не добавлять проверки на наличие свойства в коде.
type BlockProps = Defaultize<IBlockProps, DefaultProps>
export const Block = class extends Component<BlockProps> {
  static defaultProps = defaultProps
  ...
// Приводим компонент к типу, в котором свойства имеющие значения по умолчанию остаются optional.
} as ComponentClass<IBlockProps>
```

Использование с `functional component`:

```ts
import React, { FC, RefObject, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import 'Block.scss';

export const cnBlock = cn('Block');

interface IBlockProps {
    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const Block: FC<IBlockProps> = ({
    className,
    ...props
}) => {

    return (
        <div {...props} className={cnBlock(null, [className])}>
            
        </div>
    )
}

Block.displayName = cnBlock();
```
