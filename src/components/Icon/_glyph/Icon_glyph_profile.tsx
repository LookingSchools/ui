import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.scss';
import './Icon_glyph_profile.scss';

export interface IWithGlyphProfileProps {
    /**
     * Символ иконки
     */
    glyph?: 'profile';
}

export const withGlyphProfile = withBemMod<IWithGlyphProfileProps, IIconProps>(
    cnIcon(),
    { glyph: 'profile' },
    Icon => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path
                        d="M14.5238 4.97596C14.5238 2.47655 12.4994 0.452148 10 0.452148C7.50061 0.452148 5.4762 2.47655 5.4762 4.97596C5.4762 7.47536 7.50061 9.49977 10 9.49977C12.4994 9.49977 14.5238 7.47536 14.5238 4.97596ZM0.952393 16.2855V17.4108C0.952393 18.0385 1.46127 18.5474 2.089 18.5474H17.911C18.5388 18.5474 19.0476 18.0385 19.0476 17.4108V16.2855C19.0476 12.3271 13.0197 11.1962 10 11.1962C6.98037 11.1962 0.952393 12.3271 0.952393 16.2855Z"
                        fill="#24292E"
                    />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="19" height="19" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
        </Icon>
    )
);
