import React, { FC } from "react";
import { useComponentRegistry } from "@bem-react/di";

import { cnCheckbox } from "../Checkbox";
import { ICheckboxRegistry } from "../Checkbox.registry/interface";
import "./Checkbox-Tick.scss";

export interface ICheckboxTickProps {
    theme?: string;
    indeterminate?: boolean;
    className?: string;
}

export const CheckboxTick: FC<ICheckboxTickProps> = ({ className, theme, indeterminate, ...props }) => {
    const { Icon } = useComponentRegistry<ICheckboxRegistry>(cnCheckbox());
    const glyph = indeterminate ? "type-indeterminate" : "type-tick";
    return (
        <span {...props} className={cnCheckbox("Tick", null, [className])}>
            {theme && <Icon glyph={glyph as any} />}
        </span>
    );
};
