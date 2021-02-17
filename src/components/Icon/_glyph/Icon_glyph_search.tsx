import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.scss';
import './Icon_glyph_search.scss';

export interface IWithGlyphCartProps {
    /**
     * Символ иконки
     */
    glyph?: 'search';
}

export const withGlyphSearch = withBemMod<IWithGlyphCartProps, IIconProps>(
    cnIcon(),
    { glyph: 'search' },
    Icon => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            {props.size === 's' ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.74999 13C8.17498 13 9.48899 12.5228 10.541 11.7194L14.494 15.6726C14.82 15.998 15.3469 15.998 15.6729 15.6726C15.9979 15.3472 15.9979 14.8195 15.6729 14.4941L11.719 10.5409C12.523 9.4894 13 8.1754 13 6.75C13 3.2982 10.202 0.5 6.74999 0.5C3.29799 0.5 0.5 3.2982 0.5 6.75C0.5 10.2018 3.29799 13 6.74999 13ZM11.333 6.75C11.333 9.2813 9.28098 11.3333 6.74999 11.3333C4.21899 11.3333 2.16699 9.2813 2.16699 6.75C2.16699 4.2187 4.21899 2.1667 6.74999 2.1667C9.28098 2.1667 11.333 4.2187 11.333 6.75Z"
                        fill="#000"
                    />
                </svg>
            ) : (
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.60808 16.7162C10.4567 16.7162 12.1614 16.0971 13.5261 15.0549L18.6543 20.1833C19.0773 20.6055 19.7609 20.6055 20.1838 20.1833C20.6054 19.7612 20.6054 19.0766 20.1838 18.6545L15.0543 13.526C16.0973 12.1619 16.7162 10.4573 16.7162 8.6081C16.7162 4.13009 13.0863 0.5 8.60808 0.5C4.12982 0.5 0.5 4.13009 0.5 8.6081C0.5 13.0861 4.12982 16.7162 8.60808 16.7162ZM14.5536 8.6081C14.5536 11.8919 11.8915 14.554 8.60808 14.554C5.32463 14.554 2.66258 11.8919 2.66258 8.6081C2.66258 5.32425 5.32463 2.6622 8.60808 2.6622C11.8915 2.6622 14.5536 5.32425 14.5536 8.6081Z"
                        fill="#000"
                    />
                </svg>
            )}
        </Icon>
    )
);
