import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

// base
import {
  ICheckboxProps as ICheckboxBaseProps,
  Checkbox as CheckboxBase
} from "../Checkbox";
// _lines
import { withLinesMulti } from "../_lines/Checkbox_lines_multi";
import { withLinesOne } from "../_lines/Checkbox_lines_one";
// _size
import { withSizeM } from "../_size/Checkbox_size_m";
import { withSizeS } from "../_size/Checkbox_size_s";
// _theme
import { withThemeDefault } from "../_theme/Checkbox_theme_default";

export * from "../Checkbox";

export interface ICheckboxProps extends ICheckboxBaseProps {
  lines?: "multi" | "one";
  size?: "m" | "s";
  theme?: "default";
}

export const Checkbox = compose(
  withThemeDefault,
  composeU(withLinesMulti, withLinesOne),
  composeU(withSizeM, withSizeS)
)(CheckboxBase) as FC<ICheckboxProps>;
