import React from "react";
import { withBemMod } from "@bem-react/core";

import { cnRating } from "../Rating";

import "./Rating_size_l.scss";
import { IRatingProps } from "../Rating";

export interface IRatingSizeL {
  size?: "l";
}

export const withSizeL = withBemMod<IRatingSizeL, IRatingProps>(
  cnRating(),
  { size: "l" },
  WrappedComponent => withBemModprops => (
    <WrappedComponent starSize={26} {...withBemModprops} />
  )
);
