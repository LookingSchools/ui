import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';
import { Scroller } from './Scroller';

function prepareItems(count: number) {
    const items = new Array(count);

    const style = {
        display: 'inline-block',
        width: 154,
        height: 236,
        marginRight: 8,
        borderRadius: 4,
        border: '1px solid rgba(0, 0, 0, 0.1)',
    };

    for (let i = 0; i < count; i++) {
        items[i] = <div style={style} key={i} />;
    }

    return items;
}

storiesOf('Controls|Scroller/', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./Scroller.md').default,
            },
        })
    )
    .add('playground', () => <Scroller hideArrowLine={true}>{prepareItems(10)}</Scroller>);
