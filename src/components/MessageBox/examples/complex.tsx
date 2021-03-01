import React from 'react';
import { MessageBox, Wrapper } from '../../MessageBox/desktop/bundle';

export const Complex = () => (
    <>
        <div style={{ padding: '16px' }}>
            <MessageBox
                size="l"
                theme="default"
                onClose={() => {}}
                background={
                    <img
                        style={{ filter: 'opacity(.5)', width: '100%' }}
                        src="//jing.yandex-team.ru/files/axaxaman/catalogue-banner-x3.jpeg"
                    />
                }
            >
                <Wrapper>
                    <p>Навык дня</p>
                    <h1>Развивайте речь ребенка</h1>
                    <p>Тренажер для развития речи</p>
                </Wrapper>
            </MessageBox>
        </div>
    </>
);
