import React, { FC } from 'react';
import { MenuTitle as Title } from '../Title/Menu-Title';

import { cnMenu } from '../Menu';

export interface MenuGroupProps {
    /**
     * Заголовок меню
     */
    title?: string;

    /**
     * Дополнительный класс
     */
    className?: string;
}

export const MenuGroup: FC<MenuGroupProps> = ({ children, className, title, ...props }) => {
    return (
        <div {...props} role="group" className={cnMenu('Group', null, [className])}>
            {title && <Title>{title}</Title>}
            {children}
        </div>
    );
};
