import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';
import * as stubData from './datastub';

import { Gallery } from './Gallery.bundle';

function getImages() {
    return stubData.dataDefault.images;
}

storiesOf('Controls|Gallery', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./Gallery.md').default,
            },
        })
    )
    .add('preview', () => {
        return (
            <div style={{ width: '1184px' }}>
                <div style={{ width: '60%' }}>
                    <Gallery images={getImages()} discount={32} />
                </div>
            </div>
        );
    });
