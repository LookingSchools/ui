import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.scss';
import './Icon_glyph_create-course.scss';

export interface IWithGlyphCreateCourseProps {
    /**
     * Символ иконки
     */
    glyph?: 'create-course';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphCreateCourse = withBemMod<IWithGlyphCreateCourseProps, IIconProps>(
    cnIcon(),
    { glyph: 'create-course' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M13.6928 1.08331C20.2742 1.08331 25.6095 6.41859 25.6095 13C25.6095 19.5814 20.2742 24.9166 13.6928 24.9166C7.1114 24.9166 1.77612 19.5814 1.77612 13C1.77612 6.41859 7.1114 1.08331 13.6928 1.08331ZM13.6928 6.49998C13.0945 6.49998 12.6095 6.985 12.6095 7.58331V11.9166H8.27612C7.72055 11.9166 7.26266 12.3349 7.20008 12.8736L7.19279 13C7.19279 13.5983 7.67781 14.0833 8.27612 14.0833H12.6095V18.4166C12.6095 18.9722 13.0277 19.4301 13.5664 19.4927L13.6928 19.5C14.2911 19.5 14.7761 19.015 14.7761 18.4166V14.0833H19.1095C19.665 14.0833 20.1229 13.6651 20.1855 13.1263L20.1928 13C20.1928 12.4017 19.7078 11.9166 19.1095 11.9166H14.7761V7.58331C14.7761 7.02774 14.3579 6.56985 13.8191 6.50727L13.6928 6.49998Z" fill="#24292E"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="26" height="26" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </Icon>
    ),
);
