# UserPic

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/UserPic' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=UserPic.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>
<!-- description:start -->
Компонент для создания иконки авторизованного пользователя (аватарки).
<!-- description:end -->

## Свойства

<!-- props:start -->
| Свойство    | Тип                                                                                                                                                                                                                                                               | По умолчанию                        | Описание                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| addonAfter? | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —                                   | Дополнительный контент после элемента `Image`                                                                          |
| innerRef?   | `RefObject<HTMLDivElement>`                                                                                                                                                                                                                                       | —                                   | Ссылка на корневой DOM-элемент компонента                                                                              |
| host?       | `string`                                                                                                                                                                                                                                                          | `'https://avatars.mds.yandex.net'.` | URL домена, на котором хранятся изображения аватарок                                                                   |
| avatarId?   | `string`                                                                                                                                                                                                                                                          | `'0/0-0'`                           | Уникальный идентификатор аватарки пользователя                                                                         |
| lodpiUrl?   | `string`                                                                                                                                                                                                                                                          | —                                   | Кастомная ссылка на изображение-аватар; позволяет вывести свое изображение стилизованно под UserPic                    |
| hidpiUrl?   | `string`                                                                                                                                                                                                                                                          | —                                   | Кастомная ссылка на изображение-аватар в двойном качестве; позволяет вывести свое изображение стилизованно под UserPic |
| plus?       | `false \| true`                                                                                                                                                                                                                                                   | —                                   | Наличие у аватарки окантовки «plus»                                                                                    |
| className?  | `string`                                                                                                                                                                                                                                                          | —                                   | Дополнительный класс                                                                                                   |
<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->
<h3>hasCamera</h3>
<p>Модификатор, отвечающий за появление иконки камеры на UserPic без аватара.</p>
<ul>
    <li>
        <p>common</p>
        <ul>
            <li>
                <strong><code>hasCamera?</code></strong>
                <code>boolean</code>
                <p>Показывать иконку камеры для стандартного аватара</p>
            </li>
            <li>
                <strong><code>origin?</code></strong>
                <code>string</code>
                <p>Название сервиса, на котором находится UserPic</p>
            </li>
            <li>
                <strong><code>cameraURL?</code></strong>
                <code>string</code>
                <p>Ссылка, открывающаяся при клике на камеру</p>
            </li>
        </ul>
    </li>
</ul>


<h3>size</h3>
<p>Модификатор, отвечающий за размер аватарки.</p>

Чтобы изменить размер кнопки, установите свойство `size` в одно из следующих значений: `"m"`, `"s"`.
<!-- modifiers:end -->
