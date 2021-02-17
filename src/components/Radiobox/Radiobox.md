# Radiobox

Компонент для создания радиопереключателя.

## Пример использования

```js
// src/App.ts
import React, { useState } from 'react'
import { compose } from '@bem-react/core'
import {
  Radiobox as RadioboxBase,
  withSizeM,
  withThemeDefault,
} from '@lookingschools/ui/Radiobox/'

const Radiobox = compose(withSizeM, withThemeDefault)(RadioboxBase)

const App = () => {
  const [value, setValue] = useState('value1')

  return (
    <Radiobox
      size="m"
      theme="default"
      value={value}
      options={[
        { label: 'Радио 1', value: 'value1' },
        { label: 'Радио 2', value: 'value2' },
        { label: 'Радио 3', value: 'value3' },
      ]}
      onChange={event => setValue(event.target.value)}
    />
  )
}
```

## Примеры

### Оформление радиопереключателя

Для различного оформления радиопереключателей используйте модификатор `theme`.

{{%story::desktop:lego-components-radiobox-desktop--theme%}}

### Размер радиопереключателя

Чтобы изменить размер радиопереключателя, используйте модификатор `size`.

{{%story::desktop:lego-components-radiobox-desktop--size%}}

## Свойства

| Свойство   | Тип                                                                                                                                                                                                                                                               | По умолчанию | Описание                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| options?   | `RadioOptionProps[]`                                                                                                                                                                                                                                              | `[]`         | Набор переключателей; можно использовать вместо `children`                                  |
| innerRef?  | `(instance: HTMLSpanElement) => void \| RefObject<HTMLSpanElement>`                                                                                                                                                                                               | —            | Ссылка на корневой DOM-элемент компонента                                                   |
| disabled?  | `false \| true`                                                                                                                                                                                                                                                   | —            | Неактивное состояние всей группы переключетелей                                             |
| children?  | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Набор переключателей c использованием элемента `Radio`; можно использовать вместо `options` |
| className? | `string`                                                                                                                                                                                                                                                          | —            | Дополнительный класс у корневого DOM-элемента                                               |
| value?     | `string`                                                                                                                                                                                                                                                          | —            | Текущее выбранное значение в группе                                                         |
| name?      | `string`                                                                                                                                                                                                                                                          | —            | Имя для всех элементов `Radio`                                                              |
| onChange?  | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                  | —            | Коллбек, который срабатывает при изменении значения                                         |

### Radio

| Свойство    | Тип                                                                   | По умолчанию | Описание                                            |
| ----------- | --------------------------------------------------------------------- | ------------ | --------------------------------------------------- |
| className?  | `string`                                                              | —            | Дополнительный класс у корневого DOM-элемента       |
| children    | `ReactNode`                                                           | —            | Текст подписи к переключателю                       |
| name?       | `string`                                                              | —            | Имя переключателя                                   |
| disabled?   | `false \| true`                                                       | —            | Неактивное состояние переключателя                  |
| value       | `string`                                                              | —            | Значение переключателя                              |
| innerRef?   | `(instance: HTMLLabelElement) => void \| RefObject<HTMLLabelElement>` | —            | Ссылка на корневой DOM-элемент компонента           |
| controlRef? | `(instance: HTMLInputElement) => void \| RefObject<HTMLInputElement>` | —            | Ссылка на нативный DOM-элемент нативного инпута     |
| checked?    | `false \| true`                                                       | —            | Состояние переключателя                             |
| onChange?   | `(event: ChangeEvent<HTMLInputElement>) => void`                      | —            | Коллбек, который срабатывает при изменении значения |
| onClick?    | `(event: MouseEventHandler<HTMLLabelElement>) => void`                | —            | Коллбек, который срабатывает при клике на контейнер |
| autoFocus?  | `false \| true`                                                       | —            | Устанавливает фокус в переключатель при монтировани |
