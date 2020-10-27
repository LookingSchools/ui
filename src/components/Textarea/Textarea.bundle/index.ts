import { FC, MouseEventHandler } from "react";
import { compose, composeU } from "@bem-react/core";

import {
  ITextareaProps as ITextareaDesktopProps,
  Textarea as TextareaDesktop
} from "../Textarea";
// _hasClear
import { withHasClear } from "../_hasClear/Textarea_hasClear";
// _size
import { withSizeM } from "../_size/Textarea_size_m";
import { withSizeS } from "../_size/Textarea_size_s";
// _theme
import { withThemeDefault } from "../_theme/Textarea_theme_default";

export * from "../Textarea";

export interface ITextareaProps extends ITextareaDesktopProps {
  size?: "m" | "s";
  theme?: "normal";
  hasClear?: boolean;
  onClearClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Textarea = compose(
  withHasClear,
  withThemeDefault,
  composeU(withSizeM, withSizeS)
)(TextareaDesktop) as FC<ITextareaProps>;
