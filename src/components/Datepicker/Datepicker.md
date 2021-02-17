# Datepicker

Компонент выбора даты. Открывается в модальном окне.

## Пример использования

### Базовый вариант

```typescript jsx
import React, { useState } from 'react';
import { compose, composeU } from '@bem-react/core';
import { Datepicker as DatepickerBase, DatepickerTypeSingle, DatepickerContainerPopup } from '@lookingschools/ui/Datepicker';

const Datepicker = compose(DatepickerTypeSingle, DatepickerContainerPopup)(DatepickerBase);

const App: React.FC = () => {
    const [visible, setVisible] = React.useState(false);

    const date1 = new Date('2020-05-23');
    const date2 = new Date(date.getFullYear(), date.getMonth() + 4, 10);

    const show = useCallback(() => setVisible(true), [setVisible]);
    const close = useCallback(() => setVisible(false), [setVisible]);

    return (
        <button onClick={() => show()}>Показать datepicker</button>
        <Datepicker
            visible={visible}
            type="single" // single | range
            container="popup" // popup | drawer (шторка)
            selected={date1} // выбранные даты
            borders={[date, date2]} // границы выбора
            onClose={() => close()}
            onChange={(date) => {
                close();
                console.log(date);
            }}
        />
    );
};
```

### Выбор диапазона

```typescript jsx
import React, { useState } from 'react';
import { compose, composeU } from '@bem-react/core';
import { Datepicker as DatepickerBase, DatepickerTypeRange, DatepickerContainerDrawer } from '@lookingschools/ui/Datepicker';

const Datepicker = compose(DatepickerTypeRange, DatepickerContainerDrawer)(DatepickerBase);

const App: React.FC = () => {
    const [visible, setVisible] = React.useState(false);

    const date1 = new Date('2020-05-23');
    const date2 = new Date(date.getFullYear(), date.getMonth() + 4, 10);

    const show = useCallback(() => setVisible(true), [setVisible]);
    const close = useCallback(() => setVisible(false), [setVisible]);

    return (
        <button onClick={() => show()}>Показать datepicker</button>
        <Datepicker
            visible={visible}
            type="range" // single | range
            container="drawer" // popup | drawer (шторка)
            selected={[date1, date2]} // выбранные даты
            borders={[date, date2]} // границы выбора
            onClose={() => close()}
            onChange={(date) => {
                close();
                console.log(date);
            }}
        />
    );
};
```

## Пример

{{%story:::tap-components-components-datepicker--playground%}}

## Свойства

| Свойство   | Тип                                                                                                                                                                                                                                                               | Описание                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| borders?   | `Date[]`                                                                                                                                                                                                                                                          | Границы выбора даты                                 |
| className? | `string`                                                                                                                                                                                                                                                          | Дополнительный класс у корневого DOM-элемента       |
| footer?    | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Футер                                               |
| header?    | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Заголовок                                           |
| onChange?  | `(selected: Date \| Date[]) => void`                                                                                                                                                                                                                              | Обработчик изменения даты                           |
| onClose?   | `() => void`                                                                                                                                                                                                                                                      | Обработчик закрытия модального окна и отмены выбора |
| selected?  | `Date \| Date[]`                                                                                                                                                                                                                                                  | Выбранная дата/даты                                 |
