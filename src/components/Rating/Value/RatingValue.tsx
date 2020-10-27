import React from "react";
import { cnRating } from "../Rating";

import i18nFactory from "../../../packages/i18n/src";
import * as keyset from "../Rating.i18n";

const i18n = i18nFactory(keyset);

export interface IRatingValueProps {
  base: number;
  value: number;
}

export const RatingValue = (props: IRatingValueProps) => (
  <React.Fragment>
    &nbsp;
    <span className={cnRating("Value")}>{props.value}</span>
    <span className={cnRating("Delimiter")}>{i18n("из")}</span>
    <span className={cnRating("Base")}>{props.base}</span>
  </React.Fragment>
);
