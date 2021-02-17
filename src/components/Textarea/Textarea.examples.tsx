import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';

import { Textarea } from './Textarea.bundle';

storiesOf('Controls|Textarea', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./Textarea.md').default,
            },
        })
    )
    .add('playground', () => {
        const [value, setValue] = useState('');

        const theme = select('theme', ['default', ''], 'default') as any;
        const size = select('size', ['m', 's'], 'm') as any;
        const hasClear = boolean('hasClear', false);
        const disabled = boolean('disabled', false);
        const state = select('state', ['error', ''], '') as any;
        const hint = text('hint', '');

        return (
            <div>
                <Textarea
                    disabled={disabled}
                    hasClear={hasClear}
                    size={size}
                    theme={theme}
                    placeholder="Placeholder"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onClearClick={() => setValue('')}
                    state={state}
                    hint={hint}
                    rows={0}
                />
            </div>
        );
    });

storiesOf('Controls|Textarea/', module)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./Textarea.md').default,
            },
        })
    )
    .add('_hasClear', () => HasClear())
    .add('_theme', () => Theme())
    .add('_size', () => Size())
    .add('_state', () => State());

export const HasClear = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <>
            <Textarea
                hasClear
                size="m"
                theme="default"
                value={value1}
                onChange={event => setValue1(event.target.value)}
                onClearClick={() => setValue1('')}
                rows={0}
            />
            <Textarea
                hasClear
                size="s"
                theme="default"
                value={value2}
                onChange={event => setValue2(event.target.value)}
                onClearClick={() => setValue2('')}
                rows={0}
            />
        </>
    );
};

export const Theme = () => (
    <>
        <Textarea size="m" theme="default" rows={0} defaultValue="theme default" />
    </>
);

export const Size = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textarea size="m" theme="default" rows={0} defaultValue="size m" />
        </div>
        <div style={{ padding: 4 }}>
            <Textarea size="s" theme="default" rows={0} defaultValue="size s" />
        </div>
    </>
);

export const State = () => (
    <>
        <Textarea state="error" hint="Error message" size="m" theme="default" rows={0} defaultValue="view default" />
    </>
);
