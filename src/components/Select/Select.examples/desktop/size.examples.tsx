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

export const Size = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');

    return (
        <>
            <Select
                size="m"
                theme="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />{' '}
            <Select
                size="s"
                theme="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </>
    );
};
