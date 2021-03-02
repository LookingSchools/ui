# withOutsideClick

<!-- description:start -->

Хелпер для отслеживания кликов вне компонента.

<!-- description:end -->

### Базовое применение

```tsx
const WithOutsideClickComponent = withOutsideClick(Component)

export const Default = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button
        theme="primary"
        size="m"
        onClick={() => setVisible((prev) => !prev)}
      >
        Click
      </Button>
      <ComponentWithOutsideClick
        visible={visible}
        onOutsideClick={() => setVisible(false)}
        onEscapeKeyDown={() => setVisible(false)}
      />
    </>
  )
}
```

### Props

<!-- props:start -->

| Свойство         | Тип                              | По умолчанию | Описание                                                                                     |
| ---------------- | -------------------------------- | ------------ | -------------------------------------------------------------------------------------------- |
| visible?         | `boolean`                        | -            | Видимость компонента                                                                         |
| targetRef?       | `Ref<HTMLElement>`               | -            | Ссылка на корневой DOM-элемент компонента                                                    |
| onEscapeKeyDown? | `(event: KeyboardEvent) => void` | -            | Обработчик, вызывающийся после нажатия на escape                                             |
| onOutsideClick?  | `(event: MouseEvent) => void`    | -            | Обработчик, вызывающийся после клика вне компонента                                          |
| ignoreRefs?      | `RefObject<HTMLElement>[]`       | []           | Ссылки на DOM-элементы, в рамках которых не нужно отслеживать клик (например, `[anchorRef]`) |

<!-- props:end -->

### Обработчик нажатия вне компонента

TODO: Пример

### Обработчик нажатия Escape

TODO: Пример
