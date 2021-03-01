import React from 'react';
import { Button } from '../../Button/Button.bundle';
import { MessageBox } from '../desktop/bundle';

export const Theme = () => (
    <>
        <div style={{ backgroundColor: '#fff', padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                theme="default"
                size="m"
                actions={
                    <>
                        <Button theme="clear" size="s">
                            Отклонить
                        </Button>
                        <Button theme="primary" size="s">
                            Принять
                        </Button>
                    </>
                }
            >
                Новая почта с классными темами теперь для вас!
            </MessageBox>
        </div>
        <div style={{ backgroundColor: '#000', padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                theme="inverse"
                size="m"
                actions={
                    <>
                        <Button theme="clear" size="s">
                            Отклонить
                        </Button>
                        <Button theme="primary" size="s">
                            Принять
                        </Button>
                    </>
                }
            >
                Новая почта с классными темами теперь для вас!
            </MessageBox>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px' }}>
            <MessageBox
                onClose={() => null}
                theme="promo"
                size="m"
                actions={
                    <>
                        <Button theme="primary" size="s">
                            Подробнее
                        </Button>
                    </>
                }
            >
                Сохраняйте картинки, полезные ссылки, фотографии красивых мест и многое другое в коллекции
            </MessageBox>
        </div>
    </>
);
