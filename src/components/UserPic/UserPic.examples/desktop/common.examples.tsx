import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { UserPic } from '../../UserPic.bundle/desktop';

const parameters = {
    docs: {
        readme: require('../../UserPic.md'),
    },
};

export default {
    title: 'Select/desktop',
    decorators: [withKnobs],
    parameters,
};

export const Default = () => (
    <>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="43978/351415393-30646433" size="m" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic avatarId="0/0-0" hasCamera size="m" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="0/0-0" hasCamera size="m" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic lodpiUrl="https://jing.yandex-team.ru/files/kri0-gen/halp_orange.jpg" size="m" />
        </div>
    </>
);

Default.story = {
    name: 'default',
};
