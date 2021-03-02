import { withRegistry } from "@bem-react/di";

import "../polyfills/click-event";
import { Popup as PopupCommon } from "./Popup";
import { popupRegistry } from "./Popup.registry/mobile";

export * from "./Popup";
export const Popup = withRegistry(popupRegistry)(PopupCommon);
