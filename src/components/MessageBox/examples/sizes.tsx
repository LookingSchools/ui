import React from 'react';
import { Button } from '../../Button/Button.bundle';
import { MessageBox } from '../../MessageBox/desktop/bundle';

export const Size = () => (
    <>
        <div style={{ padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="s"
                actions={
                    <>
                        <Button size="s" theme="primary">
                            Понятно
                        </Button>
                    </>
                }
            >
                Новый раздел с вашими покупками
            </MessageBox>
        </div>
        <div style={{ padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="m"
                actions={
                    <>
                        <Button size="m" theme="primary">
                            Понятно
                        </Button>
                    </>
                }
            >
                Новая почта <b>squorax@gmail.com</b> привязана к вашему аккаунту
            </MessageBox>
        </div>
        <div style={{ padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="l"
                actions={
                    <>
                        <Button size="l" theme="primary">
                            Подробнее
                        </Button>
                    </>
                }
            >
                Письмо содержит неверную или поддельную информацию об отправителе. Также кто-то мог изменить текст
                письма после его отправки.
            </MessageBox>
        </div>
    </>
);
