# Tags

Компонент для обрезки тэгов.

## Usage

Обрезка вычисляется по количеству строк

```tsx
<Tags className="max-width-anything">
  {items.map(item => (
    <Tag key={item} id={item} label={item} size="m" theme="default" onRemove={handleRemove} />
  ))}
</Tags>
```
