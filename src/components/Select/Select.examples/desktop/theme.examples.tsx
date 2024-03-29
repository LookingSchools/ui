import React, { useState } from 'react';
import { Select } from '../../desktop/bundle';

const options = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

export const Theme = () => {
    const [value, setValue] = useState('a');

    return (
        <Select
            theme="default"
            size="m"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            options={options}
        />
    );
};
