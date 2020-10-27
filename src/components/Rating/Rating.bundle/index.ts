import { compose, composeU } from "@bem-react/core";
import { Rating as RatingBase } from "../Rating";
import { withSizeS } from "../_size/Rating_size_s";
import { withSizeM } from "../_size/Rating_size_m";
import { withSizeL } from "../_size/Rating_size_l";
import { withTypeExtended } from "../_type/Rating_type_extended";

export * from "../Rating";

export const Rating = compose(
  composeU(withSizeS, withSizeM, withSizeL),
  withTypeExtended
)(RatingBase);
