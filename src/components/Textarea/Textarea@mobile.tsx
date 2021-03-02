import { compose } from "@bem-react/core";
import { withRegistry } from "@bem-react/di";

import { withAutoFocus } from "../withAutoFocus/withAutoFocus";
import { textareaRegistry } from "./Textarea.registry/mobile";
import { Textarea as TextareaCommon } from "./Textarea";

export * from "./Textarea";
export const Textarea = compose(withRegistry(textareaRegistry), withAutoFocus)(TextareaCommon);
