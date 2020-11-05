# Suggest

Составной компонент Textinput + Menu.
Служит для реализации подсказки для пользовательского ввода текста

## Примеры использования

### Использование со статичным набором даннных:

```ts
// src/App.ts
import React, { useState } from 'react'
import { Select } from '@lookingschools/ui/Suggest'

const App = () => {
  const [value, setValue] = React.useState('');

    return (
        <>
            <Suggest
                data={['Каждый', 'Охотник', 'Желает', 'Знать','Где', 'Сидит', 'Фазан']}
                value={value}
                onChange={setValue}
            />
        </>
    );
}
```

{{%story::lego-draft-components-suggest-desktop--showcase%}}

### Использование с асинхронным запросом:

```ts
// src/App.ts
import React, { useState } from 'react'
import { Select } from '@yandex-lego/draft-components/Suggest'

const App = () => {
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<string[]>([]);

  React.useEffect(() => {
      if (value === '') {
          setData([]);
      } else if (data.length === 0) {
          setLoading(true);
          fetchData()
              .then((response) => {
                  setData(response.map((value) => value.name));
                  setLoading(false);
              });
      }
  }, [data.length, value]);

  return (
      <>
          <Suggest
              data={data}
              value={value}
              onChange={setValue}
              loading={loading}
          />
      </>
  );
}
```

{{%story::lego-draft-components-suggest-desktop--showcase-async%}}

## Свойства

| Свойство       | Тип                                 | По умолчанию      | Описание                                                                |
| -------------- | ----------------------------------- | ----------------- | ----------------------------------------------------------------------- |
| textinputSize? | `"s" \| "m"`                        | `"m"`             | Размер текстового поля.                                                 |
| menuSize?      | `"s" \| "m"`                        | `"m"`             | Размер меню.                                                            |
| valueKey?      | `string`                            | —                 | Свойство по которому фильтровать данные в случае использования Object[] |
| data           | `T[]`                               | —                 | Данные для отисовки меню-подсказки                                      |
| loading?       | `false \| true`                     | —                 | Состоянние загрузки                                                     |
| value          | `string`                            | —                 | Значение текстового пооля                                               |
| onChange       | `(value: string) => void`           | —                 | Обработчик на изменение текстового поля                                 |
| onRenderItem?  | `(value: any) => ReactNode`         | —                 | Переопределяет компонент MenuItem                                       |
| onFilter?      | `(data: T[], value: string) => T[]` | `onFilterDefault` | Обработчик для фильтрации данных в меню                                 |
