import { compose, composeU } from "@bem-react/core";

import { Tumbler as TumblerBase } from "../Tumbler";
import { withSizeS } from "../_size/Tumbler_size_s";
import { withSizeM } from "../_size/Tumbler_size_m";
import { withSizeL } from "../_size/Tumbler_size_l";
import { withThemeDefault } from "../_theme/Tumbler_theme_default";

export * from "../Tumbler";

export const Tumbler = compose(
  composeU(withSizeS, withSizeM, withSizeL),
  withThemeDefault
)(TumblerBase);
