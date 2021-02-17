import React, { FC } from 'react';
import { cnSpecs } from '../Specs';

export interface SpecsItemProps {
    name: string;
    value: string;
}

export const SpecsItem: FC<SpecsItemProps> = ({ name, value }) => (
    <dl className={cnSpecs('Item')}>
        <dt className={cnSpecs('Name')}>
            <span className={cnSpecs('TextWrapper')}>
                <span className={cnSpecs('Text')}>{name}</span>
            </span>
        </dt>
        <dd className={cnSpecs('Value')}>
            <span className={cnSpecs('TextWrapper')}>
                <span className={cnSpecs('Text')} dangerouslySetInnerHTML={{ __html: value }} />
            </span>
        </dd>
    </dl>
);
