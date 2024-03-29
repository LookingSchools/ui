# withDebounceInput

Хелпер добавляющий возможность откладывать выполнение `onChange` у компонента.

### Базовое применение

```tsx
const DebouncedInput = withDebounceInput(Textinput)

export const Default = () => {
  const [value, setValue] = useState("")

  return (
    <>
      <DebouncedInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        debounceTimeout={100}
        minLength={5}
        forceNotifyByEnter
      />
    </>
  )
}
```

### Props

<!-- props:start -->

| Свойство            | Тип             | По умолчанию | Описание                                                   |
| ------------------- | --------------- | ------------ | ---------------------------------------------------------- |
| minLength?          | `number`        | 0            | Минимальная длина строки для вызова `onChange`             |
| debounceTimeout?    | `number`        | 0            | Минимальная время между вызывами `onChange` в милисекундах |
| forceNotifyByEnter? | `true \| false` | false        | Форсировать вызов `onChange` по нажатию Enter              |
| forceNotifyOnBlur?  | `true \| false` | false        | Форсировать вызов `onChange` при потере фокуса             |

<!-- props:end -->
