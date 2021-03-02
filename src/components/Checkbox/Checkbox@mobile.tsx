import { withRegistry } from "@bem-react/di";

import { Checkbox as CheckboxCommon } from "./Checkbox";
import { checkboxRegistry } from "./Checkbox.registry/mobile";

export * from "./Checkbox";

export const Checkbox = withRegistry(checkboxRegistry)(CheckboxCommon);
