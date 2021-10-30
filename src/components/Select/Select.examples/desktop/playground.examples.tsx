import React, { useState } from 'react';
import { select, boolean, object } from '@storybook/addon-knobs';
import { Select } from '../../desktop/bundle';

const rawOptions = [
    { value: 1, content: 1 },
    { value: 2, content: 2 },
    { value: 'c', content: 'hello' },
    { value: 'd', content: 'darkness' },
    { value: 'e', content: 'my', disabled: true },
    { value: 'f', content: 'old' },
    { value: 'g', content: 'friend' },
];

export const Playground = () => {
    const [value, setValue] = useState('с');

    const size = select('size', ['m', 's'], 'm') as any;
    const theme = select('theme', ['default', ''], 'default') as any;
    const disabled = boolean('disabled', false);
    const renderControl = boolean('renderControl', false);
    const options = object('options', rawOptions);

    return (
        <div>
            <Select
                disabled={disabled}
                theme={theme}
                size={size}
                value={value}
                renderControl={renderControl}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

// Playground.story = {
//     name: 'playground',
// };
