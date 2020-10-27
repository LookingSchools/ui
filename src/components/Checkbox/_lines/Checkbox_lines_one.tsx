import { withBemMod } from "@bem-react/core";

import { cnCheckbox } from "../Checkbox";
import "./Checkbox_lines_one.scss";

export interface ICheckboxLinesOneProps {
  lines?: "one";
}

/**
 * @param {ICheckboxLinesOneProps} props
 */
export const withLinesOne = withBemMod<ICheckboxLinesOneProps>(cnCheckbox(), {
  lines: "one"
});
