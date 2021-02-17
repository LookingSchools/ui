import React, { FC } from "react";

import { Typography } from "../../Typography/Typography.bundle";
import { cnSpecs } from "../Specs";

type SpecsTitleProps = {
    showSpecs: boolean;
    showDescription: boolean;
};

export const SpecsTitle: FC<SpecsTitleProps> = ({ showSpecs, showDescription }) => (
    <Typography tag="h2" className={cnSpecs("Title")}>
        {showSpecs && "характеристики"}
        {showSpecs && showDescription && " и "}
        {showDescription && "описание"}
    </Typography>
);
