# usePopper

Реакт-хук, реализующий позиционирование попапа при помощи библиотеки [popper.js](https://popper.js.org/).

## 🛠 Поставляемые модификаторы

* `applyMinWidth` — Модификатор, устанавливающий минимальную ширину попапа относительно якоря.
* `applyMaxHeight` — Модификатор, устанавливающий оптимальную высоту попапа в пределах экрана.

## 🚦 Старые браузеры

Для корректной работы в ie11 необходимо использовать на проекте следующие полифилы: `Array.find`, `Promise`, `Object.assign`.

## ☄️ Публичный API

* `usePopper`
* `applyMinWidth`
* `applyMaxHeight`