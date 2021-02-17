import React from "react";
import { cnRating } from "../Rating";

import i18n from "@lookingschools/i18n";
import * as keyset from "../Rating.i18n";

const i18nRating = i18n(keyset);

export interface IRatingValueProps {
    base: number;
    value: number;
}

export const RatingValue = (props: IRatingValueProps) => (
    <React.Fragment>
        &nbsp;
        <span className={cnRating("Value")}>{props.value}</span>
        <span className={cnRating("Delimiter")}>{i18nRating("из")}</span>
        <span className={cnRating("Base")}>{props.base}</span>
    </React.Fragment>
);
