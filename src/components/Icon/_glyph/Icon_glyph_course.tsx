import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.scss';
import './Icon_glyph_course.scss';

export interface IWithGlyphCourseProps {
    /**
     * Символ иконки
     */
    glyph?: 'course';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphCourse = withBemMod<IWithGlyphCourseProps, IIconProps>(
    cnIcon(),
    { glyph: 'course' },
    Icon => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.9063 4H5.09382C4.00855 4 3.12061 4.9 3.12061 6V20C3.12061 21.1 4.00855 22 5.09382 22H18.9063C19.9916 22 20.8795 21.1 20.8795 20V6C20.8795 4.9 19.9916 4 18.9063 4ZM13.9733 18H7.06703V16H13.9733V18ZM16.9331 14H7.06703V12H16.9331V14ZM16.9331 10H7.06703V8H16.9331V10Z"
                    fill="black"
                />
            </svg>
        </Icon>
    )
);
