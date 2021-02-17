import { ReactElement } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { IIconProps } from '../../Icon/Icon';
import { cnButton } from '../Button';
import './Button-Icon.scss';

export type IconProvider = (className: string) => ReactElement<IIconProps>;

export interface IButtonIconProps extends IClassNameProps {
    side?: 'left' | 'right';
    provider: IconProvider;
}

export const ButtonIcon = ({ side, provider, ...props }: IButtonIconProps) => {
    const className = cnButton('Icon', { side }, [props.className]);

    return provider(className);
};
