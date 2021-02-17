import * as React from 'react';
import { compose, composeU } from '@bem-react/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';

import * as stubData from './datastub';

import { DiscountBadge as DiscountBadgeBase, IDiscountBadgeProps } from './DiscountBadge';

// _size
import { withSizeL } from './_size/DiscountBadge_size_l';
import { withSizeM } from './_size/DiscountBadge_size_m';

// _theme
import { withThemeBlack } from './_theme/DiscountBadge_theme_black';
import { withThemeDefault } from './_theme/DiscountBadge_theme_default';

const DiscountBadge = compose(
    composeU(withSizeL, withSizeM),
    composeU(withThemeBlack, withThemeDefault)
)(DiscountBadgeBase);

storiesOf('Controls|DiscountBadge', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./DiscountBadge.md').default,
            },
        })
    )
    .add('Бейдж скидки', () => {
        return (
            <>
                <DiscountBadge theme="default" size="m" percent={30} />
                <DiscountBadge theme="default" size="l" percent={10} />
            </>
        );
    })
    .add('Пример бейджа из стаба', () => {
        const { theme, size, percent } = stubData.dataBigBlack as IDiscountBadgeProps;

        return <DiscountBadge theme={theme} size={size} percent={percent} />;
    });
