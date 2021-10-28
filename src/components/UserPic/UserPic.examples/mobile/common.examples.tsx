import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { UserPic } from '../../UserPic.bundle/mobile';

const parameters = {
    docs: {
        readme: require('../../UserPic.md'),
    },
};

export default {
    title: 'UserPic/mobile',
    decorators: [withKnobs],
    parameters,
};

export const Default = () => (
    <>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="43978/351415393-30646433" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic avatarId="0/0-0" hasCamera />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="0/0-0" hasCamera />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic lodpiUrl="https://storage.yandexcloud.net/lookingschools-s3/avatars/man-128.png" />
        </div>
    </>
);

Default.story = {
    name: 'default',
};
