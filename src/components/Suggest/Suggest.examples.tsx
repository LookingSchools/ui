import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from '@storybook-addons/docs';

import { Suggest } from './Suggest';
import { fetchData } from './fetchData';

storiesOf('Controls|Suggest/', module)
    .addDecorator(withKnobs)
    .addDecorator(
        withDocs({
            readme: {
                content: require('./Suggest.md').default,
            },
        })
    )
    .add('static-data', () => {
        const [value, setValue] = React.useState('');

        return (
            <>
                <Suggest
                    data={['Каждый', 'Охотник', 'Желает', 'Знать', 'Где', 'Сидит', 'Фазан']}
                    value={value}
                    onChange={setValue}
                />
            </>
        );
    })
    .add('suggest-async', () => {
        const [value, setValue] = React.useState('');
        const [loading, setLoading] = React.useState(false);
        const [data, setData] = React.useState<string[]>([]);

        React.useEffect(() => {
            if (value === '') {
                setData([]);
            } else if (data.length === 0) {
                setLoading(true);
                fetchData().then(response => {
                    // @ts-ignore
                    setData(response.map(value => value.name));
                    setLoading(false);
                });
            }
        }, [data.length, value]);

        return (
            <>
                <Suggest data={data} value={value} onChange={setValue} loading={loading} />
            </>
        );
    });
