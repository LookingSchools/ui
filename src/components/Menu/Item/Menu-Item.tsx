import React, { FC, MouseEventHandler } from 'react';
import { MenuText as Text } from '../Text/Menu-Text';

import { Icon as GlyphIcon } from '../../Icon/Icon';
import { withGlyphCheck } from '../../Icon/_glyph/Icon_glyph_check';

import { cnMenu } from '../Menu';

export interface IMenuItemProps {
    checked?: boolean;
    disabled?: boolean;
    hovered?: boolean;
    type?: string;
    needIconGlyph?: boolean;
    innerRef?: React.RefObject<HTMLDivElement>;
    className?: string;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
    id: string;
}

const Icon = withGlyphCheck(GlyphIcon);

export const MenuItem: FC<IMenuItemProps> = ({
    checked,
    children,
    className,
    disabled,
    hovered,
    needIconGlyph,
    type = 'menuitem',
    innerRef,
    id,
    ...props
}) => {
    return (
        <div
            {...props}
            aria-selected={checked}
            aria-disabled={disabled}
            // uniq id for a11y
            id={id}
            role={type}
            ref={innerRef}
            className={cnMenu(
                'Item',
                {
                    checked,
                    disabled,
                    hovered,
                    type,
                },
                [className]
            )}
        >
            {needIconGlyph && <Icon glyph="check" />}
            <Text>{children}</Text>
        </div>
    );
};
