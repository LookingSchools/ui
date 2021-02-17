import React, { ReactNode } from "react";
import { IClassNameProps } from "@bem-react/core";

import { cnButton } from "../Button";
import "./Button-Text.scss";

export interface IButtonTextProps extends IClassNameProps {
    children?: ReactNode;
}

export const ButtonText = ({ children, className, ...props }: IButtonTextProps) => (
    <span {...props} className={cnButton("Text", null, [className])}>
        {children}
    </span>
);
