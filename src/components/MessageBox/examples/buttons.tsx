import React from 'react';
import { Button } from '../../Button/Button.bundle';
import { MessageBox } from '../../MessageBox/desktop/bundle';

export const Buttons = () => (
    <div style={{ padding: '16px' }}>
        <MessageBox
            onClose={() => null}
            theme="default"
            size="m"
            actions={
                <>
                    <Button theme="clear" size="m">
                        Отклонить
                    </Button>
                    <Button theme="primary" size="m">
                        Принять
                    </Button>
                </>
            }
        >
            Новая почта с классными темами теперь для вас!
        </MessageBox>
    </div>
);
