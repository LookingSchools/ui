import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';

import { Socials } from './Socials.bundle';

storiesOf('Controls|Socials', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./Socials.md').default,
            },
        })
    )
    .add('all', () => (
        <div>
            <Socials icons={['facebook', 'instagram', 'youtube', 'twitter', 'telegram']} />
        </div>
    ));
