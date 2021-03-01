import React from 'react';
import { Button } from '../../Button/Button.bundle';
import { MessageBox, Corner } from '../../MessageBox/desktop/bundle';

export const Layout = () => (
    <>
        <div style={{ padding: '16px' }}>
            <MessageBox
                theme="default"
                size="m"
                layout="plain"
                corner={[
                    <Corner key="corner" width={42} side="top-left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
                            <path
                                fill="#ffd426"
                                stroke="#f6cf2e"
                                d="M17.644 34.455l9.906 13.912 4.949-16.171
                                16.296-4.911-14.02-9.83.167-16.948-13.614
                                10.096L5.135 5.039l5.606 16.07L.567
                                34.62z"
                            />
                        </svg>
                    </Corner>,
                ]}
            >
                Жмите сюда, скорей
            </MessageBox>
        </div>
        <div style={{ padding: '16px' }}>
            <MessageBox theme="default" size="m" layout="tooltip">
                Пометить письмо как важное <i key="i">Shift + l</i>
            </MessageBox>
        </div>
        <div style={{ padding: '16px' }}>
            <MessageBox
                theme="default"
                size="m"
                layout="functional"
                onClose={() => {}}
                actions={
                    <>
                        <Button size="m" theme="clear">
                            Нет
                        </Button>
                        <Button size="m" theme="primary">
                            Да
                        </Button>
                    </>
                }
            >
                Согласны?
            </MessageBox>
        </div>
    </>
);
