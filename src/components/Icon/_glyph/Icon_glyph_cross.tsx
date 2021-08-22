import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_cross.scss";

export interface IWithGlyphCrossProps {
    /**
     * Символ иконки
     */
    glyph?: "cross";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphCross = withBemMod<IWithGlyphCrossProps, IIconProps>(
    cnIcon(),
    { glyph: "cross" },
    (Icon) => ({ className, size, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true, size }, [className])}>
            {size === "xs" ? (
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.292999 0.29303C0.105999 0.48103 0 0.735 0 1C0 1.265 0.105999 1.51903 0.292999 1.70703L5.086 6.5L0.292999 11.293C0.110999 11.482 0.00999341 11.734 0.0119934 11.996C0.0149934 12.259 0.119993 12.509 0.304993 12.695C0.490993 12.88 0.740998 12.985 1.004 12.988C1.266 12.99 1.518 12.889 1.707 12.707L6.5 7.914L11.293 12.707C11.482 12.889 11.734 12.99 11.996 12.988C12.259 12.985 12.509 12.88 12.695 12.695C12.88 12.509 12.985 12.259 12.988 11.996C12.99 11.734 12.889 11.482 12.707 11.293L7.914 6.5L12.707 1.70703C12.889 1.51803 12.99 1.26603 12.988 1.00403C12.985 0.741028 12.88 0.490993 12.695 0.304993C12.509 0.119993 12.259 0.0150239 11.996 0.0120239C11.734 0.0100239 11.482 0.11103 11.293 0.29303L6.5 5.086L1.707 0.29303C1.52 0.10603 1.265 0 1 0C0.735 0 0.480999 0.10603 0.292999 0.29303Z"
                        fill="black"
                    />
                </svg>
            ) : (
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.292999 0.29303C0.105999 0.48103 0 0.735 0 1C0 1.265 0.105999 1.51903 0.292999 1.70703L5.086 6.5L0.292999 11.293C0.110999 11.482 0.00999341 11.734 0.0119934 11.996C0.0149934 12.259 0.119993 12.509 0.304993 12.695C0.490993 12.88 0.740998 12.985 1.004 12.988C1.266 12.99 1.518 12.889 1.707 12.707L6.5 7.914L11.293 12.707C11.482 12.889 11.734 12.99 11.996 12.988C12.259 12.985 12.509 12.88 12.695 12.695C12.88 12.509 12.985 12.259 12.988 11.996C12.99 11.734 12.889 11.482 12.707 11.293L7.914 6.5L12.707 1.70703C12.889 1.51803 12.99 1.26603 12.988 1.00403C12.985 0.741028 12.88 0.490993 12.695 0.304993C12.509 0.119993 12.259 0.0150239 11.996 0.0120239C11.734 0.0100239 11.482 0.11103 11.293 0.29303L6.5 5.086L1.707 0.29303C1.52 0.10603 1.265 0 1 0C0.735 0 0.480999 0.10603 0.292999 0.29303Z"
                        fill="black"
                    />
                </svg>
            )}
        </Icon>
    )
);
