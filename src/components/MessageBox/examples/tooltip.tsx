import React from 'react';
import { MessageBox } from '../../MessageBox/desktop/bundle';

export const Text = () => (
    <>
        <MessageBox theme="default" size="s" layout="tooltip">
            Пометить письмо как важное <i key="i">Shift + l</i>
        </MessageBox>
        <br />
        <br />
        <MessageBox theme="default" size="m" layout="tooltip">
            Письмо содержит неверную или поддельную информацию об отправителе.
            <br />
            Также кто-то мог изменить текст письма после его отправки.
        </MessageBox>
        <br />
        <br />
        <MessageBox theme="default" size="l" layout="tooltip">
            Письмо содержит неверную или поддельную информацию об отправителе.
            <br />
            Также кто-то мог изменить текст письма после его отправки.
            <br key="br1" />
            <br key="br2" />
            <b key="b1">Подпись</b> отсутствует
            <br key="br3" />
            <b key="b2">Шифрования</b> нет
            <br key="br4" />
            <b key="b3">Сборщик</b> нет
        </MessageBox>
    </>
);
