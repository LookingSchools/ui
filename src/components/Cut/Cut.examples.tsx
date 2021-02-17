import React from 'react';
import { compose, composeU } from '@bem-react/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';

import { Cut as CutBase } from './Cut';

// _size
import { withSizeL } from './_size/Cut_size_l';
import { withSizeM } from './_size/Cut_size_m';
import { withSizeS } from './_size/Cut_size_s';

const Cut = compose(composeU(withSizeL, withSizeM, withSizeS))(CutBase);

const line = 2;
const lineHeight = 18;
const style = { width: 100 };
const text = 'Очень длинный текст текст текст текст текст';
const shortText = 'Короткий';

// eslint-disable-next-line max-len
const visible = 'Отец мой Андрей Петрович Гринев в молодости своей служил';
// eslint-disable-next-line max-len
const invisible =
    ' при графе Минихе и вышел в отставку премьер-майором в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Авдотье Васильевне Ю., дочери бедного тамошнего дворянина. Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве.';
const afterContentStyle = {
    color: '#f00',
    display: 'block',
    cursor: 'pointer',
};
const afterContentText = 'Капитанская дочка';
const afterContent = <div style={afterContentStyle}>{afterContentText}</div>;

storiesOf('Controls|Cut/', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./Cut.md').default,
            },
        })
    )
    .add('plain', () => (
        <div style={style}>
            <Cut lines={line} lineHeight={lineHeight}>
                {text}
            </Cut>
        </div>
    ))
    .add('default', () => (
        <div style={style}>
            <Cut>{`${text} ${text}`}</Cut>
        </div>
    ))
    .add('size', () => (
        <div style={style}>
            <Cut size="l">{`${text} ${text}`}</Cut>
            <Cut size="m">{`${text} ${text}`}</Cut>
            <Cut size="s">{`${text} ${text}`}</Cut>
        </div>
    ))
    .add('oneLine', () => (
        <div style={style}>
            <Cut lines={1} lineHeight={lineHeight}>
                {text}
            </Cut>
        </div>
    ))
    .add('breakWords', () => (
        <div style={style}>
            <Cut lines={line} lineHeight={lineHeight} breakWords>
                {text}
            </Cut>
        </div>
    ))
    .add('noEllipsis', () => (
        <div style={style}>
            <Cut lines={line} lineHeight={lineHeight} noEllipsis>
                {text}
            </Cut>
        </div>
    ))
    .add('more', () => (
        <div style={{ width: 300 }}>
            <Cut visible={visible} invisible={invisible} />
        </div>
    ))
    .add('hide', () => (
        <div style={{ width: 300 }}>
            <Cut hide="Скрыть" visible={visible} invisible={invisible} />
        </div>
    ))
    .add('fixedHeight', () => (
        <div style={{ ...style, backgroundColor: '#eee' }}>
            <Cut lines={line} lineHeight={lineHeight} fixedHeight>
                {shortText}
            </Cut>
        </div>
    ))
    .add('afterContent', () => (
        <div style={{ width: 300 }}>
            <Cut visible={visible} invisible={invisible} afterContent={afterContent} />
        </div>
    ));
