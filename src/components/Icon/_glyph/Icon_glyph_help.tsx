import React from "react";
import { withBemMod } from "@bem-react/core";

import { IIconProps, cnIcon } from "../Icon";
import "./Icon_glyph.scss";
import "./Icon_glyph_help.scss";

export interface IWithGlyphHelpProps {
    /**
     * Символ иконки
     */
    glyph?: "help";
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphHelp = withBemMod<IWithGlyphHelpProps, IIconProps>(
    cnIcon(),
    { glyph: "help" },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" width="0" height="0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM7.8 8.929c0-2.429 1.956-3.933 4.566-3.933 2.573 0 4.385 1.54 4.385 3.625v.109c0 1.975-1.141 2.881-2.664 3.57l-.362.162c-.435.2-.58.418-.58.963a.707.707 0 0 1-.707.706h-.562a.835.835 0 0 1-.833-.834c0-1.232.398-1.94 1.467-2.41l.363-.163c1.268-.58 1.776-1.034 1.776-2.013 0-1.032-.905-1.757-2.283-1.757-1.415 0-2.466.725-2.466 2.083a.525.525 0 0 1-.525.525h-.943a.634.634 0 0 1-.635-.633H7.8zm4.295 6.126a1.527 1.527 0 0 0-1.559 1.559c0 .906.689 1.577 1.559 1.577.887 0 1.576-.671 1.576-1.577 0-.907-.687-1.559-1.576-1.559z" fill="#000"/></svg>        
        </Icon>
    )
);
