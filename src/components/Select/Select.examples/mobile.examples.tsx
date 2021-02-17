import React, { useState, useRef } from 'react';
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs';

import { Select } from '../Select.bundle/mobile';
import { EXAMPLE_MOBILE_TOKEN, parameters } from './examples-config';

export default {
    title: EXAMPLE_MOBILE_TOKEN,
    decorators: [withKnobs],
    parameters,
};

const rawOptions = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

export const Playground = () => {
    const [value, setValue] = useState('a');
    const scopeRef = useRef(null);

    const size = select('size', ['m', 's'], 'm') as any;
    const theme = select('theme', ['default', ''], 'default') as any;
    const disabled = boolean('disabled', false);
    const options = object('options', rawOptions);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                disabled={disabled}
                theme={theme}
                size={size}
                value={value}
                onChange={event => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
